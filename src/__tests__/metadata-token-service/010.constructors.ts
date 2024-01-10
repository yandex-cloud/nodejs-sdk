import { MetadataTokenService } from '../../token-service/metadata-token-service';
import { buildTestLogger } from '../../utils/test-logger';
import {
    Messages,
    DEFAULT_URL,
    DEFAULT_OPTIONS,
} from '../../token-service/metadata-token-service.consts';

import Mock = jest.Mock;

const {
    testLogger,
    testLoggerFn,
} = buildTestLogger();

beforeEach(() => {
    jest.spyOn(MetadataTokenService.prototype, 'getToken');
    // so init sequenc whouldn't start in the constructor
    (MetadataTokenService.prototype.getToken as Mock).mockReturnValue(Promise.resolve());
});

afterEach(() => {
    testLoggerFn.mockReset();
});

describe('metadata-token-service.constructors', () => {
    it('constructor: default', async () => {
        const metadataTokenService = new MetadataTokenService({ logger: testLogger });

        expect(testLoggerFn.mock.calls)
            .toEqual([
                ['debug',
                    Messages.debug_ctor,
                    DEFAULT_URL,
                    false,
                    DEFAULT_OPTIONS,
                ]]);
    });

    for (const url of [undefined, 'AnURL']) {
        for (const doUpdateTokenInBackground of [undefined, true, false]) {
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            it(`constructor: ${url} ${doUpdateTokenInBackground}`, async () => {
                const metadataTokenService = url
                    ? new MetadataTokenService(url, {
                        headers: {},
                        doUpdateTokenInBackground,
                        logger: testLogger,
                    })
                    : new MetadataTokenService({
                        headers: {},
                        doUpdateTokenInBackground,
                        logger: testLogger,
                    });

                await metadataTokenService.destroy();

                expect(testLoggerFn.mock.calls)
                    .toEqual([
                        ['debug',
                            Messages.debug_ctor,
                            url === undefined
                                ? DEFAULT_URL
                                : url,
                            doUpdateTokenInBackground === undefined ? false : doUpdateTokenInBackground,
                            { headers: {} },
                        ], ['trace',
                            Messages.trace_destroy,
                        ]]);
            });
        }
    }
});
