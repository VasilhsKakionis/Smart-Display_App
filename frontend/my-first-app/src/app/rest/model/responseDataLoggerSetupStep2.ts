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
import { MeasurementSample } from './measurementSample';
import { DeviceTypeExtended } from './deviceTypeExtended';
import { Device } from './device';


export interface ResponseDataLoggerSetupStep2 { 
    deviceTypes: Array<DeviceTypeExtended>;
    devices: Array<Device>;
    sample?: MeasurementSample;
    /**
     * Sample Value
     */
    errorCount: number;
    errors?: Array<string>;
}
