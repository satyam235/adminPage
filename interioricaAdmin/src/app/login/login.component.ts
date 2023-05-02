import { Component } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email = "";
  password = "";
  constructor() { }

  login() {
    if (this.email == environment.login_credentials.username && this.password == environment.login_credentials.password) {
      console.log("login success");
      localStorage.setItem('access_token', environment.login_credentials.access_token);
      window.location.href = "/admin";
    }
  }

}
