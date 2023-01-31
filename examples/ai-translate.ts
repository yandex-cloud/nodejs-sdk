import { serviceClients, Session, cloudApi } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const { ai: { translate_translation_service: { TranslateRequest, TranslateRequest_Format: Format } } } = cloudApi;

const TEXTS = ['NodeJS SDK examples', 'Powerful, but easy to use library'];
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = await session.client(serviceClients.TranslationServiceClient);

    const response = await client.translate(TranslateRequest.fromPartial({
        targetLanguageCode: 'ru',
        format: Format.PLAIN_TEXT,
        folderId: FOLDER_ID,
        texts: TEXTS,
    }));

    for (const [idx, text] of response.translations.entries()) {
        log(`translated '${TEXTS[idx]}' => '${text.text}'`);
    }
})();
