import { ApiRequestService } from './../api-request.service';
import { Component, OnInit, Input } from '@angular/core';
import { DataControllerService } from '../rest-api';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  @Input() barValOne: number;
  @Input() barValTwo: number;
  @Input() barValThree: number;
  @Input() barValFour: number;

  barOne: boolean[]   = [true, true, true, true, true, true, true, true, true];
  barTwo: boolean[]   = [true, true, true, true, true, true, true, true];
  barThree: boolean[] = [true, true, true, true, true, true, true, true];
  barFour: boolean[]  = [true, true, true, true, true, true, true, true];

  constructor(public dataControllerService: DataControllerService, private apiRequestService: ApiRequestService) { }

  activateFirstBar(i: number) {
    let counter: number;
    for (counter = 0; counter < 9 - i; counter++) {
      this.barOne[counter] = false;
    }
  }
  activateSecondBar(i: number) {
    let counter: number;
    for (counter = 0; counter < 8 - i; counter++) {
      this.barTwo[counter] = false;
    }
  }
  activateThirdBar(i: number) {
    let counter: number;
    for (counter = 0; counter < 8 - i; counter++) {
      this.barThree[counter] = false;
    }
  }
  activateFourthBar(i: number) {
    let counter: number;
    for (counter = 0; counter < 8 - i; counter++) {
      this.barFour[counter] = false;
    }
  }

  ngOnInit() { }
}

