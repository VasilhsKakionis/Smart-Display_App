import { ApiRequestService } from './../api-request.service';
import { Component, OnInit, Input } from '@angular/core';
import { DataControllerService } from '../rest-api';

@Component({
  selector: 'app-seven-segment-display',
  templateUrl: './seven-segment-display.component.html',
  styleUrls: ['./seven-segment-display.component.css']
})
export class SevenSegmentDisplayComponent implements OnInit {

  @Input() hours: string;
  @Input() hourglass: boolean;

  constructor(public dataControllerService: DataControllerService, private apiRequestService: ApiRequestService) { }

  exceedHours() {
    if (String(this.hours).length > 5 || String(this.hours).length === 0) {
      this.hours = 'error';
    }
  }

  ngOnInit() { }

}
