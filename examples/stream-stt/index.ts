import { serviceClients, Session } from '@yandex-cloud/nodejs-sdk';
import {
    RecognitionSpec_AudioEncoding,
    StreamingRecognitionRequest,
} from '@yandex-cloud/nodejs-sdk/dist/generated/yandex/cloud/ai/stt/v2/stt_service';
import * as fs from 'fs';
import * as stream from 'stream';
import * as wav from 'wav';
import { getEnv } from '../utils/get-env';
import { log } from '../utils/logger';

const file = fs.createReadStream('test.wav');
const reader = new wav.Reader();
const data = new stream.PassThrough();

const formatPromise = new Promise<wav.Format>((resolve) => {
    // the "format" event gets emitted at the end of the WAVE header
    reader.on('format', (format: wav.Format) => {
        // pass the format object
        resolve(format);
    });
});

// pipe the WAVE file to the Reader instance
file.pipe(reader);
reader.pipe(data);

(async () => {
    const authToken = getEnv('YC_OAUTH_TOKEN');
    const folderId = getEnv('YC_FOLDER_ID');
    const session = new Session({ oauthToken: authToken });
    const client = session.client(serviceClients.SttServiceClient);

    async function* createRequest(): AsyncIterable<StreamingRecognitionRequest> {
        const format = await formatPromise;

        yield StreamingRecognitionRequest.fromPartial({
            config: {
                specification: {
                    audioEncoding: RecognitionSpec_AudioEncoding.LINEAR16_PCM,
                    sampleRateHertz: format.sampleRate,
                    audioChannelCount: format.channels,
                },
                folderId,
            },
        });
        for await (const chunk of data) {
            yield StreamingRecognitionRequest.fromPartial({
                audioContent: chunk,
            });
        }
    }

    try {
        for await (const response of client.streamingRecognize(createRequest())) {
            log(JSON.stringify(response, null, 2));
        }
    } catch (error) {
        log(error);
    }
})();
