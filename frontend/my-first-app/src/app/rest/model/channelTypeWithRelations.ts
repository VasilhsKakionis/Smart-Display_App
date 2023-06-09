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
import { DeviceTypeWithRelations } from './deviceTypeWithRelations';


/**
 * (Schema options: { includeRelations: true })
 */
export interface ChannelTypeWithRelations { 
    /**
     * Automatically generated ID
     */
    id?: number;
    /**
     * ChannelType name
     */
    name: string;
    /**
     * ChannelType category
     */
    category?: string;
    /**
     * ChannelType description
     */
    description?: string;
    /**
     * Unit of measurement
     */
    unit?: string;
    /**
     * Type of data: UNDEFINED / SPOT_VALUE / COUNTER / TEXT
     */
    channelType: string;
    /**
     * ID of DeviceType that ChannelType belongs to
     */
    deviceTypeId: number;
    deviceType?: DeviceTypeWithRelations;
}

