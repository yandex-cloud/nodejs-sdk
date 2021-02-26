import { Driver, IAuthService } from 'ydb-sdk';

export function createDriver(
    database?: string,
    endpoint?: string,
    authService?: IAuthService
): Driver;
