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


export interface History {
    id?: string;
    createdMs?: number;
    created?: string;
    completed?: string;
    status?: string;
    outcome?: string;
    organisationName?: string;
    organisationId?: string;
    userId?: string;
    assignedId?: string;
    contact?: HistoryContact;
    sales?: HistoryContact;
    assigned?: HistoryContact;
}
