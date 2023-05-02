import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  clearStorageData() {
    localStorage.clear();
  }

  clearPersistData() {
    sessionStorage.clear();
  }

  setStorageData(key:any, value:any) {
    sessionStorage.setItem(key, value);
  }

  getStorageData(key:any) {
    if (sessionStorage.getItem(key) !== null) {
      return sessionStorage.getItem(key);
    } else {
      return sessionStorage.getItem(key);
    }
  }

  setPersistData(key:any, value:any) {
    localStorage.setItem(key, value);
  }

  getPersistData(key:any) {
    if (localStorage.getItem(key) !== null) {
      return localStorage.getItem(key);
    } else {
      return localStorage.getItem(key);
    }
  }

 

}