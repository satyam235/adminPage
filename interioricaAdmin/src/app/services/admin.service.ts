import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from "@angular/common/http";
import { environment } from "../../environment/environment";
import { BehaviorSubject, Subject } from "rxjs";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  fetchData(documentName :any) : Observable<HttpEvent<any>> {
    // const headers: HttpHeaders = new HttpHeaders({
    //     "Content-Type": "application/json"
    //   });
    
    const formData = new FormData();
    console.log("documentName",documentName);
    formData.append('documentName', documentName);
    const req = new HttpRequest('GET', environment.fetchData, formData,{});
    return this.http.request(req);
  }
  
}

  //  getProfileData(token) {
  //   const headers: HttpHeaders = new HttpHeaders({
  //     "Content-Type": "application/json",
  //     "Authorization" : "Bearer " + token
  //   });
  //   return this.http.get(environment.getProfileDetails,{
  //     headers: headers
  //   });
  // }

