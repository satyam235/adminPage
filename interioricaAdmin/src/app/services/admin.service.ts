import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environment/environment";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AdminService {
//   constructor(private http: HttpClient) {}

//   fetchData(param:any){
//     const headers: HttpHeaders = new HttpHeaders({
//         "Content-Type": "application/json"
//       });
//     var url = environment.fetchData;
//     for(let key in param){
//         if(param[key] == null || param[key] == undefined){
//             url = url + key + "=" + param[key] + "&";
//         }
//     }
//     return this.http.get(url, {
//         headers:headers,
//         params:param
//     });
//   }
  
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

