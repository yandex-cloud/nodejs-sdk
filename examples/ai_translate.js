const run = require('./').run;
const {
    TranslationService,
    TranslateRequest,
} = require('../api/ai/translate/v2');

run(async (session, _, folderId) => {
    const translationService = new TranslationService(session);
    const texts = ['NodeJS SDK examples', 'Powerful, but easy to use library'];

    const response = await translationService.translate({
        targetLanguageCode: 'ru',
        format: TranslateRequest.Format.PLAIN_TEXT,
        folderId: folderId,
        texts: texts,
    });

    response.translations.forEach((text, idx) => {
        console.log(`translated '${texts[idx]}' => '${text.text}'`);
    });
});
