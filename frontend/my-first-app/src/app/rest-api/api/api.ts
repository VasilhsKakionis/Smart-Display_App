export * from './dataController.service';
import { DataControllerService } from './dataController.service';
export * from './pingController.service';
import { PingControllerService } from './pingController.service';
export const APIS = [DataControllerService, PingControllerService];
