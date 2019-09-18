const run = require('./').run;
const translate = require('yandex-cloud/api/ai/translate/v2');
run(async (session, _, folderId) => {
  const translationService = await session.client(translate.TranslationService);
  const texts = ['NodeJS SDK examples', 'Powerful, but easy to use library'];
  const response = await translationService.translate({
    targetLanguageCode: 'ru',
    format: translate.TranslateRequest.Format.PLAIN_TEXT,
    folderId: folderId,
    texts: texts
  });
  response.translations.forEach((text, idx) => {
    console.log(`translated '${texts[idx]}' => '${text.text}'`);
  });
});
