import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILogin, ILoginResonse } from '../models/auth.model';
import { Observable, map } from 'rxjs';
import { apiEndpoint } from '../constants/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService: TokenService, private http: HttpClient, private router: Router) { }

  onRegister(data: any): Observable<any> {
    const registerUrl = `${apiEndpoint.AuthEndpoint.register}`;
    console.log('registerUrl', registerUrl) 
    return this.http.post(registerUrl, data);
  }

  onLogin(data: ILogin) {
    return this.http.post<ILoginResonse>(`${apiEndpoint.AuthEndpoint.login}`, data).pipe(map((response) => {
      if (response) {
        console.log('response :>> ', response);
        this.tokenService.setToken(response.accessToken);
        if (response.accessToken) {
          // Redirect to the dashboard if the token is set
          this.router.navigate(['dashboard']).then(() => {
            // Reload the current route
            window.location.reload();
          });
        }
      }
    }));
  }

  onLogout() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenService.getToken()}`,
    });
    return this.http.get(`${apiEndpoint.AuthEndpoint.logout}`, { headers }).pipe(map((response) => {
      if (response) {
        this.tokenService.removeToken();
        // Redirect to the login page
        this.router.navigate(['/']).then(() => {
          // Reload the current route
          window.location.reload();
        });; 
      }
      return response;
    }))
  }

  getUsers(): Observable<any> {
    return this.http.get(`${apiEndpoint.AuthEndpoint.userlist}/`);
  }
}


