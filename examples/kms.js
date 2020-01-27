const run = require('./').run;
const {
    SymmetricKeyService,
    SymmetricCryptoService,
    SymmetricAlgorithm,
} = require('../api/kms/v1');

run(async (session, cloudId, folderId) => {
    const keyService = new SymmetricKeyService(session);
    const cryptoService = new SymmetricCryptoService(session);

    let keyOp = await keyService.create({
        folderId,
        defaultAlgorithm: SymmetricAlgorithm.AES_256,
    });
    keyOp = await keyOp.completion(session);

    const key = keyOp.getResponse();

    const encrypted = (
        await cryptoService.encrypt({
            keyId: key.id,
            plaintext: Buffer.from('example kms message'),
        })
    ).ciphertext;

    console.log(`got "${encrypted}" from KMS. Let's decrypt.`);

    const decrypted = (
        await cryptoService.decrypt({
            keyId: key.id,
            ciphertext: encrypted,
        })
    ).plaintext;

    console.log(`got "${decrypted}" from KMS. Is it looks good?`);

    let keyDeleteOp = await keyService.delete({
        keyId: key.id,
    });
    await keyDeleteOp.completion(session);
});
