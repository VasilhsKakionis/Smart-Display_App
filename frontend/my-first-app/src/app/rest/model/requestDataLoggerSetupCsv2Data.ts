/**
 * Atman IoT
 * Atman IoT Server
 *
 * The version of the OpenAPI document: 0.2.3
 * Contact: k.khoury@k-ren.gr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RequestDataLoggerSetupCsv2DataHeaderLocation } from './requestDataLoggerSetupCsv2DataHeaderLocation';
import { RequestDataLoggerSetupCsv2DataValueLocation } from './requestDataLoggerSetupCsv2DataValueLocation';


/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 */
export interface RequestDataLoggerSetupCsv2Data { 
    header: RequestDataLoggerSetupCsv2DataHeaderLocation;
    value: RequestDataLoggerSetupCsv2DataValueLocation;
}

