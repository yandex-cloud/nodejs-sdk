import {
    handleUnaryCall,
    sendUnaryData, Server, ServerCredentials, UntypedHandleCall, credentials
} from '@grpc/grpc-js';
import {
    GetNetworkRequest, NetworkServiceService, NetworkServiceServer, CreateNetworkRequest, DeleteNetworkRequest, ListNetworkOperationsRequest, ListNetworkOperationsResponse, ListNetworkRouteTablesRequest, ListNetworkRouteTablesResponse, ListNetworkSecurityGroupsRequest, ListNetworkSecurityGroupsResponse, ListNetworksRequest, ListNetworksResponse, ListNetworkSubnetsRequest, ListNetworkSubnetsResponse, MoveNetworkRequest, UpdateNetworkRequest,
} from './generated/yandex/cloud/vpc/v1/network_service';
import { Session } from './session';
import { serviceClients } from '.';
import { Operation } from './generated/yandex/cloud/operation/operation';
import { Network } from './generated/yandex/cloud/vpc/v1/network';
import { Status } from '@grpc/grpc-js/build/src/constants';

class NetworkServiceMock implements NetworkServiceServer {
    [name: string]: UntypedHandleCall;
    list: handleUnaryCall<ListNetworksRequest, ListNetworksResponse> = jest.fn();
    create: handleUnaryCall<CreateNetworkRequest, Operation> = jest.fn();
    update: handleUnaryCall<UpdateNetworkRequest, Operation> = jest.fn();
    delete: handleUnaryCall<DeleteNetworkRequest, Operation> = jest.fn();
    listSubnets: handleUnaryCall<ListNetworkSubnetsRequest, ListNetworkSubnetsResponse> = jest.fn();
    listSecurityGroups: handleUnaryCall<ListNetworkSecurityGroupsRequest, ListNetworkSecurityGroupsResponse> = jest.fn();
    listRouteTables: handleUnaryCall<ListNetworkRouteTablesRequest, ListNetworkRouteTablesResponse> = jest.fn();
    listOperations: handleUnaryCall<ListNetworkOperationsRequest, ListNetworkOperationsResponse> = jest.fn();
    move: handleUnaryCall<MoveNetworkRequest, Operation> = jest.fn();
    get: handleUnaryCall<GetNetworkRequest, Network> = jest.fn().mockImplementation((call, callback) => {
        callback({code: Status.UNAVAILABLE}, null);
    })
}

class TestServer {
    server: Server;
    networkService: NetworkServiceMock;
    port: number | undefined;

    constructor() {
        this.server = new Server();
        this.networkService = new NetworkServiceMock();

        this.server.addService(
            NetworkServiceService,
            this.networkService,
        );
    }

    async start() {
        return new Promise((resolve, reject) => {
            this.server.bindAsync(
                '0.0.0.0:5051',
                ServerCredentials.createInsecure(),
                (error, port) => {
                    if (error) {
                        console.log(error);
                        reject(error);

                        return;
                    }
                    this.port = port;
                    this.server.start();
                    resolve(port);
                },
            );
        });
    }

    async stop() {
        return new Promise<void>((resolve) => {
            this.server.tryShutdown(() => {
                resolve();
            });
        });
    }

    getClient() {
        return this.networkService;
    }
}

describe('some tests', () => {
    let server: TestServer;
    let service: NetworkServiceMock;

    beforeAll(async () => {
        server = new TestServer();
        await server.start();
        service = server.getClient();
    });

    afterAll(async () => {
        await server.stop();
    }, 10000);

    it('test1', async () => {
        const session = new Session({ iamToken: 'test-oauth', retryConfig: { maxAttempts: 3, retryableStatusCodes: [Status.UNAVAILABLE] } });
        const client = session.client(serviceClients.NetworkServiceClient, 'localhost:5051');

        try {
            await client.get(GetNetworkRequest.fromPartial({ networkId: '123' }));
        } catch (error) {
            expect(service.get).toBeCalled();
            expect(service.get).toHaveBeenCalledTimes(3);
        }
    }, 10000);
});
