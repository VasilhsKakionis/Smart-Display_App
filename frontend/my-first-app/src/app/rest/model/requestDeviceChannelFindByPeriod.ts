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


export interface RequestDeviceChannelFindByPeriod { 
    /**
     * The period data is requested for. Acceptable values: day / week / month / year
     */
    period: string;
    /**
     * Number of periods data is requested for.
     */
    depth: number;
    /**
     * Offset, calculated in periodes.
     */
    offset: number;
}

