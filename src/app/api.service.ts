import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl:any = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  constructor(private http:HttpClient) { }

getData():Observable<any>{
  return this.http.get<any>(this.apiUrl)
}


}
