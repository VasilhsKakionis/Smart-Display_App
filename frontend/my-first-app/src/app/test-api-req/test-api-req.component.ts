import { DataWithRelations } from './../rest-api/model/dataWithRelations';
import { Component, OnInit } from '@angular/core';
import { DataControllerService } from '../rest-api';

@Component({
  selector: 'app-test-api-req',
  templateUrl: './test-api-req.component.html',
  styleUrls: ['./test-api-req.component.css']
})
export class TestApiReqComponent implements OnInit {

  myArray: DataWithRelations[];

  constructor(private dataControllerService: DataControllerService) { }

  ngOnInit() {

    this.dataControllerService.dataControllerFind()
    .subscribe(
      response => {
        console.log(response);
        this.myArray = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
