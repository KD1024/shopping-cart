import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private webApi = 'http://localhost:3000/';

  getItemList() {
    return this.http.get(this.webApi + 'itemList').pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.messageText ? error.messageText : error.toString();
    }
    return observableThrowError(errMsg);
  }
}
