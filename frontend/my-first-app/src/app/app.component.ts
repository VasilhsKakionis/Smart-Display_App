import { ApiRequestService } from './api-request.service';
import { Component } from '@angular/core';
import { DataControllerService } from './rest-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // BarComponent
  barValOne: number;
  barValTwo: number;
  barValThree: number;
  barValFour: number;
  // UnderBarElementsComponent
  elementRowZero: boolean;
  elementRowOne: boolean;
  elementRowTwo: boolean;
  elementRowThree: boolean;
  // SevenSegmentDisplayComponent
  hoursToSend: string;
  hourglassToSend: boolean;
  // StandardImagesComponent
  lowIND11: boolean[];
  lowIND12: boolean[];
  lowIND13: boolean[];
  lowIND14: boolean[];
  lowIND21: boolean[];
  lowIND22: boolean[];
  lowIND23: boolean[];
  lowIND24: boolean[];
  lowIND31: boolean[];
  lowIND32: boolean[];
  lowIND33: boolean[];
  lowIND34: boolean[];
  lowIND41: boolean[];
  lowIND42: boolean[];
  lowIND43: boolean[];
  lowIND44: boolean[];


  constructor(public dataControllerService: DataControllerService, private apiRequestService: ApiRequestService) {
    setInterval(() => {
      this.getArraysList();
    }, 1000);
  }

  getArraysList() {
    this.apiRequestService.getArrays()
    .subscribe((data: any) => {
      console.log(data);
      const len: number = Object.keys(data).length - 1;
      console.log(len);
      this.barValOne = data[len].bar1;
      this.barValTwo = data[len].bar2;
      this.barValThree = data[len].bar3;
      this.barValFour = data[len].bar4;
      this.elementRowZero = data[len].upperIND1;
      this.elementRowOne = data[len].upperIND2;
      this.elementRowTwo = data[len].upperIND3;
      this.elementRowThree = data[len].upperIND4;
      this.hoursToSend = String(data[len].hours);
      this.hourglassToSend = data[len].timestamp;
      this.lowIND11 = data[len].lowIND11;
      this.lowIND12 = data[len].lowIND12;
      this.lowIND13 = data[len].lowIND13;
      this.lowIND14 = data[len].lowIND14;
      this.lowIND21 = data[len].lowIND21;
      this.lowIND22 = data[len].lowIND22;
      this.lowIND23 = data[len].lowIND23;
      this.lowIND24 = data[len].lowIND24;
      this.lowIND31 = data[len].lowIND31;
      this.lowIND32 = data[len].lowIND32;
      this.lowIND33 = data[len].lowIND33;
      this.lowIND34 = data[len].lowIND34;
      this.lowIND41 = data[len].lowIND41;
      this.lowIND42 = data[len].lowIND42;
      this.lowIND43 = data[len].lowIND43;
      this.lowIND44 = data[len].lowIND44;
    });
  }

}

/*
  1-9, 1-8, 1-8, 1-8,
  t/f, t/f, t/f, t/f,
    5 DIGIT NUM, t/f,
  t/f, t/f, t/f, t/f,
  t/f, t/f, t/f, t/f,
  t/f, t/f, t/f, t/f,
  t/f, t/f, t/f, t/f
*/
