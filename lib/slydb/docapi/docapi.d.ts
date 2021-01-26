import { Session } from '../../../index';
import {DynamoDB} from "aws-sdk";

export class DocAPIService {
    constructor(endpoint: string, session?: Session);
    createTable(params: DynamoDB.DocumentClient.CreateTableInput): Promise<DynamoDB.DocumentClient.CreateTableOutput>;
    deleteTable(params: DynamoDB.DocumentClient.DeleteTableInput): Promise<DynamoDB.DocumentClient.DeleteTableOutput>;
    describeTable(params: DynamoDB.DocumentClient.DescribeTableInput): Promise<DynamoDB.DocumentClient.DescribeTableOutput>;
    listTables(params: DynamoDB.DocumentClient.ListTablesInput): Promise<DynamoDB.DocumentClient.ListTablesOutput>;

    batchGetItem(params: DynamoDB.DocumentClient.BatchGetItemInput): Promise<DynamoDB.DocumentClient.BatchGetItemOutput>;
    batchWriteItem(params: DynamoDB.DocumentClient.BatchWriteItemInput): Promise<DynamoDB.DocumentClient.BatchWriteItemOutput>;
    deleteItem(params: DynamoDB.DocumentClient.DeleteItemInput): Promise<DynamoDB.DocumentClient.DeleteItemOutput>;
    getItem(params: DynamoDB.DocumentClient.GetItemInput): Promise<DynamoDB.DocumentClient.GetItemOutput>;
    putItem(params: DynamoDB.DocumentClient.PutItemInput): Promise<DynamoDB.DocumentClient.PutItemOutput>;
    query(params: DynamoDB.DocumentClient.QueryInput): Promise<DynamoDB.DocumentClient.QueryOutput>;
    scan(params: DynamoDB.DocumentClient.ScanInput): Promise<DynamoDB.DocumentClient.ScanOutput>;
    transactGetItems(params: DynamoDB.DocumentClient.TransactGetItemsInput): Promise<DynamoDB.DocumentClient.TransactGetItemsOutput>;
    transactWriteItems(params: DynamoDB.DocumentClient.TransactWriteItemsInput): Promise<DynamoDB.DocumentClient.TransactWriteItemsOutput>;
    updateItem(params: DynamoDB.DocumentClient.UpdateItemInput): Promise<DynamoDB.UpdateItemOutput>;
}
