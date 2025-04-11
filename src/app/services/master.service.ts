import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/inteface/IRoles';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient){}
  //http = inject(HttpClient);

  gerDesignationList():Observable<APIResponseModel>{
     return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }

}
