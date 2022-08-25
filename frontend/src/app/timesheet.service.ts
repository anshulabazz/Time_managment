import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  private url: string = 'http://localhost:8080'

  constructor(public http: HttpClient) { }

  getuser(): Observable<any> {
     return this.http.get(this.url+'/get-user')
  }
  getsecuser(user:any):Observable<any> {
    return this.http.get(this.url+'/get-userdata',user)
  }
  getdatedata(startdate: any, enddate: any): Observable<any> {
    return this.http.get(this.url +'/get-datedata',startdate)
  }
}
