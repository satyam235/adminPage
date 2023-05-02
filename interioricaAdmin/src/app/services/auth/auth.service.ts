import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isSessionExpired: boolean = false;


  constructor(private router: Router,private dataService:DataService) {}
  public isAuthenticated(): boolean {
    this.isSessionExpired = false;
    const accessToken = this.dataService.getPersistData('access_token');
    if (accessToken == environment.login_credentials.access_token) {
      this.isSessionExpired = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isSessionExpired = true;
    this.router.navigate(['login'], { state: { message: 'You have been successfully logged out!', status:'success' } });
  }
}
