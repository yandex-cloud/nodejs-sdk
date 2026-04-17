/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'yandex.cloud.trino.v1';

export interface AccessControlConfig {
    /** Catalog access control rules. */
    catalogs: CatalogAccessRule[];
    /** Schema access control rules. */
    schemas: SchemaAccessRule[];
    /** Table access control rules. */
    tables: TableAccessRule[];
    /** Function access control rules. */
    functions: FunctionAccessRule[];
    /** Procedures access control rules. */
    procedures: ProcedureAccessRule[];
    /** Queries access control rules. */
    queries: QueryAccessRule[];
    /** System session property access control rules. */
    systemSessionProperties: SystemSessionPropertyAccessRule[];
    /** Catalog session property access control rules. */
    catalogSessionProperties: CatalogSessionPropertyAccessRule[];
}

export interface CatalogAccessRuleMatcher {
    /** Catalog name regexp the rule is applied to. */
    nameRegexp: string | undefined;
    /** Catalog IDs rule is applied to. */
    ids?: CatalogAccessRuleMatcher_CatalogIds | undefined;
    /** Catalog names rule is applied to. */
    names?: CatalogAccessRuleMatcher_CatalogNames | undefined;
}

export interface CatalogAccessRuleMatcher_CatalogIds {
    /** List of table names. The rule will be applied if a table name is within this list. */
    any: string[];
}

export interface CatalogAccessRuleMatcher_CatalogNames {
    /** List of catalog names. The rule will be applied if a catalog name is within this list. */
    any: string[];
}

export interface SchemaAccessRuleMatcher {
    /** Schema name regexp the rule is applied to. */
    nameRegexp: string | undefined;
    /** Schema names the rule is applied to. */
    names?: SchemaAccessRuleMatcher_SchemaNames | undefined;
}

export interface SchemaAccessRuleMatcher_SchemaNames {
    /** List of schema names. The rule will be applied if a schema name is within this list. */
    any: string[];
}

export interface TableAccessRuleMatcher {
    /** Table name regexp the rule is applied to. */
    nameRegexp: string | undefined;
    /** Table names the rule is applied to. */
    names?: TableAccessRuleMatcher_TableNames | undefined;
}

export interface TableAccessRuleMatcher_TableNames {
    /** List of table names. The rule will be applied if a table name is within this list. */
    any: string[];
}

export interface FunctionAccessRuleMatcher {
    /** Function name regexp the rule is applied to. */
    nameRegexp: string | undefined;
    /** Function names the rule is applied to. */
    names?: FunctionAccessRuleMatcher_FunctionNames | undefined;
}

export interface FunctionAccessRuleMatcher_FunctionNames {
    /** List of function names. The rule will be applied if a function name is within this list. */
    any: string[];
}

export interface ProcedureAccessRuleMatcher {
    /** Procedure name regexp the rule is applied to. */
    nameRegexp: string | undefined;
    /** Procedure names the rule is applied to. */
    names?: ProcedureAccessRuleMatcher_ProcedureNames | undefined;
}

export interface ProcedureAccessRuleMatcher_ProcedureNames {
    /** List of procedure names. The rule will be applied if a procedure name is within this list. */
    any: string[];
}

export interface PropertyAccessRuleMatcher {
    /** Property name regexp the rule is applied to. */
    nameRegexp: string | undefined;
    /** Property names the rule is applied to. */
    names?: PropertyAccessRuleMatcher_PropertyNames | undefined;
}

export interface PropertyAccessRuleMatcher_PropertyNames {
    /** List of property names. The rule will be applied if a property name is within this list. */
    any: string[];
}

export interface CatalogAccessRule {
    /** IAM user IDs the rule is applied to. */
    users: string[];
    /** IAM group IDs the rule is applied to. */
    groups: string[];
    /** Catalog matcher specifying what catalogs the rule is applied to. */
    catalog?: CatalogAccessRuleMatcher;
    /** Permission granted by the rule. */
    permission: CatalogAccessRule_Permission;
    /** Rule description. */
    description: string;
}

export enum CatalogAccessRule_Permission {
    PERMISSION_UNSPECIFIED = 0,
    /** NONE - Denies all operations on the catalog entities. */
    NONE = 1,
    /** ALL - Allows all operations on catalog entities. */
    ALL = 2,
    /** READ_ONLY - Allows only read operations on catalog entities. */
    READ_ONLY = 3,
    UNRECOGNIZED = -1,
}

export function catalogAccessRule_PermissionFromJSON(object: any): CatalogAccessRule_Permission {
    switch (object) {
        case 0:
        case 'PERMISSION_UNSPECIFIED':
            return CatalogAccessRule_Permission.PERMISSION_UNSPECIFIED;
        case 1:
        case 'NONE':
            return CatalogAccessRule_Permission.NONE;
        case 2:
        case 'ALL':
            return CatalogAccessRule_Permission.ALL;
        case 3:
        case 'READ_ONLY':
            return CatalogAccessRule_Permission.READ_ONLY;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CatalogAccessRule_Permission.UNRECOGNIZED;
    }
}

export function catalogAccessRule_PermissionToJSON(object: CatalogAccessRule_Permission): string {
    switch (object) {
        case CatalogAccessRule_Permission.PERMISSION_UNSPECIFIED:
            return 'PERMISSION_UNSPECIFIED';
        case CatalogAccessRule_Permission.NONE:
            return 'NONE';
        case CatalogAccessRule_Permission.ALL:
            return 'ALL';
        case CatalogAccessRule_Permission.READ_ONLY:
            return 'READ_ONLY';
        default:
            return 'UNKNOWN';
    }
}

export interface SchemaAccessRule {
    /** IAM user IDs the rule is applied to. */
    users: string[];
    /** IAM group IDs the rule is applied to. */
    groups: string[];
    /** Catalog matcher specifying what catalogs the rule is applied to. */
    catalog?: CatalogAccessRuleMatcher;
    /** Schema matcher specifying what schemas the rule is applied to. */
    schema?: SchemaAccessRuleMatcher;
    /** Ownership granted by the rule. */
    owner: SchemaAccessRule_Owner;
    /** Rule description. */
    description: string;
}

export enum SchemaAccessRule_Owner {
    OWNER_UNSPECIFIED = 0,
    /** NO - User is not considered an owner of the schema. */
    NO = 1,
    /** YES - User is considered an owner of the schema. */
    YES = 2,
    UNRECOGNIZED = -1,
}

export function schemaAccessRule_OwnerFromJSON(object: any): SchemaAccessRule_Owner {
    switch (object) {
        case 0:
        case 'OWNER_UNSPECIFIED':
            return SchemaAccessRule_Owner.OWNER_UNSPECIFIED;
        case 1:
        case 'NO':
            return SchemaAccessRule_Owner.NO;
        case 2:
        case 'YES':
            return SchemaAccessRule_Owner.YES;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SchemaAccessRule_Owner.UNRECOGNIZED;
    }
}

export function schemaAccessRule_OwnerToJSON(object: SchemaAccessRule_Owner): string {
    switch (object) {
        case SchemaAccessRule_Owner.OWNER_UNSPECIFIED:
            return 'OWNER_UNSPECIFIED';
        case SchemaAccessRule_Owner.NO:
            return 'NO';
        case SchemaAccessRule_Owner.YES:
            return 'YES';
        default:
            return 'UNKNOWN';
    }
}

export interface TableAccessRule {
    /** IAM user IDs the rule is applied to. */
    users: string[];
    /** IAM group IDs the rule is applied to. */
    groups: string[];
    /** Catalog matcher specifying what catalogs the rule is applied to. */
    catalog?: CatalogAccessRuleMatcher;
    /** Schema matcher specifying what schemas the rule is applied to. */
    schema?: SchemaAccessRuleMatcher;
    /** Table matcher specifying what tables the rule is applied to. */
    table?: TableAccessRuleMatcher;
    /** Permission granted by the rule. */
    privileges: TableAccessRule_Privilege[];
    /** Column rules. */
    columns: TableAccessRule_Column[];
    /** Boolean SQL expression to filter table rows for particular user. */
    filter: string;
    /** Rule description. */
    description: string;
}

export enum TableAccessRule_Privilege {
    PRIVILEGE_UNSPECIFIED = 0,
    /** SELECT - Allows SELECT statements on the table. */
    SELECT = 1,
    /** INSERT - Allows INSERT statements on the table. */
    INSERT = 2,
    /** DELETE - Allows DELETE statements on the table. */
    DELETE = 3,
    /** UPDATE - Allows UPDATE statements on the table. */
    UPDATE = 4,
    /** OWNERSHIP - Allows CREATE, DROP, COMMENT ON and ALTER statements on the table. */
    OWNERSHIP = 5,
    /** GRANT_SELECT - Allows SELECT statements on the table while creating view. */
    GRANT_SELECT = 6,
    UNRECOGNIZED = -1,
}

export function tableAccessRule_PrivilegeFromJSON(object: any): TableAccessRule_Privilege {
    switch (object) {
        case 0:
        case 'PRIVILEGE_UNSPECIFIED':
            return TableAccessRule_Privilege.PRIVILEGE_UNSPECIFIED;
        case 1:
        case 'SELECT':
            return TableAccessRule_Privilege.SELECT;
        case 2:
        case 'INSERT':
            return TableAccessRule_Privilege.INSERT;
        case 3:
        case 'DELETE':
            return TableAccessRule_Privilege.DELETE;
        case 4:
        case 'UPDATE':
            return TableAccessRule_Privilege.UPDATE;
        case 5:
        case 'OWNERSHIP':
            return TableAccessRule_Privilege.OWNERSHIP;
        case 6:
        case 'GRANT_SELECT':
            return TableAccessRule_Privilege.GRANT_SELECT;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TableAccessRule_Privilege.UNRECOGNIZED;
    }
}

export function tableAccessRule_PrivilegeToJSON(object: TableAccessRule_Privilege): string {
    switch (object) {
        case TableAccessRule_Privilege.PRIVILEGE_UNSPECIFIED:
            return 'PRIVILEGE_UNSPECIFIED';
        case TableAccessRule_Privilege.SELECT:
            return 'SELECT';
        case TableAccessRule_Privilege.INSERT:
            return 'INSERT';
        case TableAccessRule_Privilege.DELETE:
            return 'DELETE';
        case TableAccessRule_Privilege.UPDATE:
            return 'UPDATE';
        case TableAccessRule_Privilege.OWNERSHIP:
            return 'OWNERSHIP';
        case TableAccessRule_Privilege.GRANT_SELECT:
            return 'GRANT_SELECT';
        default:
            return 'UNKNOWN';
    }
}

export interface TableAccessRule_Column {
    /** Column name. */
    name: string;
    /** Column access mode. */
    access: TableAccessRule_Column_AccessMode;
    /**
     * SQL expression mask to evaluate instead of original column values.
     * Mask should have the same type as original column.
     */
    mask: string;
}

export enum TableAccessRule_Column_AccessMode {
    ACCESS_MODE_UNSPECIFIED = 0,
    /** NONE - Access to column is denied. */
    NONE = 1,
    /** ALL - Access to column is allowed. */
    ALL = 2,
    UNRECOGNIZED = -1,
}

export function tableAccessRule_Column_AccessModeFromJSON(
    object: any,
): TableAccessRule_Column_AccessMode {
    switch (object) {
        case 0:
        case 'ACCESS_MODE_UNSPECIFIED':
            return TableAccessRule_Column_AccessMode.ACCESS_MODE_UNSPECIFIED;
        case 1:
        case 'NONE':
            return TableAccessRule_Column_AccessMode.NONE;
        case 2:
        case 'ALL':
            return TableAccessRule_Column_AccessMode.ALL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TableAccessRule_Column_AccessMode.UNRECOGNIZED;
    }
}

export function tableAccessRule_Column_AccessModeToJSON(
    object: TableAccessRule_Column_AccessMode,
): string {
    switch (object) {
        case TableAccessRule_Column_AccessMode.ACCESS_MODE_UNSPECIFIED:
            return 'ACCESS_MODE_UNSPECIFIED';
        case TableAccessRule_Column_AccessMode.NONE:
            return 'NONE';
        case TableAccessRule_Column_AccessMode.ALL:
            return 'ALL';
        default:
            return 'UNKNOWN';
    }
}

export interface FunctionAccessRule {
    /** IAM user IDs the rule is applied to. */
    users: string[];
    /** IAM group IDs the rule is applied to. */
    groups: string[];
    /** Catalog matcher specifying what catalogs the rule is applied to. */
    catalog?: CatalogAccessRuleMatcher;
    /** Schema matcher specifying what schema the rule is applied to. */
    schema?: SchemaAccessRuleMatcher;
    /** Function matcher specifying what functions the rule is applied to. */
    function?: FunctionAccessRuleMatcher;
    /** Privileges granted by the rule. */
    privileges: FunctionAccessRule_Privilege[];
    /** Rule description. */
    description: string;
}

export enum FunctionAccessRule_Privilege {
    PRIVILEGE_UNSPECIFIED = 0,
    /** EXECUTE - Allows to execute the function. */
    EXECUTE = 1,
    /** GRANT_EXECUTE - Allows to use the function while view creation. */
    GRANT_EXECUTE = 2,
    /** OWNERSHIP - Allows to CREATE and DROP the function. */
    OWNERSHIP = 3,
    UNRECOGNIZED = -1,
}

export function functionAccessRule_PrivilegeFromJSON(object: any): FunctionAccessRule_Privilege {
    switch (object) {
        case 0:
        case 'PRIVILEGE_UNSPECIFIED':
            return FunctionAccessRule_Privilege.PRIVILEGE_UNSPECIFIED;
        case 1:
        case 'EXECUTE':
            return FunctionAccessRule_Privilege.EXECUTE;
        case 2:
        case 'GRANT_EXECUTE':
            return FunctionAccessRule_Privilege.GRANT_EXECUTE;
        case 3:
        case 'OWNERSHIP':
            return FunctionAccessRule_Privilege.OWNERSHIP;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FunctionAccessRule_Privilege.UNRECOGNIZED;
    }
}

export function functionAccessRule_PrivilegeToJSON(object: FunctionAccessRule_Privilege): string {
    switch (object) {
        case FunctionAccessRule_Privilege.PRIVILEGE_UNSPECIFIED:
            return 'PRIVILEGE_UNSPECIFIED';
        case FunctionAccessRule_Privilege.EXECUTE:
            return 'EXECUTE';
        case FunctionAccessRule_Privilege.GRANT_EXECUTE:
            return 'GRANT_EXECUTE';
        case FunctionAccessRule_Privilege.OWNERSHIP:
            return 'OWNERSHIP';
        default:
            return 'UNKNOWN';
    }
}

export interface ProcedureAccessRule {
    /** IAM user IDs the rule is applied to. */
    users: string[];
    /** IAM group IDs the rule is applied to. */
    groups: string[];
    /** Catalog matcher specifying what catalogs the rule is applied to. */
    catalog?: CatalogAccessRuleMatcher;
    /** Schema matcher specifying what schema the rule is applied to. */
    schema?: SchemaAccessRuleMatcher;
    /** Procedure matcher specifying what functions the rule is applied to. */
    procedure?: ProcedureAccessRuleMatcher;
    /** Privileges granted by the rule. */
    privileges: ProcedureAccessRule_Privilege[];
    /** Rule description. */
    description: string;
}

export enum ProcedureAccessRule_Privilege {
    PRIVILEGE_UNSPECIFIED = 0,
    /** EXECUTE - Allows to execute the procedure. */
    EXECUTE = 1,
    UNRECOGNIZED = -1,
}

export function procedureAccessRule_PrivilegeFromJSON(object: any): ProcedureAccessRule_Privilege {
    switch (object) {
        case 0:
        case 'PRIVILEGE_UNSPECIFIED':
            return ProcedureAccessRule_Privilege.PRIVILEGE_UNSPECIFIED;
        case 1:
        case 'EXECUTE':
            return ProcedureAccessRule_Privilege.EXECUTE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ProcedureAccessRule_Privilege.UNRECOGNIZED;
    }
}

export function procedureAccessRule_PrivilegeToJSON(object: ProcedureAccessRule_Privilege): string {
    switch (object) {
        case ProcedureAccessRule_Privilege.PRIVILEGE_UNSPECIFIED:
            return 'PRIVILEGE_UNSPECIFIED';
        case ProcedureAccessRule_Privilege.EXECUTE:
            return 'EXECUTE';
        default:
            return 'UNKNOWN';
    }
}

export interface QueryAccessRule {
    /** IAM user IDs the rule is applied to. */
    users: string[];
    /** IAM group IDs the rule is applied to. */
    groups: string[];
    /**
     * Owners of queries the rule is applied to.
     * Cannot be combined with EXECUTE privilege.
     */
    queryOwners: string[];
    /** Privileges granted by the user. */
    privileges: QueryAccessRule_Privilege[];
    /** Rule description. */
    description: string;
}

export enum QueryAccessRule_Privilege {
    PRIVILEGE_UNSPECIFIED = 0,
    /** VIEW - Allows to view the query. */
    VIEW = 1,
    /** EXECUTE - Allows to execute the query. */
    EXECUTE = 2,
    /** KILL - Allows to kill the query. */
    KILL = 3,
    UNRECOGNIZED = -1,
}

export function queryAccessRule_PrivilegeFromJSON(object: any): QueryAccessRule_Privilege {
    switch (object) {
        case 0:
        case 'PRIVILEGE_UNSPECIFIED':
            return QueryAccessRule_Privilege.PRIVILEGE_UNSPECIFIED;
        case 1:
        case 'VIEW':
            return QueryAccessRule_Privilege.VIEW;
        case 2:
        case 'EXECUTE':
            return QueryAccessRule_Privilege.EXECUTE;
        case 3:
        case 'KILL':
            return QueryAccessRule_Privilege.KILL;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return QueryAccessRule_Privilege.UNRECOGNIZED;
    }
}

export function queryAccessRule_PrivilegeToJSON(object: QueryAccessRule_Privilege): string {
    switch (object) {
        case QueryAccessRule_Privilege.PRIVILEGE_UNSPECIFIED:
            return 'PRIVILEGE_UNSPECIFIED';
        case QueryAccessRule_Privilege.VIEW:
            return 'VIEW';
        case QueryAccessRule_Privilege.EXECUTE:
            return 'EXECUTE';
        case QueryAccessRule_Privilege.KILL:
            return 'KILL';
        default:
            return 'UNKNOWN';
    }
}

export interface SystemSessionPropertyAccessRule {
    /** IAM user IDs the rule is applied to. */
    users: string[];
    /** IAM group IDs the rule is applied to. */
    groups: string[];
    /** Property matcher specifying what properties the rule is applied to. */
    property?: PropertyAccessRuleMatcher;
    /** Whether the rule allows setting the property. */
    allow: SystemSessionPropertyAccessRule_Allow;
    /** Rule description. */
    description: string;
}

export enum SystemSessionPropertyAccessRule_Allow {
    ALLOW_UNSPECIFIED = 0,
    /** NO - Denies setting the system session property. */
    NO = 1,
    /** YES - Allows to set the system session property. */
    YES = 2,
    UNRECOGNIZED = -1,
}

export function systemSessionPropertyAccessRule_AllowFromJSON(
    object: any,
): SystemSessionPropertyAccessRule_Allow {
    switch (object) {
        case 0:
        case 'ALLOW_UNSPECIFIED':
            return SystemSessionPropertyAccessRule_Allow.ALLOW_UNSPECIFIED;
        case 1:
        case 'NO':
            return SystemSessionPropertyAccessRule_Allow.NO;
        case 2:
        case 'YES':
            return SystemSessionPropertyAccessRule_Allow.YES;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SystemSessionPropertyAccessRule_Allow.UNRECOGNIZED;
    }
}

export function systemSessionPropertyAccessRule_AllowToJSON(
    object: SystemSessionPropertyAccessRule_Allow,
): string {
    switch (object) {
        case SystemSessionPropertyAccessRule_Allow.ALLOW_UNSPECIFIED:
            return 'ALLOW_UNSPECIFIED';
        case SystemSessionPropertyAccessRule_Allow.NO:
            return 'NO';
        case SystemSessionPropertyAccessRule_Allow.YES:
            return 'YES';
        default:
            return 'UNKNOWN';
    }
}

export interface CatalogSessionPropertyAccessRule {
    /** IAM user IDs the rule is applied to. */
    users: string[];
    /** IAM group IDs the rule is applied to. */
    groups: string[];
    /** Catalog matcher specifying what catalogs the rule is applied to. */
    catalog?: CatalogAccessRuleMatcher;
    /** Property matcher specifying what properties the rule is applied to. */
    property?: PropertyAccessRuleMatcher;
    /** Whether the rule allows setting the property. */
    allow: CatalogSessionPropertyAccessRule_Allow;
    /** Rule description. */
    description: string;
}

export enum CatalogSessionPropertyAccessRule_Allow {
    ALLOW_UNSPECIFIED = 0,
    /** NO - Denies setting the catalog session property. */
    NO = 1,
    /** YES - Allows to set the catalog session property. */
    YES = 2,
    UNRECOGNIZED = -1,
}

export function catalogSessionPropertyAccessRule_AllowFromJSON(
    object: any,
): CatalogSessionPropertyAccessRule_Allow {
    switch (object) {
        case 0:
        case 'ALLOW_UNSPECIFIED':
            return CatalogSessionPropertyAccessRule_Allow.ALLOW_UNSPECIFIED;
        case 1:
        case 'NO':
            return CatalogSessionPropertyAccessRule_Allow.NO;
        case 2:
        case 'YES':
            return CatalogSessionPropertyAccessRule_Allow.YES;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return CatalogSessionPropertyAccessRule_Allow.UNRECOGNIZED;
    }
}

export function catalogSessionPropertyAccessRule_AllowToJSON(
    object: CatalogSessionPropertyAccessRule_Allow,
): string {
    switch (object) {
        case CatalogSessionPropertyAccessRule_Allow.ALLOW_UNSPECIFIED:
            return 'ALLOW_UNSPECIFIED';
        case CatalogSessionPropertyAccessRule_Allow.NO:
            return 'NO';
        case CatalogSessionPropertyAccessRule_Allow.YES:
            return 'YES';
        default:
            return 'UNKNOWN';
    }
}

const baseAccessControlConfig: object = {};

export const AccessControlConfig: {
    encode(message: AccessControlConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessControlConfig;
    fromJSON(object: any): AccessControlConfig;
    toJSON(message: AccessControlConfig): unknown;
    fromPartial<I extends Exact<DeepPartial<AccessControlConfig>, I>>(object: I): AccessControlConfig;
} = {
    encode(message: AccessControlConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.catalogs) {
            CatalogAccessRule.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.schemas) {
            SchemaAccessRule.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.tables) {
            TableAccessRule.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.functions) {
            FunctionAccessRule.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.procedures) {
            ProcedureAccessRule.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.queries) {
            QueryAccessRule.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.systemSessionProperties) {
            SystemSessionPropertyAccessRule.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.catalogSessionProperties) {
            CatalogSessionPropertyAccessRule.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): AccessControlConfig {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAccessControlConfig } as AccessControlConfig;
        message.catalogs = [];
        message.schemas = [];
        message.tables = [];
        message.functions = [];
        message.procedures = [];
        message.queries = [];
        message.systemSessionProperties = [];
        message.catalogSessionProperties = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.catalogs.push(CatalogAccessRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.schemas.push(SchemaAccessRule.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tables.push(TableAccessRule.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.functions.push(FunctionAccessRule.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.procedures.push(ProcedureAccessRule.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.queries.push(QueryAccessRule.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.systemSessionProperties.push(
                        SystemSessionPropertyAccessRule.decode(reader, reader.uint32()),
                    );
                    break;
                case 8:
                    message.catalogSessionProperties.push(
                        CatalogSessionPropertyAccessRule.decode(reader, reader.uint32()),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): AccessControlConfig {
        const message = { ...baseAccessControlConfig } as AccessControlConfig;
        message.catalogs = (object.catalogs ?? []).map((e: any) => CatalogAccessRule.fromJSON(e));
        message.schemas = (object.schemas ?? []).map((e: any) => SchemaAccessRule.fromJSON(e));
        message.tables = (object.tables ?? []).map((e: any) => TableAccessRule.fromJSON(e));
        message.functions = (object.functions ?? []).map((e: any) =>
            FunctionAccessRule.fromJSON(e),
        );
        message.procedures = (object.procedures ?? []).map((e: any) =>
            ProcedureAccessRule.fromJSON(e),
        );
        message.queries = (object.queries ?? []).map((e: any) => QueryAccessRule.fromJSON(e));
        message.systemSessionProperties = (object.systemSessionProperties ?? []).map((e: any) =>
            SystemSessionPropertyAccessRule.fromJSON(e),
        );
        message.catalogSessionProperties = (object.catalogSessionProperties ?? []).map((e: any) =>
            CatalogSessionPropertyAccessRule.fromJSON(e),
        );
        return message;
    },

    toJSON(message: AccessControlConfig): unknown {
        const obj: any = {};
        if (message.catalogs) {
            obj.catalogs = message.catalogs.map((e) =>
                e ? CatalogAccessRule.toJSON(e) : undefined,
            );
        } else {
            obj.catalogs = [];
        }
        if (message.schemas) {
            obj.schemas = message.schemas.map((e) => (e ? SchemaAccessRule.toJSON(e) : undefined));
        } else {
            obj.schemas = [];
        }
        if (message.tables) {
            obj.tables = message.tables.map((e) => (e ? TableAccessRule.toJSON(e) : undefined));
        } else {
            obj.tables = [];
        }
        if (message.functions) {
            obj.functions = message.functions.map((e) =>
                e ? FunctionAccessRule.toJSON(e) : undefined,
            );
        } else {
            obj.functions = [];
        }
        if (message.procedures) {
            obj.procedures = message.procedures.map((e) =>
                e ? ProcedureAccessRule.toJSON(e) : undefined,
            );
        } else {
            obj.procedures = [];
        }
        if (message.queries) {
            obj.queries = message.queries.map((e) => (e ? QueryAccessRule.toJSON(e) : undefined));
        } else {
            obj.queries = [];
        }
        if (message.systemSessionProperties) {
            obj.systemSessionProperties = message.systemSessionProperties.map((e) =>
                e ? SystemSessionPropertyAccessRule.toJSON(e) : undefined,
            );
        } else {
            obj.systemSessionProperties = [];
        }
        if (message.catalogSessionProperties) {
            obj.catalogSessionProperties = message.catalogSessionProperties.map((e) =>
                e ? CatalogSessionPropertyAccessRule.toJSON(e) : undefined,
            );
        } else {
            obj.catalogSessionProperties = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<AccessControlConfig>, I>>(
        object: I,
    ): AccessControlConfig {
        const message = { ...baseAccessControlConfig } as AccessControlConfig;
        message.catalogs = object.catalogs?.map((e) => CatalogAccessRule.fromPartial(e)) || [];
        message.schemas = object.schemas?.map((e) => SchemaAccessRule.fromPartial(e)) || [];
        message.tables = object.tables?.map((e) => TableAccessRule.fromPartial(e)) || [];
        message.functions = object.functions?.map((e) => FunctionAccessRule.fromPartial(e)) || [];
        message.procedures =
            object.procedures?.map((e) => ProcedureAccessRule.fromPartial(e)) || [];
        message.queries = object.queries?.map((e) => QueryAccessRule.fromPartial(e)) || [];
        message.systemSessionProperties =
            object.systemSessionProperties?.map((e) =>
                SystemSessionPropertyAccessRule.fromPartial(e),
            ) || [];
        message.catalogSessionProperties =
            object.catalogSessionProperties?.map((e) =>
                CatalogSessionPropertyAccessRule.fromPartial(e),
            ) || [];
        return message;
    },
};

const baseCatalogAccessRuleMatcher: object = {};

export const CatalogAccessRuleMatcher: {
    encode(message: CatalogAccessRuleMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAccessRuleMatcher;
    fromJSON(object: any): CatalogAccessRuleMatcher;
    toJSON(message: CatalogAccessRuleMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<CatalogAccessRuleMatcher>, I>>(object: I): CatalogAccessRuleMatcher;
} = {
    encode(
        message: CatalogAccessRuleMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.nameRegexp !== undefined) {
            writer.uint32(26).string(message.nameRegexp);
        }
        if (message.ids !== undefined) {
            CatalogAccessRuleMatcher_CatalogIds.encode(
                message.ids,
                writer.uint32(34).fork(),
            ).ldelim();
        }
        if (message.names !== undefined) {
            CatalogAccessRuleMatcher_CatalogNames.encode(
                message.names,
                writer.uint32(42).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAccessRuleMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalogAccessRuleMatcher } as CatalogAccessRuleMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.nameRegexp = reader.string();
                    break;
                case 4:
                    message.ids = CatalogAccessRuleMatcher_CatalogIds.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                case 5:
                    message.names = CatalogAccessRuleMatcher_CatalogNames.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogAccessRuleMatcher {
        const message = { ...baseCatalogAccessRuleMatcher } as CatalogAccessRuleMatcher;
        message.nameRegexp =
            object.nameRegexp !== undefined && object.nameRegexp !== null
                ? String(object.nameRegexp)
                : undefined;
        message.ids =
            object.ids !== undefined && object.ids !== null
                ? CatalogAccessRuleMatcher_CatalogIds.fromJSON(object.ids)
                : undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? CatalogAccessRuleMatcher_CatalogNames.fromJSON(object.names)
                : undefined;
        return message;
    },

    toJSON(message: CatalogAccessRuleMatcher): unknown {
        const obj: any = {};
        message.nameRegexp !== undefined && (obj.nameRegexp = message.nameRegexp);
        message.ids !== undefined &&
            (obj.ids = message.ids
                ? CatalogAccessRuleMatcher_CatalogIds.toJSON(message.ids)
                : undefined);
        message.names !== undefined &&
            (obj.names = message.names
                ? CatalogAccessRuleMatcher_CatalogNames.toJSON(message.names)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogAccessRuleMatcher>, I>>(
        object: I,
    ): CatalogAccessRuleMatcher {
        const message = { ...baseCatalogAccessRuleMatcher } as CatalogAccessRuleMatcher;
        message.nameRegexp = object.nameRegexp ?? undefined;
        message.ids =
            object.ids !== undefined && object.ids !== null
                ? CatalogAccessRuleMatcher_CatalogIds.fromPartial(object.ids)
                : undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? CatalogAccessRuleMatcher_CatalogNames.fromPartial(object.names)
                : undefined;
        return message;
    },
};

const baseCatalogAccessRuleMatcher_CatalogIds: object = { any: '' };

export const CatalogAccessRuleMatcher_CatalogIds: {
    encode(message: CatalogAccessRuleMatcher_CatalogIds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAccessRuleMatcher_CatalogIds;
    fromJSON(object: any): CatalogAccessRuleMatcher_CatalogIds;
    toJSON(message: CatalogAccessRuleMatcher_CatalogIds): unknown;
    fromPartial<I extends Exact<DeepPartial<CatalogAccessRuleMatcher_CatalogIds>, I>>(object: I): CatalogAccessRuleMatcher_CatalogIds;
} = {
    encode(
        message: CatalogAccessRuleMatcher_CatalogIds,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.any) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAccessRuleMatcher_CatalogIds {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCatalogAccessRuleMatcher_CatalogIds,
        } as CatalogAccessRuleMatcher_CatalogIds;
        message.any = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.any.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogAccessRuleMatcher_CatalogIds {
        const message = {
            ...baseCatalogAccessRuleMatcher_CatalogIds,
        } as CatalogAccessRuleMatcher_CatalogIds;
        message.any = (object.any ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: CatalogAccessRuleMatcher_CatalogIds): unknown {
        const obj: any = {};
        if (message.any) {
            obj.any = message.any.map((e) => e);
        } else {
            obj.any = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogAccessRuleMatcher_CatalogIds>, I>>(
        object: I,
    ): CatalogAccessRuleMatcher_CatalogIds {
        const message = {
            ...baseCatalogAccessRuleMatcher_CatalogIds,
        } as CatalogAccessRuleMatcher_CatalogIds;
        message.any = object.any?.map((e) => e) || [];
        return message;
    },
};

const baseCatalogAccessRuleMatcher_CatalogNames: object = { any: '' };

export const CatalogAccessRuleMatcher_CatalogNames: {
    encode(message: CatalogAccessRuleMatcher_CatalogNames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAccessRuleMatcher_CatalogNames;
    fromJSON(object: any): CatalogAccessRuleMatcher_CatalogNames;
    toJSON(message: CatalogAccessRuleMatcher_CatalogNames): unknown;
    fromPartial<I extends Exact<DeepPartial<CatalogAccessRuleMatcher_CatalogNames>, I>>(object: I): CatalogAccessRuleMatcher_CatalogNames;
} = {
    encode(
        message: CatalogAccessRuleMatcher_CatalogNames,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.any) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAccessRuleMatcher_CatalogNames {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCatalogAccessRuleMatcher_CatalogNames,
        } as CatalogAccessRuleMatcher_CatalogNames;
        message.any = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.any.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogAccessRuleMatcher_CatalogNames {
        const message = {
            ...baseCatalogAccessRuleMatcher_CatalogNames,
        } as CatalogAccessRuleMatcher_CatalogNames;
        message.any = (object.any ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: CatalogAccessRuleMatcher_CatalogNames): unknown {
        const obj: any = {};
        if (message.any) {
            obj.any = message.any.map((e) => e);
        } else {
            obj.any = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogAccessRuleMatcher_CatalogNames>, I>>(
        object: I,
    ): CatalogAccessRuleMatcher_CatalogNames {
        const message = {
            ...baseCatalogAccessRuleMatcher_CatalogNames,
        } as CatalogAccessRuleMatcher_CatalogNames;
        message.any = object.any?.map((e) => e) || [];
        return message;
    },
};

const baseSchemaAccessRuleMatcher: object = {};

export const SchemaAccessRuleMatcher: {
    encode(message: SchemaAccessRuleMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAccessRuleMatcher;
    fromJSON(object: any): SchemaAccessRuleMatcher;
    toJSON(message: SchemaAccessRuleMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<SchemaAccessRuleMatcher>, I>>(object: I): SchemaAccessRuleMatcher;
} = {
    encode(message: SchemaAccessRuleMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.nameRegexp !== undefined) {
            writer.uint32(18).string(message.nameRegexp);
        }
        if (message.names !== undefined) {
            SchemaAccessRuleMatcher_SchemaNames.encode(
                message.names,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAccessRuleMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchemaAccessRuleMatcher } as SchemaAccessRuleMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.nameRegexp = reader.string();
                    break;
                case 3:
                    message.names = SchemaAccessRuleMatcher_SchemaNames.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SchemaAccessRuleMatcher {
        const message = { ...baseSchemaAccessRuleMatcher } as SchemaAccessRuleMatcher;
        message.nameRegexp =
            object.nameRegexp !== undefined && object.nameRegexp !== null
                ? String(object.nameRegexp)
                : undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? SchemaAccessRuleMatcher_SchemaNames.fromJSON(object.names)
                : undefined;
        return message;
    },

    toJSON(message: SchemaAccessRuleMatcher): unknown {
        const obj: any = {};
        message.nameRegexp !== undefined && (obj.nameRegexp = message.nameRegexp);
        message.names !== undefined &&
            (obj.names = message.names
                ? SchemaAccessRuleMatcher_SchemaNames.toJSON(message.names)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SchemaAccessRuleMatcher>, I>>(
        object: I,
    ): SchemaAccessRuleMatcher {
        const message = { ...baseSchemaAccessRuleMatcher } as SchemaAccessRuleMatcher;
        message.nameRegexp = object.nameRegexp ?? undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? SchemaAccessRuleMatcher_SchemaNames.fromPartial(object.names)
                : undefined;
        return message;
    },
};

const baseSchemaAccessRuleMatcher_SchemaNames: object = { any: '' };

export const SchemaAccessRuleMatcher_SchemaNames: {
    encode(message: SchemaAccessRuleMatcher_SchemaNames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAccessRuleMatcher_SchemaNames;
    fromJSON(object: any): SchemaAccessRuleMatcher_SchemaNames;
    toJSON(message: SchemaAccessRuleMatcher_SchemaNames): unknown;
    fromPartial<I extends Exact<DeepPartial<SchemaAccessRuleMatcher_SchemaNames>, I>>(object: I): SchemaAccessRuleMatcher_SchemaNames;
} = {
    encode(
        message: SchemaAccessRuleMatcher_SchemaNames,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.any) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAccessRuleMatcher_SchemaNames {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSchemaAccessRuleMatcher_SchemaNames,
        } as SchemaAccessRuleMatcher_SchemaNames;
        message.any = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.any.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SchemaAccessRuleMatcher_SchemaNames {
        const message = {
            ...baseSchemaAccessRuleMatcher_SchemaNames,
        } as SchemaAccessRuleMatcher_SchemaNames;
        message.any = (object.any ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: SchemaAccessRuleMatcher_SchemaNames): unknown {
        const obj: any = {};
        if (message.any) {
            obj.any = message.any.map((e) => e);
        } else {
            obj.any = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SchemaAccessRuleMatcher_SchemaNames>, I>>(
        object: I,
    ): SchemaAccessRuleMatcher_SchemaNames {
        const message = {
            ...baseSchemaAccessRuleMatcher_SchemaNames,
        } as SchemaAccessRuleMatcher_SchemaNames;
        message.any = object.any?.map((e) => e) || [];
        return message;
    },
};

const baseTableAccessRuleMatcher: object = {};

export const TableAccessRuleMatcher: {
    encode(message: TableAccessRuleMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableAccessRuleMatcher;
    fromJSON(object: any): TableAccessRuleMatcher;
    toJSON(message: TableAccessRuleMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<TableAccessRuleMatcher>, I>>(object: I): TableAccessRuleMatcher;
} = {
    encode(message: TableAccessRuleMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.nameRegexp !== undefined) {
            writer.uint32(18).string(message.nameRegexp);
        }
        if (message.names !== undefined) {
            TableAccessRuleMatcher_TableNames.encode(
                message.names,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TableAccessRuleMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTableAccessRuleMatcher } as TableAccessRuleMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.nameRegexp = reader.string();
                    break;
                case 3:
                    message.names = TableAccessRuleMatcher_TableNames.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TableAccessRuleMatcher {
        const message = { ...baseTableAccessRuleMatcher } as TableAccessRuleMatcher;
        message.nameRegexp =
            object.nameRegexp !== undefined && object.nameRegexp !== null
                ? String(object.nameRegexp)
                : undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? TableAccessRuleMatcher_TableNames.fromJSON(object.names)
                : undefined;
        return message;
    },

    toJSON(message: TableAccessRuleMatcher): unknown {
        const obj: any = {};
        message.nameRegexp !== undefined && (obj.nameRegexp = message.nameRegexp);
        message.names !== undefined &&
            (obj.names = message.names
                ? TableAccessRuleMatcher_TableNames.toJSON(message.names)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TableAccessRuleMatcher>, I>>(
        object: I,
    ): TableAccessRuleMatcher {
        const message = { ...baseTableAccessRuleMatcher } as TableAccessRuleMatcher;
        message.nameRegexp = object.nameRegexp ?? undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? TableAccessRuleMatcher_TableNames.fromPartial(object.names)
                : undefined;
        return message;
    },
};

const baseTableAccessRuleMatcher_TableNames: object = { any: '' };

export const TableAccessRuleMatcher_TableNames: {
    encode(message: TableAccessRuleMatcher_TableNames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableAccessRuleMatcher_TableNames;
    fromJSON(object: any): TableAccessRuleMatcher_TableNames;
    toJSON(message: TableAccessRuleMatcher_TableNames): unknown;
    fromPartial<I extends Exact<DeepPartial<TableAccessRuleMatcher_TableNames>, I>>(object: I): TableAccessRuleMatcher_TableNames;
} = {
    encode(
        message: TableAccessRuleMatcher_TableNames,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.any) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TableAccessRuleMatcher_TableNames {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseTableAccessRuleMatcher_TableNames,
        } as TableAccessRuleMatcher_TableNames;
        message.any = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.any.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TableAccessRuleMatcher_TableNames {
        const message = {
            ...baseTableAccessRuleMatcher_TableNames,
        } as TableAccessRuleMatcher_TableNames;
        message.any = (object.any ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: TableAccessRuleMatcher_TableNames): unknown {
        const obj: any = {};
        if (message.any) {
            obj.any = message.any.map((e) => e);
        } else {
            obj.any = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TableAccessRuleMatcher_TableNames>, I>>(
        object: I,
    ): TableAccessRuleMatcher_TableNames {
        const message = {
            ...baseTableAccessRuleMatcher_TableNames,
        } as TableAccessRuleMatcher_TableNames;
        message.any = object.any?.map((e) => e) || [];
        return message;
    },
};

const baseFunctionAccessRuleMatcher: object = {};

export const FunctionAccessRuleMatcher: {
    encode(message: FunctionAccessRuleMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionAccessRuleMatcher;
    fromJSON(object: any): FunctionAccessRuleMatcher;
    toJSON(message: FunctionAccessRuleMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<FunctionAccessRuleMatcher>, I>>(object: I): FunctionAccessRuleMatcher;
} = {
    encode(
        message: FunctionAccessRuleMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.nameRegexp !== undefined) {
            writer.uint32(18).string(message.nameRegexp);
        }
        if (message.names !== undefined) {
            FunctionAccessRuleMatcher_FunctionNames.encode(
                message.names,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionAccessRuleMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunctionAccessRuleMatcher } as FunctionAccessRuleMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.nameRegexp = reader.string();
                    break;
                case 3:
                    message.names = FunctionAccessRuleMatcher_FunctionNames.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FunctionAccessRuleMatcher {
        const message = { ...baseFunctionAccessRuleMatcher } as FunctionAccessRuleMatcher;
        message.nameRegexp =
            object.nameRegexp !== undefined && object.nameRegexp !== null
                ? String(object.nameRegexp)
                : undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? FunctionAccessRuleMatcher_FunctionNames.fromJSON(object.names)
                : undefined;
        return message;
    },

    toJSON(message: FunctionAccessRuleMatcher): unknown {
        const obj: any = {};
        message.nameRegexp !== undefined && (obj.nameRegexp = message.nameRegexp);
        message.names !== undefined &&
            (obj.names = message.names
                ? FunctionAccessRuleMatcher_FunctionNames.toJSON(message.names)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FunctionAccessRuleMatcher>, I>>(
        object: I,
    ): FunctionAccessRuleMatcher {
        const message = { ...baseFunctionAccessRuleMatcher } as FunctionAccessRuleMatcher;
        message.nameRegexp = object.nameRegexp ?? undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? FunctionAccessRuleMatcher_FunctionNames.fromPartial(object.names)
                : undefined;
        return message;
    },
};

const baseFunctionAccessRuleMatcher_FunctionNames: object = { any: '' };

export const FunctionAccessRuleMatcher_FunctionNames: {
    encode(message: FunctionAccessRuleMatcher_FunctionNames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionAccessRuleMatcher_FunctionNames;
    fromJSON(object: any): FunctionAccessRuleMatcher_FunctionNames;
    toJSON(message: FunctionAccessRuleMatcher_FunctionNames): unknown;
    fromPartial<I extends Exact<DeepPartial<FunctionAccessRuleMatcher_FunctionNames>, I>>(object: I): FunctionAccessRuleMatcher_FunctionNames;
} = {
    encode(
        message: FunctionAccessRuleMatcher_FunctionNames,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.any) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): FunctionAccessRuleMatcher_FunctionNames {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseFunctionAccessRuleMatcher_FunctionNames,
        } as FunctionAccessRuleMatcher_FunctionNames;
        message.any = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.any.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FunctionAccessRuleMatcher_FunctionNames {
        const message = {
            ...baseFunctionAccessRuleMatcher_FunctionNames,
        } as FunctionAccessRuleMatcher_FunctionNames;
        message.any = (object.any ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: FunctionAccessRuleMatcher_FunctionNames): unknown {
        const obj: any = {};
        if (message.any) {
            obj.any = message.any.map((e) => e);
        } else {
            obj.any = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FunctionAccessRuleMatcher_FunctionNames>, I>>(
        object: I,
    ): FunctionAccessRuleMatcher_FunctionNames {
        const message = {
            ...baseFunctionAccessRuleMatcher_FunctionNames,
        } as FunctionAccessRuleMatcher_FunctionNames;
        message.any = object.any?.map((e) => e) || [];
        return message;
    },
};

const baseProcedureAccessRuleMatcher: object = {};

export const ProcedureAccessRuleMatcher: {
    encode(message: ProcedureAccessRuleMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureAccessRuleMatcher;
    fromJSON(object: any): ProcedureAccessRuleMatcher;
    toJSON(message: ProcedureAccessRuleMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<ProcedureAccessRuleMatcher>, I>>(object: I): ProcedureAccessRuleMatcher;
} = {
    encode(
        message: ProcedureAccessRuleMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.nameRegexp !== undefined) {
            writer.uint32(18).string(message.nameRegexp);
        }
        if (message.names !== undefined) {
            ProcedureAccessRuleMatcher_ProcedureNames.encode(
                message.names,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureAccessRuleMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProcedureAccessRuleMatcher } as ProcedureAccessRuleMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.nameRegexp = reader.string();
                    break;
                case 3:
                    message.names = ProcedureAccessRuleMatcher_ProcedureNames.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProcedureAccessRuleMatcher {
        const message = { ...baseProcedureAccessRuleMatcher } as ProcedureAccessRuleMatcher;
        message.nameRegexp =
            object.nameRegexp !== undefined && object.nameRegexp !== null
                ? String(object.nameRegexp)
                : undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? ProcedureAccessRuleMatcher_ProcedureNames.fromJSON(object.names)
                : undefined;
        return message;
    },

    toJSON(message: ProcedureAccessRuleMatcher): unknown {
        const obj: any = {};
        message.nameRegexp !== undefined && (obj.nameRegexp = message.nameRegexp);
        message.names !== undefined &&
            (obj.names = message.names
                ? ProcedureAccessRuleMatcher_ProcedureNames.toJSON(message.names)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProcedureAccessRuleMatcher>, I>>(
        object: I,
    ): ProcedureAccessRuleMatcher {
        const message = { ...baseProcedureAccessRuleMatcher } as ProcedureAccessRuleMatcher;
        message.nameRegexp = object.nameRegexp ?? undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? ProcedureAccessRuleMatcher_ProcedureNames.fromPartial(object.names)
                : undefined;
        return message;
    },
};

const baseProcedureAccessRuleMatcher_ProcedureNames: object = { any: '' };

export const ProcedureAccessRuleMatcher_ProcedureNames: {
    encode(message: ProcedureAccessRuleMatcher_ProcedureNames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureAccessRuleMatcher_ProcedureNames;
    fromJSON(object: any): ProcedureAccessRuleMatcher_ProcedureNames;
    toJSON(message: ProcedureAccessRuleMatcher_ProcedureNames): unknown;
    fromPartial<I extends Exact<DeepPartial<ProcedureAccessRuleMatcher_ProcedureNames>, I>>(object: I): ProcedureAccessRuleMatcher_ProcedureNames;
} = {
    encode(
        message: ProcedureAccessRuleMatcher_ProcedureNames,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.any) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): ProcedureAccessRuleMatcher_ProcedureNames {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseProcedureAccessRuleMatcher_ProcedureNames,
        } as ProcedureAccessRuleMatcher_ProcedureNames;
        message.any = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.any.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProcedureAccessRuleMatcher_ProcedureNames {
        const message = {
            ...baseProcedureAccessRuleMatcher_ProcedureNames,
        } as ProcedureAccessRuleMatcher_ProcedureNames;
        message.any = (object.any ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: ProcedureAccessRuleMatcher_ProcedureNames): unknown {
        const obj: any = {};
        if (message.any) {
            obj.any = message.any.map((e) => e);
        } else {
            obj.any = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProcedureAccessRuleMatcher_ProcedureNames>, I>>(
        object: I,
    ): ProcedureAccessRuleMatcher_ProcedureNames {
        const message = {
            ...baseProcedureAccessRuleMatcher_ProcedureNames,
        } as ProcedureAccessRuleMatcher_ProcedureNames;
        message.any = object.any?.map((e) => e) || [];
        return message;
    },
};

const basePropertyAccessRuleMatcher: object = {};

export const PropertyAccessRuleMatcher: {
    encode(message: PropertyAccessRuleMatcher, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PropertyAccessRuleMatcher;
    fromJSON(object: any): PropertyAccessRuleMatcher;
    toJSON(message: PropertyAccessRuleMatcher): unknown;
    fromPartial<I extends Exact<DeepPartial<PropertyAccessRuleMatcher>, I>>(object: I): PropertyAccessRuleMatcher;
} = {
    encode(
        message: PropertyAccessRuleMatcher,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        if (message.nameRegexp !== undefined) {
            writer.uint32(18).string(message.nameRegexp);
        }
        if (message.names !== undefined) {
            PropertyAccessRuleMatcher_PropertyNames.encode(
                message.names,
                writer.uint32(26).fork(),
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PropertyAccessRuleMatcher {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePropertyAccessRuleMatcher } as PropertyAccessRuleMatcher;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.nameRegexp = reader.string();
                    break;
                case 3:
                    message.names = PropertyAccessRuleMatcher_PropertyNames.decode(
                        reader,
                        reader.uint32(),
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PropertyAccessRuleMatcher {
        const message = { ...basePropertyAccessRuleMatcher } as PropertyAccessRuleMatcher;
        message.nameRegexp =
            object.nameRegexp !== undefined && object.nameRegexp !== null
                ? String(object.nameRegexp)
                : undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? PropertyAccessRuleMatcher_PropertyNames.fromJSON(object.names)
                : undefined;
        return message;
    },

    toJSON(message: PropertyAccessRuleMatcher): unknown {
        const obj: any = {};
        message.nameRegexp !== undefined && (obj.nameRegexp = message.nameRegexp);
        message.names !== undefined &&
            (obj.names = message.names
                ? PropertyAccessRuleMatcher_PropertyNames.toJSON(message.names)
                : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PropertyAccessRuleMatcher>, I>>(
        object: I,
    ): PropertyAccessRuleMatcher {
        const message = { ...basePropertyAccessRuleMatcher } as PropertyAccessRuleMatcher;
        message.nameRegexp = object.nameRegexp ?? undefined;
        message.names =
            object.names !== undefined && object.names !== null
                ? PropertyAccessRuleMatcher_PropertyNames.fromPartial(object.names)
                : undefined;
        return message;
    },
};

const basePropertyAccessRuleMatcher_PropertyNames: object = { any: '' };

export const PropertyAccessRuleMatcher_PropertyNames: {
    encode(message: PropertyAccessRuleMatcher_PropertyNames, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PropertyAccessRuleMatcher_PropertyNames;
    fromJSON(object: any): PropertyAccessRuleMatcher_PropertyNames;
    toJSON(message: PropertyAccessRuleMatcher_PropertyNames): unknown;
    fromPartial<I extends Exact<DeepPartial<PropertyAccessRuleMatcher_PropertyNames>, I>>(object: I): PropertyAccessRuleMatcher_PropertyNames;
} = {
    encode(
        message: PropertyAccessRuleMatcher_PropertyNames,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.any) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number,
    ): PropertyAccessRuleMatcher_PropertyNames {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...basePropertyAccessRuleMatcher_PropertyNames,
        } as PropertyAccessRuleMatcher_PropertyNames;
        message.any = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.any.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PropertyAccessRuleMatcher_PropertyNames {
        const message = {
            ...basePropertyAccessRuleMatcher_PropertyNames,
        } as PropertyAccessRuleMatcher_PropertyNames;
        message.any = (object.any ?? []).map((e: any) => String(e));
        return message;
    },

    toJSON(message: PropertyAccessRuleMatcher_PropertyNames): unknown {
        const obj: any = {};
        if (message.any) {
            obj.any = message.any.map((e) => e);
        } else {
            obj.any = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<PropertyAccessRuleMatcher_PropertyNames>, I>>(
        object: I,
    ): PropertyAccessRuleMatcher_PropertyNames {
        const message = {
            ...basePropertyAccessRuleMatcher_PropertyNames,
        } as PropertyAccessRuleMatcher_PropertyNames;
        message.any = object.any?.map((e) => e) || [];
        return message;
    },
};

const baseCatalogAccessRule: object = { users: '', groups: '', permission: 0, description: '' };

export const CatalogAccessRule: {
    encode(message: CatalogAccessRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAccessRule;
    fromJSON(object: any): CatalogAccessRule;
    toJSON(message: CatalogAccessRule): unknown;
    fromPartial<I extends Exact<DeepPartial<CatalogAccessRule>, I>>(object: I): CatalogAccessRule;
} = {
    encode(message: CatalogAccessRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.users) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.groups) {
            writer.uint32(26).string(v!);
        }
        if (message.catalog !== undefined) {
            CatalogAccessRuleMatcher.encode(message.catalog, writer.uint32(34).fork()).ldelim();
        }
        if (message.permission !== 0) {
            writer.uint32(40).int32(message.permission);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogAccessRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCatalogAccessRule } as CatalogAccessRule;
        message.users = [];
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(reader.string());
                    break;
                case 3:
                    message.groups.push(reader.string());
                    break;
                case 4:
                    message.catalog = CatalogAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.permission = reader.int32() as any;
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogAccessRule {
        const message = { ...baseCatalogAccessRule } as CatalogAccessRule;
        message.users = (object.users ?? []).map((e: any) => String(e));
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromJSON(object.catalog)
                : undefined;
        message.permission =
            object.permission !== undefined && object.permission !== null
                ? catalogAccessRule_PermissionFromJSON(object.permission)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: CatalogAccessRule): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => e);
        } else {
            obj.users = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        message.catalog !== undefined &&
            (obj.catalog = message.catalog
                ? CatalogAccessRuleMatcher.toJSON(message.catalog)
                : undefined);
        message.permission !== undefined &&
            (obj.permission = catalogAccessRule_PermissionToJSON(message.permission));
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogAccessRule>, I>>(object: I): CatalogAccessRule {
        const message = { ...baseCatalogAccessRule } as CatalogAccessRule;
        message.users = object.users?.map((e) => e) || [];
        message.groups = object.groups?.map((e) => e) || [];
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromPartial(object.catalog)
                : undefined;
        message.permission = object.permission ?? 0;
        message.description = object.description ?? '';
        return message;
    },
};

const baseSchemaAccessRule: object = { users: '', groups: '', owner: 0, description: '' };

export const SchemaAccessRule: {
    encode(message: SchemaAccessRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAccessRule;
    fromJSON(object: any): SchemaAccessRule;
    toJSON(message: SchemaAccessRule): unknown;
    fromPartial<I extends Exact<DeepPartial<SchemaAccessRule>, I>>(object: I): SchemaAccessRule;
} = {
    encode(message: SchemaAccessRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.users) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.groups) {
            writer.uint32(26).string(v!);
        }
        if (message.catalog !== undefined) {
            CatalogAccessRuleMatcher.encode(message.catalog, writer.uint32(34).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            SchemaAccessRuleMatcher.encode(message.schema, writer.uint32(42).fork()).ldelim();
        }
        if (message.owner !== 0) {
            writer.uint32(48).int32(message.owner);
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SchemaAccessRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchemaAccessRule } as SchemaAccessRule;
        message.users = [];
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(reader.string());
                    break;
                case 3:
                    message.groups.push(reader.string());
                    break;
                case 4:
                    message.catalog = CatalogAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.schema = SchemaAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.owner = reader.int32() as any;
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SchemaAccessRule {
        const message = { ...baseSchemaAccessRule } as SchemaAccessRule;
        message.users = (object.users ?? []).map((e: any) => String(e));
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromJSON(object.catalog)
                : undefined;
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? SchemaAccessRuleMatcher.fromJSON(object.schema)
                : undefined;
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? schemaAccessRule_OwnerFromJSON(object.owner)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: SchemaAccessRule): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => e);
        } else {
            obj.users = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        message.catalog !== undefined &&
            (obj.catalog = message.catalog
                ? CatalogAccessRuleMatcher.toJSON(message.catalog)
                : undefined);
        message.schema !== undefined &&
            (obj.schema = message.schema
                ? SchemaAccessRuleMatcher.toJSON(message.schema)
                : undefined);
        message.owner !== undefined && (obj.owner = schemaAccessRule_OwnerToJSON(message.owner));
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SchemaAccessRule>, I>>(object: I): SchemaAccessRule {
        const message = { ...baseSchemaAccessRule } as SchemaAccessRule;
        message.users = object.users?.map((e) => e) || [];
        message.groups = object.groups?.map((e) => e) || [];
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromPartial(object.catalog)
                : undefined;
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? SchemaAccessRuleMatcher.fromPartial(object.schema)
                : undefined;
        message.owner = object.owner ?? 0;
        message.description = object.description ?? '';
        return message;
    },
};

const baseTableAccessRule: object = {
    users: '',
    groups: '',
    privileges: 0,
    filter: '',
    description: '',
};

export const TableAccessRule: {
    encode(message: TableAccessRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableAccessRule;
    fromJSON(object: any): TableAccessRule;
    toJSON(message: TableAccessRule): unknown;
    fromPartial<I extends Exact<DeepPartial<TableAccessRule>, I>>(object: I): TableAccessRule;
} = {
    encode(message: TableAccessRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.users) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.groups) {
            writer.uint32(26).string(v!);
        }
        if (message.catalog !== undefined) {
            CatalogAccessRuleMatcher.encode(message.catalog, writer.uint32(34).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            SchemaAccessRuleMatcher.encode(message.schema, writer.uint32(42).fork()).ldelim();
        }
        if (message.table !== undefined) {
            TableAccessRuleMatcher.encode(message.table, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.privileges) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.columns) {
            TableAccessRule_Column.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.filter !== '') {
            writer.uint32(74).string(message.filter);
        }
        if (message.description !== '') {
            writer.uint32(90).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TableAccessRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTableAccessRule } as TableAccessRule;
        message.users = [];
        message.groups = [];
        message.privileges = [];
        message.columns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(reader.string());
                    break;
                case 3:
                    message.groups.push(reader.string());
                    break;
                case 4:
                    message.catalog = CatalogAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.schema = SchemaAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.table = TableAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.privileges.push(reader.int32() as any);
                        }
                    } else {
                        message.privileges.push(reader.int32() as any);
                    }
                    break;
                case 8:
                    message.columns.push(TableAccessRule_Column.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.filter = reader.string();
                    break;
                case 11:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TableAccessRule {
        const message = { ...baseTableAccessRule } as TableAccessRule;
        message.users = (object.users ?? []).map((e: any) => String(e));
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromJSON(object.catalog)
                : undefined;
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? SchemaAccessRuleMatcher.fromJSON(object.schema)
                : undefined;
        message.table =
            object.table !== undefined && object.table !== null
                ? TableAccessRuleMatcher.fromJSON(object.table)
                : undefined;
        message.privileges = (object.privileges ?? []).map((e: any) =>
            tableAccessRule_PrivilegeFromJSON(e),
        );
        message.columns = (object.columns ?? []).map((e: any) =>
            TableAccessRule_Column.fromJSON(e),
        );
        message.filter =
            object.filter !== undefined && object.filter !== null ? String(object.filter) : '';
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: TableAccessRule): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => e);
        } else {
            obj.users = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        message.catalog !== undefined &&
            (obj.catalog = message.catalog
                ? CatalogAccessRuleMatcher.toJSON(message.catalog)
                : undefined);
        message.schema !== undefined &&
            (obj.schema = message.schema
                ? SchemaAccessRuleMatcher.toJSON(message.schema)
                : undefined);
        message.table !== undefined &&
            (obj.table = message.table ? TableAccessRuleMatcher.toJSON(message.table) : undefined);
        if (message.privileges) {
            obj.privileges = message.privileges.map((e) => tableAccessRule_PrivilegeToJSON(e));
        } else {
            obj.privileges = [];
        }
        if (message.columns) {
            obj.columns = message.columns.map((e) =>
                e ? TableAccessRule_Column.toJSON(e) : undefined,
            );
        } else {
            obj.columns = [];
        }
        message.filter !== undefined && (obj.filter = message.filter);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TableAccessRule>, I>>(object: I): TableAccessRule {
        const message = { ...baseTableAccessRule } as TableAccessRule;
        message.users = object.users?.map((e) => e) || [];
        message.groups = object.groups?.map((e) => e) || [];
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromPartial(object.catalog)
                : undefined;
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? SchemaAccessRuleMatcher.fromPartial(object.schema)
                : undefined;
        message.table =
            object.table !== undefined && object.table !== null
                ? TableAccessRuleMatcher.fromPartial(object.table)
                : undefined;
        message.privileges = object.privileges?.map((e) => e) || [];
        message.columns = object.columns?.map((e) => TableAccessRule_Column.fromPartial(e)) || [];
        message.filter = object.filter ?? '';
        message.description = object.description ?? '';
        return message;
    },
};

const baseTableAccessRule_Column: object = { name: '', access: 0, mask: '' };

export const TableAccessRule_Column: {
    encode(message: TableAccessRule_Column, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TableAccessRule_Column;
    fromJSON(object: any): TableAccessRule_Column;
    toJSON(message: TableAccessRule_Column): unknown;
    fromPartial<I extends Exact<DeepPartial<TableAccessRule_Column>, I>>(object: I): TableAccessRule_Column;
} = {
    encode(message: TableAccessRule_Column, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.access !== 0) {
            writer.uint32(16).int32(message.access);
        }
        if (message.mask !== '') {
            writer.uint32(26).string(message.mask);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TableAccessRule_Column {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTableAccessRule_Column } as TableAccessRule_Column;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.access = reader.int32() as any;
                    break;
                case 3:
                    message.mask = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TableAccessRule_Column {
        const message = { ...baseTableAccessRule_Column } as TableAccessRule_Column;
        message.name = object.name !== undefined && object.name !== null ? String(object.name) : '';
        message.access =
            object.access !== undefined && object.access !== null
                ? tableAccessRule_Column_AccessModeFromJSON(object.access)
                : 0;
        message.mask = object.mask !== undefined && object.mask !== null ? String(object.mask) : '';
        return message;
    },

    toJSON(message: TableAccessRule_Column): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.access !== undefined &&
            (obj.access = tableAccessRule_Column_AccessModeToJSON(message.access));
        message.mask !== undefined && (obj.mask = message.mask);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<TableAccessRule_Column>, I>>(
        object: I,
    ): TableAccessRule_Column {
        const message = { ...baseTableAccessRule_Column } as TableAccessRule_Column;
        message.name = object.name ?? '';
        message.access = object.access ?? 0;
        message.mask = object.mask ?? '';
        return message;
    },
};

const baseFunctionAccessRule: object = { users: '', groups: '', privileges: 0, description: '' };

export const FunctionAccessRule: {
    encode(message: FunctionAccessRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionAccessRule;
    fromJSON(object: any): FunctionAccessRule;
    toJSON(message: FunctionAccessRule): unknown;
    fromPartial<I extends Exact<DeepPartial<FunctionAccessRule>, I>>(object: I): FunctionAccessRule;
} = {
    encode(message: FunctionAccessRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.users) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.groups) {
            writer.uint32(26).string(v!);
        }
        if (message.catalog !== undefined) {
            CatalogAccessRuleMatcher.encode(message.catalog, writer.uint32(34).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            SchemaAccessRuleMatcher.encode(message.schema, writer.uint32(42).fork()).ldelim();
        }
        if (message.function !== undefined) {
            FunctionAccessRuleMatcher.encode(message.function, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.privileges) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.description !== '') {
            writer.uint32(66).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FunctionAccessRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFunctionAccessRule } as FunctionAccessRule;
        message.users = [];
        message.groups = [];
        message.privileges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(reader.string());
                    break;
                case 3:
                    message.groups.push(reader.string());
                    break;
                case 4:
                    message.catalog = CatalogAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.schema = SchemaAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.function = FunctionAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.privileges.push(reader.int32() as any);
                        }
                    } else {
                        message.privileges.push(reader.int32() as any);
                    }
                    break;
                case 8:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FunctionAccessRule {
        const message = { ...baseFunctionAccessRule } as FunctionAccessRule;
        message.users = (object.users ?? []).map((e: any) => String(e));
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromJSON(object.catalog)
                : undefined;
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? SchemaAccessRuleMatcher.fromJSON(object.schema)
                : undefined;
        message.function =
            object.function !== undefined && object.function !== null
                ? FunctionAccessRuleMatcher.fromJSON(object.function)
                : undefined;
        message.privileges = (object.privileges ?? []).map((e: any) =>
            functionAccessRule_PrivilegeFromJSON(e),
        );
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: FunctionAccessRule): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => e);
        } else {
            obj.users = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        message.catalog !== undefined &&
            (obj.catalog = message.catalog
                ? CatalogAccessRuleMatcher.toJSON(message.catalog)
                : undefined);
        message.schema !== undefined &&
            (obj.schema = message.schema
                ? SchemaAccessRuleMatcher.toJSON(message.schema)
                : undefined);
        message.function !== undefined &&
            (obj.function = message.function
                ? FunctionAccessRuleMatcher.toJSON(message.function)
                : undefined);
        if (message.privileges) {
            obj.privileges = message.privileges.map((e) => functionAccessRule_PrivilegeToJSON(e));
        } else {
            obj.privileges = [];
        }
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FunctionAccessRule>, I>>(
        object: I,
    ): FunctionAccessRule {
        const message = { ...baseFunctionAccessRule } as FunctionAccessRule;
        message.users = object.users?.map((e) => e) || [];
        message.groups = object.groups?.map((e) => e) || [];
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromPartial(object.catalog)
                : undefined;
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? SchemaAccessRuleMatcher.fromPartial(object.schema)
                : undefined;
        message.function =
            object.function !== undefined && object.function !== null
                ? FunctionAccessRuleMatcher.fromPartial(object.function)
                : undefined;
        message.privileges = object.privileges?.map((e) => e) || [];
        message.description = object.description ?? '';
        return message;
    },
};

const baseProcedureAccessRule: object = { users: '', groups: '', privileges: 0, description: '' };

export const ProcedureAccessRule: {
    encode(message: ProcedureAccessRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureAccessRule;
    fromJSON(object: any): ProcedureAccessRule;
    toJSON(message: ProcedureAccessRule): unknown;
    fromPartial<I extends Exact<DeepPartial<ProcedureAccessRule>, I>>(object: I): ProcedureAccessRule;
} = {
    encode(message: ProcedureAccessRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.users) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.groups) {
            writer.uint32(26).string(v!);
        }
        if (message.catalog !== undefined) {
            CatalogAccessRuleMatcher.encode(message.catalog, writer.uint32(34).fork()).ldelim();
        }
        if (message.schema !== undefined) {
            SchemaAccessRuleMatcher.encode(message.schema, writer.uint32(42).fork()).ldelim();
        }
        if (message.procedure !== undefined) {
            ProcedureAccessRuleMatcher.encode(message.procedure, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.privileges) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.description !== '') {
            writer.uint32(66).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureAccessRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProcedureAccessRule } as ProcedureAccessRule;
        message.users = [];
        message.groups = [];
        message.privileges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(reader.string());
                    break;
                case 3:
                    message.groups.push(reader.string());
                    break;
                case 4:
                    message.catalog = CatalogAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.schema = SchemaAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.procedure = ProcedureAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.privileges.push(reader.int32() as any);
                        }
                    } else {
                        message.privileges.push(reader.int32() as any);
                    }
                    break;
                case 8:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ProcedureAccessRule {
        const message = { ...baseProcedureAccessRule } as ProcedureAccessRule;
        message.users = (object.users ?? []).map((e: any) => String(e));
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromJSON(object.catalog)
                : undefined;
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? SchemaAccessRuleMatcher.fromJSON(object.schema)
                : undefined;
        message.procedure =
            object.procedure !== undefined && object.procedure !== null
                ? ProcedureAccessRuleMatcher.fromJSON(object.procedure)
                : undefined;
        message.privileges = (object.privileges ?? []).map((e: any) =>
            procedureAccessRule_PrivilegeFromJSON(e),
        );
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: ProcedureAccessRule): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => e);
        } else {
            obj.users = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        message.catalog !== undefined &&
            (obj.catalog = message.catalog
                ? CatalogAccessRuleMatcher.toJSON(message.catalog)
                : undefined);
        message.schema !== undefined &&
            (obj.schema = message.schema
                ? SchemaAccessRuleMatcher.toJSON(message.schema)
                : undefined);
        message.procedure !== undefined &&
            (obj.procedure = message.procedure
                ? ProcedureAccessRuleMatcher.toJSON(message.procedure)
                : undefined);
        if (message.privileges) {
            obj.privileges = message.privileges.map((e) => procedureAccessRule_PrivilegeToJSON(e));
        } else {
            obj.privileges = [];
        }
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<ProcedureAccessRule>, I>>(
        object: I,
    ): ProcedureAccessRule {
        const message = { ...baseProcedureAccessRule } as ProcedureAccessRule;
        message.users = object.users?.map((e) => e) || [];
        message.groups = object.groups?.map((e) => e) || [];
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromPartial(object.catalog)
                : undefined;
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? SchemaAccessRuleMatcher.fromPartial(object.schema)
                : undefined;
        message.procedure =
            object.procedure !== undefined && object.procedure !== null
                ? ProcedureAccessRuleMatcher.fromPartial(object.procedure)
                : undefined;
        message.privileges = object.privileges?.map((e) => e) || [];
        message.description = object.description ?? '';
        return message;
    },
};

const baseQueryAccessRule: object = {
    users: '',
    groups: '',
    queryOwners: '',
    privileges: 0,
    description: '',
};

export const QueryAccessRule: {
    encode(message: QueryAccessRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccessRule;
    fromJSON(object: any): QueryAccessRule;
    toJSON(message: QueryAccessRule): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryAccessRule>, I>>(object: I): QueryAccessRule;
} = {
    encode(message: QueryAccessRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.users) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.groups) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.queryOwners) {
            writer.uint32(34).string(v!);
        }
        writer.uint32(42).fork();
        for (const v of message.privileges) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccessRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccessRule } as QueryAccessRule;
        message.users = [];
        message.groups = [];
        message.queryOwners = [];
        message.privileges = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(reader.string());
                    break;
                case 3:
                    message.groups.push(reader.string());
                    break;
                case 4:
                    message.queryOwners.push(reader.string());
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.privileges.push(reader.int32() as any);
                        }
                    } else {
                        message.privileges.push(reader.int32() as any);
                    }
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAccessRule {
        const message = { ...baseQueryAccessRule } as QueryAccessRule;
        message.users = (object.users ?? []).map((e: any) => String(e));
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.queryOwners = (object.queryOwners ?? []).map((e: any) => String(e));
        message.privileges = (object.privileges ?? []).map((e: any) =>
            queryAccessRule_PrivilegeFromJSON(e),
        );
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: QueryAccessRule): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => e);
        } else {
            obj.users = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        if (message.queryOwners) {
            obj.queryOwners = message.queryOwners.map((e) => e);
        } else {
            obj.queryOwners = [];
        }
        if (message.privileges) {
            obj.privileges = message.privileges.map((e) => queryAccessRule_PrivilegeToJSON(e));
        } else {
            obj.privileges = [];
        }
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryAccessRule>, I>>(object: I): QueryAccessRule {
        const message = { ...baseQueryAccessRule } as QueryAccessRule;
        message.users = object.users?.map((e) => e) || [];
        message.groups = object.groups?.map((e) => e) || [];
        message.queryOwners = object.queryOwners?.map((e) => e) || [];
        message.privileges = object.privileges?.map((e) => e) || [];
        message.description = object.description ?? '';
        return message;
    },
};

const baseSystemSessionPropertyAccessRule: object = {
    users: '',
    groups: '',
    allow: 0,
    description: '',
};

export const SystemSessionPropertyAccessRule: {
    encode(message: SystemSessionPropertyAccessRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemSessionPropertyAccessRule;
    fromJSON(object: any): SystemSessionPropertyAccessRule;
    toJSON(message: SystemSessionPropertyAccessRule): unknown;
    fromPartial<I extends Exact<DeepPartial<SystemSessionPropertyAccessRule>, I>>(object: I): SystemSessionPropertyAccessRule;
} = {
    encode(
        message: SystemSessionPropertyAccessRule,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.users) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.groups) {
            writer.uint32(26).string(v!);
        }
        if (message.property !== undefined) {
            PropertyAccessRuleMatcher.encode(message.property, writer.uint32(34).fork()).ldelim();
        }
        if (message.allow !== 0) {
            writer.uint32(40).int32(message.allow);
        }
        if (message.description !== '') {
            writer.uint32(50).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SystemSessionPropertyAccessRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSystemSessionPropertyAccessRule,
        } as SystemSessionPropertyAccessRule;
        message.users = [];
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(reader.string());
                    break;
                case 3:
                    message.groups.push(reader.string());
                    break;
                case 4:
                    message.property = PropertyAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.allow = reader.int32() as any;
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SystemSessionPropertyAccessRule {
        const message = {
            ...baseSystemSessionPropertyAccessRule,
        } as SystemSessionPropertyAccessRule;
        message.users = (object.users ?? []).map((e: any) => String(e));
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.property =
            object.property !== undefined && object.property !== null
                ? PropertyAccessRuleMatcher.fromJSON(object.property)
                : undefined;
        message.allow =
            object.allow !== undefined && object.allow !== null
                ? systemSessionPropertyAccessRule_AllowFromJSON(object.allow)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: SystemSessionPropertyAccessRule): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => e);
        } else {
            obj.users = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        message.property !== undefined &&
            (obj.property = message.property
                ? PropertyAccessRuleMatcher.toJSON(message.property)
                : undefined);
        message.allow !== undefined &&
            (obj.allow = systemSessionPropertyAccessRule_AllowToJSON(message.allow));
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<SystemSessionPropertyAccessRule>, I>>(
        object: I,
    ): SystemSessionPropertyAccessRule {
        const message = {
            ...baseSystemSessionPropertyAccessRule,
        } as SystemSessionPropertyAccessRule;
        message.users = object.users?.map((e) => e) || [];
        message.groups = object.groups?.map((e) => e) || [];
        message.property =
            object.property !== undefined && object.property !== null
                ? PropertyAccessRuleMatcher.fromPartial(object.property)
                : undefined;
        message.allow = object.allow ?? 0;
        message.description = object.description ?? '';
        return message;
    },
};

const baseCatalogSessionPropertyAccessRule: object = {
    users: '',
    groups: '',
    allow: 0,
    description: '',
};

export const CatalogSessionPropertyAccessRule: {
    encode(message: CatalogSessionPropertyAccessRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogSessionPropertyAccessRule;
    fromJSON(object: any): CatalogSessionPropertyAccessRule;
    toJSON(message: CatalogSessionPropertyAccessRule): unknown;
    fromPartial<I extends Exact<DeepPartial<CatalogSessionPropertyAccessRule>, I>>(object: I): CatalogSessionPropertyAccessRule;
} = {
    encode(
        message: CatalogSessionPropertyAccessRule,
        writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
        for (const v of message.users) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.groups) {
            writer.uint32(26).string(v!);
        }
        if (message.catalog !== undefined) {
            CatalogAccessRuleMatcher.encode(message.catalog, writer.uint32(34).fork()).ldelim();
        }
        if (message.property !== undefined) {
            PropertyAccessRuleMatcher.encode(message.property, writer.uint32(42).fork()).ldelim();
        }
        if (message.allow !== 0) {
            writer.uint32(48).int32(message.allow);
        }
        if (message.description !== '') {
            writer.uint32(58).string(message.description);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CatalogSessionPropertyAccessRule {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseCatalogSessionPropertyAccessRule,
        } as CatalogSessionPropertyAccessRule;
        message.users = [];
        message.groups = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(reader.string());
                    break;
                case 3:
                    message.groups.push(reader.string());
                    break;
                case 4:
                    message.catalog = CatalogAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.property = PropertyAccessRuleMatcher.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allow = reader.int32() as any;
                    break;
                case 7:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CatalogSessionPropertyAccessRule {
        const message = {
            ...baseCatalogSessionPropertyAccessRule,
        } as CatalogSessionPropertyAccessRule;
        message.users = (object.users ?? []).map((e: any) => String(e));
        message.groups = (object.groups ?? []).map((e: any) => String(e));
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromJSON(object.catalog)
                : undefined;
        message.property =
            object.property !== undefined && object.property !== null
                ? PropertyAccessRuleMatcher.fromJSON(object.property)
                : undefined;
        message.allow =
            object.allow !== undefined && object.allow !== null
                ? catalogSessionPropertyAccessRule_AllowFromJSON(object.allow)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : '';
        return message;
    },

    toJSON(message: CatalogSessionPropertyAccessRule): unknown {
        const obj: any = {};
        if (message.users) {
            obj.users = message.users.map((e) => e);
        } else {
            obj.users = [];
        }
        if (message.groups) {
            obj.groups = message.groups.map((e) => e);
        } else {
            obj.groups = [];
        }
        message.catalog !== undefined &&
            (obj.catalog = message.catalog
                ? CatalogAccessRuleMatcher.toJSON(message.catalog)
                : undefined);
        message.property !== undefined &&
            (obj.property = message.property
                ? PropertyAccessRuleMatcher.toJSON(message.property)
                : undefined);
        message.allow !== undefined &&
            (obj.allow = catalogSessionPropertyAccessRule_AllowToJSON(message.allow));
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<CatalogSessionPropertyAccessRule>, I>>(
        object: I,
    ): CatalogSessionPropertyAccessRule {
        const message = {
            ...baseCatalogSessionPropertyAccessRule,
        } as CatalogSessionPropertyAccessRule;
        message.users = object.users?.map((e) => e) || [];
        message.groups = object.groups?.map((e) => e) || [];
        message.catalog =
            object.catalog !== undefined && object.catalog !== null
                ? CatalogAccessRuleMatcher.fromPartial(object.catalog)
                : undefined;
        message.property =
            object.property !== undefined && object.property !== null
                ? PropertyAccessRuleMatcher.fromPartial(object.property)
                : undefined;
        message.allow = object.allow ?? 0;
        message.description = object.description ?? '';
        return message;
    },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
