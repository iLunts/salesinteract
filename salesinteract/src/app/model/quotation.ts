/**
 * Salesinteract API V1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HistoryContact } from './historyContact';


export interface Quotation {
    id?: string;
    created?: string;
    expire?: string;
    status?: string;
    title?: string;
    amount?: number;
    archived?: string;
    organisationId?: string;
    userId?: string;
    contact?: HistoryContact;
    organisation?: HistoryContact;
}
