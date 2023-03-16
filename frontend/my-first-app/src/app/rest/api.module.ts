import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AssetControllerService } from './api/assetController.service';
import { AssetGroupControllerService } from './api/assetGroupController.service';
import { DataLoggerControllerService } from './api/dataLoggerController.service';
import { DeviceChannelControllerService } from './api/deviceChannelController.service';
import { DeviceControllerService } from './api/deviceController.service';
import { DeviceGroupMembershipControllerService } from './api/deviceGroupMembershipController.service';
import { DeviceTypeChannelTypeControllerService } from './api/deviceTypeChannelTypeController.service';
import { DeviceTypeControllerService } from './api/deviceTypeController.service';
import { EventControllerService } from './api/eventController.service';
import { PingControllerService } from './api/pingController.service';
import { SchedulerControllerService } from './api/schedulerController.service';
import { SolarMonitorControllerService } from './api/solarMonitorController.service';
import { UserControllerService } from './api/userController.service';
import { VirtualAccessControllerService } from './api/virtualAccessController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
