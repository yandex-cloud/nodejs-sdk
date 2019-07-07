const run = require("./").run;

const translate = require("@yandex-cloud/sdk/api/ai/translate/v2");

run(async (session, _, folderId) => {
  // create CloudService client
  const translationService = await session.client(translate.TranslationService);

  // define texts to translate
  const texts = ["NodeJS SDK examples", "Powerful, but easy to use library"];

  // issue request
  const response = await translationService.translate({
    targetLanguageCode: "ru",
    format: translate.TranslateRequest.Format.PLAIN_TEXT,
    folderId: folderId,
    texts: texts
  });

  // print results
  response.translations.forEach((text, idx) => {
    console.log(`translated '${texts[idx]}' => '${text.text}'`);
  });
});
