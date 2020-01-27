import { ChannelCredentials } from 'grpc';
import { Session } from '../../../../index';

export class InvokeService {
    constructor(session?: Session);

    invoke(functionId: string, payload?: any): Promise<object>;
    wrap(functionId: string): (payload?: any) => Promise<object>;
}
