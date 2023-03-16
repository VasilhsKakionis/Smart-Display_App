import { DataWithRelations } from './rest-api/model/dataWithRelations';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, throwError } from 'rxjs';
import { DataControllerService } from './rest-api';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiRequestService {

  constructor(public dataControllerService: DataControllerService) { }

  getArrays() {
    return this.dataControllerService.dataControllerFind()
    .pipe(
      map((data: DataWithRelations[]) => {
        return data;
      }), catchError( error => {
        return throwError('Somth went wrong!');
      })
    );
  }
}
