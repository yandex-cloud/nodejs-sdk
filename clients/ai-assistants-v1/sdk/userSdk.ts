import { Client } from 'nice-grpc';
import { userService } from '..';

import { ClientCallArgs, SessionArg, TypeFromProtoc } from './types';
import {
    CreateUserRequest,
    DeleteUserRequest,
    GetUserRequest,
    ListUsersRequest,
    UpdateUserRequest,
    UserServiceService,
} from '../generated/yandex/cloud/ai/assistants/v1/users/user_service';

export type CreateUserProps = TypeFromProtoc<CreateUserRequest, 'folderId'>;

export type GetUserProps = TypeFromProtoc<GetUserRequest, 'userId'>;

export type ListUserProps = TypeFromProtoc<ListUsersRequest, 'folderId'>;

export type DeleteUserProps = TypeFromProtoc<DeleteUserRequest, 'userId'>;

export type UpdateUserProps = TypeFromProtoc<UpdateUserRequest, 'userId' | 'updateMask'>;

export class UserSdk {
    private userClient: Client<typeof UserServiceService, ClientCallArgs>;

    static ENDPOINT = 'assistant.api.cloud.yandex.net:443';

    constructor(session: SessionArg, endpoint = UserSdk.ENDPOINT) {
        this.userClient = session.client(userService.UserServiceClient, endpoint);
    }

    create(params: CreateUserProps, args?: ClientCallArgs) {
        return this.userClient.create(userService.CreateUserRequest.fromPartial(params), args);
    }

    get(params: GetUserProps, args?: ClientCallArgs) {
        return this.userClient.get(userService.GetUserRequest.fromPartial(params), args);
    }

    list(params: ListUserProps, args?: ClientCallArgs) {
        return this.userClient.list(userService.ListUsersRequest.fromPartial(params), args);
    }

    delete(params: DeleteUserProps, args?: ClientCallArgs) {
        return this.userClient.delete(userService.DeleteUserRequest.fromPartial(params), args);
    }

    update(params: UpdateUserProps, args?: ClientCallArgs) {
        return this.userClient.update(userService.UpdateUserRequest.fromPartial(params), args);
    }
}

export const initUserSdk = (session: SessionArg, endpoint = UserSdk.ENDPOINT) => {
    return new UserSdk(session, endpoint);
};
