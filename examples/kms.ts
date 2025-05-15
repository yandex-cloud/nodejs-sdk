import { Session, waitForOperation } from '@yandex-cloud/nodejs-sdk';

import { getEnv } from './utils/get-env';
import { log } from './utils/logger';
import {
    symmetricKeyService,
    symmetricCryptoService,
    symmetricKey,
} from '@yandex-cloud/nodejs-sdk/kms-v1';

(async () => {
    const authToken = getEnv('YC_OAUTH_TOKEN');
    const folderId = getEnv('YC_FOLDER_ID');
    const session = new Session({ oauthToken: authToken });
    const keyClient = session.client(symmetricKeyService.SymmetricKeyServiceClient);
    const cryptoClient = session.client(symmetricCryptoService.SymmetricCryptoServiceClient);

    const keyCreateOp = await keyClient.create(
        symmetricKeyService.CreateSymmetricKeyRequest.fromPartial({
            folderId,
            defaultAlgorithm: symmetricKey.SymmetricAlgorithm.AES_256,
        }),
    );
    const finishedKeyCreateOp = await waitForOperation(keyCreateOp, session);

    if (finishedKeyCreateOp.response) {
        const key = symmetricKey.SymmetricKey.decode(finishedKeyCreateOp.response.value);

        const encrypted = await cryptoClient.encrypt(
            symmetricCryptoService.SymmetricEncryptRequest.fromPartial({
                keyId: key.id,
                plaintext: Buffer.from('example message'),
            }),
        );

        log(`Got "${encrypted.ciphertext}" from KMS`);

        const decrypted = await cryptoClient.decrypt(
            symmetricCryptoService.SymmetricDecryptRequest.fromPartial({
                keyId: key.id,
                ciphertext: encrypted.ciphertext,
            }),
        );

        log(`Got "${decrypted.plaintext}" from KMS`);

        const keyRemoveOp = await keyClient.delete(
            symmetricKeyService.DeleteSymmetricKeyRequest.fromPartial({
                keyId: key.id,
            }),
        );

        await waitForOperation(keyRemoveOp, session);
    }
})();
