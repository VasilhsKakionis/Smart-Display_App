import { DataControllerService } from './../rest-api/api/dataController.service';
import { ApiRequestService } from './../api-request.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standard-images',
  templateUrl: './standard-images.component.html',
  styleUrls: ['./standard-images.component.css']
})

export class StandardImagesComponent implements OnInit {

  @Input() lowIND11: boolean;
  @Input() lowIND12: boolean;
  @Input() lowIND13: boolean;
  @Input() lowIND14: boolean;
  @Input() lowIND21: boolean;
  @Input() lowIND22: boolean;
  @Input() lowIND23: boolean;
  @Input() lowIND24: boolean;
  @Input() lowIND31: boolean;
  @Input() lowIND32: boolean;
  @Input() lowIND33: boolean;
  @Input() lowIND34: boolean;
  @Input() lowIND41: boolean;
  @Input() lowIND42: boolean;
  @Input() lowIND43: boolean;
  @Input() lowIND44: boolean;

  constructor(public dataControllerService: DataControllerService, private apiRequestService: ApiRequestService) { }

  ngOnInit() { }
}
