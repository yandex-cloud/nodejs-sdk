import { Session } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';
import { translationService } from '@yandex-cloud/nodejs-sdk/ai-translate-v2';

const TEXTS = ['NodeJS SDK examples', 'Powerful, but easy to use library'];
const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const client = session.client(translationService.TranslationServiceClient);

    const response = await client.translate(
        translationService.TranslateRequest.fromPartial({
            targetLanguageCode: 'ru',
            format: translationService.TranslateRequest_Format.PLAIN_TEXT,
            folderId: FOLDER_ID,
            texts: TEXTS,
        }),
    );

    for (const [idx, text] of response.translations.entries()) {
        log(`translated '${TEXTS[idx]}' => '${text.text}'`);
    }
})();
