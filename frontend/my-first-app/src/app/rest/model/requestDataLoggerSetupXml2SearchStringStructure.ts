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
import { RequestDataLoggerSetupXml2SearchStringStructureSplit } from './requestDataLoggerSetupXml2SearchStringStructureSplit';


/**
 * (Schema options: { exclude: [ \'fileFormat\' ] })
 */
export interface RequestDataLoggerSetupXml2SearchStringStructure { 
    /**
     * XML key containing parent attribute
     */
    key: string;
    /**
     * Flag for selecting if parent value is the entire string contained in the provided XML Key.  If set to true performSplit must be defined
     */
    isString: boolean;
    performSplit: Array<RequestDataLoggerSetupXml2SearchStringStructureSplit>;
}

