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
import { RequestDataLoggerSetupXml2SearchStringStructure } from './requestDataLoggerSetupXml2SearchStringStructure';


/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 */
export interface RequestDataLoggerSetupXml2ExcludingFileFormat { 
    /**
     * XML key of list containing the the measurements
     */
    objectListKey: string;
    model: RequestDataLoggerSetupXml2SearchStringStructure;
    serialNo: RequestDataLoggerSetupXml2SearchStringStructure;
    channelName: RequestDataLoggerSetupXml2SearchStringStructure;
    channelUnit: RequestDataLoggerSetupXml2SearchStringStructure;
    value: RequestDataLoggerSetupXml2SearchStringStructure;
    period: RequestDataLoggerSetupXml2SearchStringStructure;
    timestamp: RequestDataLoggerSetupXml2SearchStringStructure;
    /**
     * Provided Configuration Confirmation. Set to true to save current configuration
     */
    confirm: boolean;
}
