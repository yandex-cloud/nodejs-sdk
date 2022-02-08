import { serviceClients, Session } from '@yandex-cloud/nodejs-sdk';
import {
    RecognitionSpec_AudioEncoding,
    StreamingRecognitionRequest,
} from '@yandex-cloud/nodejs-sdk/dist/generated/yandex/cloud/ai/stt/v2/stt_service';
import * as fs from 'fs';
import * as wav from 'wav';
import { Format } from 'wav';
import { getEnv } from '../utils/get-env';
import { log } from '../utils/logger';

const file = fs.createReadStream('test.wav');
const reader = new wav.Reader();

const formatPromise = new Promise<Format>((resolve) => {
    // the "format" event gets emitted at the end of the WAVE header
    reader.on('format', (format: Format) => {
        // pass the format object
        resolve(format);
    });
});

// pipe the WAVE file to the Reader instance
file.pipe(reader);

(async () => {
    const authToken = getEnv('YC_OAUTH_TOKEN');
    const folderId = getEnv('YC_FOLDER_ID');
    const session = new Session({ oauthToken: authToken });
    const client = session.client(serviceClients.SttServiceClient);

    async function* createRequest(): AsyncIterable<StreamingRecognitionRequest> {
        const format = await formatPromise;

        log(JSON.stringify(format, null, 2));
        // First message of the stream should be the config message
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
        // Now we can send the data
        for await (const chunk of file) {
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
