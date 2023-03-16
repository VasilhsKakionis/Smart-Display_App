import { DataControllerService } from './../rest-api/api/dataController.service';
import { ApiRequestService } from './../api-request.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-under-bar-elements',
  templateUrl: './under-bar-elements.component.html',
  styleUrls: ['./under-bar-elements.component.css']
})

export class UnderBarElementsComponent implements OnInit {

  @Input() elementRowZero: boolean;
  @Input() elementRowOne: boolean;
  @Input() elementRowTwo: boolean;
  @Input() elementRowThree: boolean;

  constructor(public dataControllerService: DataControllerService, private apiRequestService: ApiRequestService) { }

  ngOnInit() { }
}
