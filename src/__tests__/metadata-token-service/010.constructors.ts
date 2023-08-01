import { MetadataTokenService } from '../../token-service/metadata-token-service';
import { buildTestLogger } from '../../utils/test-logger';
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
                    MetadataTokenService.Messages.debug_ctor,
                    MetadataTokenService.DEFAULT_URL,
                    false,
                    MetadataTokenService.DEFAULT_OPTIONS,
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

                await metadataTokenService.dispose();

                expect(testLoggerFn.mock.calls)
                    .toEqual([
                        ['debug',
                            MetadataTokenService.Messages.debug_ctor,
                            url === undefined
                                ? MetadataTokenService.DEFAULT_URL
                                : url,
                            doUpdateTokenInBackground === undefined ? false : doUpdateTokenInBackground,
                            { headers: {} },
                        ], ['trace',
                            MetadataTokenService.Messages.trace_dispose,
                        ]]);
            });
        }
    }
});
