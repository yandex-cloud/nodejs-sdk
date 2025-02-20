import {
    handleUnaryCall,
    sendUnaryData, Server, ServerCredentials, ServerUnaryCall, UntypedHandleCall, UntypedServiceImplementation,
} from '@grpc/grpc-js';
import {
    GetNetworkRequest, NetworkServiceService, NetworkServiceServer, CreateNetworkRequest, DeleteNetworkRequest, ListNetworkOperationsRequest, ListNetworkOperationsResponse, ListNetworkRouteTablesRequest, ListNetworkRouteTablesResponse, ListNetworkSecurityGroupsRequest, ListNetworkSecurityGroupsResponse, ListNetworksRequest, ListNetworksResponse, ListNetworkSubnetsRequest, ListNetworkSubnetsResponse, MoveNetworkRequest, UpdateNetworkRequest,
} from './generated/yandex/cloud/vpc/v1/network_service';
import { Session } from './session';
import { serviceClients } from '.';
import { RetryPolicy } from './utils/retry-policy';
import { Operation } from './generated/yandex/cloud/operation/operation';
import { Network } from './generated/yandex/cloud/vpc/v1/network';
import { IamTokenService } from './token-service/iam-token-service';
import {
    CreateIamTokenForServiceAccountRequest, CreateIamTokenRequest, CreateIamTokenResponse, IamTokenServiceServer, IamTokenServiceService,
} from './generated/yandex/cloud/iam/v1/iam_token_service';
import {
    ApiEndpointServiceServer, ApiEndpointServiceService, GetApiEndpointRequest, ListApiEndpointsRequest, ListApiEndpointsResponse,
} from './generated/yandex/cloud/endpoint/api_endpoint_service';
import { ApiEndpoint } from './generated/yandex/cloud/endpoint/api_endpoint';

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
    get: handleUnaryCall<GetNetworkRequest, Network> = jest.fn();
}

// class IamServiceMock implements IamTokenServiceServer {
//     [name: string]: UntypedHandleCall;
//     create: handleUnaryCall<CreateIamTokenRequest, CreateIamTokenResponse> = jest.fn();
//     createForServiceAccount: handleUnaryCall<CreateIamTokenForServiceAccountRequest, CreateIamTokenResponse> = jest.fn();
// }

// class ApiEndpointMock implements ApiEndpointServiceServer {
//     [name: string]: UntypedHandleCall;
//     get: handleUnaryCall<GetApiEndpointRequest, ApiEndpoint> = jest.fn();
//     list: handleUnaryCall<ListApiEndpointsRequest, ListApiEndpointsResponse> = jest.fn();
// }

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
                '127.0.0.1:5051',
                ServerCredentials.createInsecure(),
                (error, port) => {
                    if (error) {
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
    });

    it('test1', async () => {
        const session = new Session({ oauthToken: 'test-oauth', retryConfig: { maxAttempts: 3 } });
        const client = session.client(serviceClients.NetworkServiceClient, '127.0.0.1:551');

        try {
            await client.get(GetNetworkRequest.fromPartial({ networkId: '123' }));
        } catch (error) {
            console.log(error);
            expect(service.get).toBeCalled()
            expect((service.get as jest.Mock).mock.calls).toBe(3)
        }
    });
});
