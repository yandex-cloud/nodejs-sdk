import { serviceClients, Session, cloudApi, waitForOperation } from '@yandex-cloud/nodejs-sdk';
import { symmetricKey } from '@yandex-cloud/nodejs-sdk/kms-v1';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const {
    kms: {
        symmetric_key_service: { CreateSymmetricKeyRequest, DeleteSymmetricKeyRequest },
        symmetric_key: { SymmetricAlgorithm },
        symmetric_crypto_service: { SymmetricEncryptRequest, SymmetricDecryptRequest },
    },
} = cloudApi;

(async () => {
    const authToken = getEnv('YC_OAUTH_TOKEN');
    const folderId = getEnv('YC_FOLDER_ID');
    const session = new Session({ oauthToken: authToken });
    const keyClient = session.client(serviceClients.SymmetricKeyServiceClient);
    const cryptoClient = session.client(serviceClients.SymmetricCryptoServiceClient);

    const keyCreateOp = await keyClient.create(
        CreateSymmetricKeyRequest.fromPartial({
            folderId,
            defaultAlgorithm: SymmetricAlgorithm.AES_256,
        }),
    );
    const finishedKeyCreateOp = await waitForOperation(keyCreateOp, session);

    if (finishedKeyCreateOp.response) {
        const key = symmetricKey.SymmetricKey.decode(finishedKeyCreateOp.response.value);

        const encrypted = await cryptoClient.encrypt(
            SymmetricEncryptRequest.fromPartial({
                keyId: key.id,
                plaintext: Buffer.from('example message'),
            }),
        );

        log(`Got "${encrypted.ciphertext}" from KMS`);

        const decrypted = await cryptoClient.decrypt(
            SymmetricDecryptRequest.fromPartial({
                keyId: key.id,
                ciphertext: encrypted.ciphertext,
            }),
        );

        log(`Got "${decrypted.plaintext}" from KMS`);

        const keyRemoveOp = await keyClient.delete(
            DeleteSymmetricKeyRequest.fromPartial({
                keyId: key.id,
            }),
        );

        await waitForOperation(keyRemoveOp, session);
    }
})();
