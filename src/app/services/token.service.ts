import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(@Inject(DOCUMENT) private document: Document) {
    const token = this.getToken();
    if (token) {
      this.updateToken(true);
    }
  }

  updateToken(status: boolean) {
    this.isAuthentication.next(status);
  }

  setToken(token: string) {
    if (this.document?.defaultView?.localStorage) {
      this.document.defaultView.localStorage.setItem('accessToken', token);
    } else {
      console.error('Cannot access localStorage');
    }
  }

  getToken(): string | null {
    if (this.document?.defaultView?.localStorage) {
      return this.document.defaultView.localStorage.getItem('accessToken') || null;
    } else {
      console.error('Cannot access localStorage');
      return null;
    }
  }

  removeToken() {
    if (this.document?.defaultView?.localStorage) {
      return this.document.defaultView.localStorage.removeItem('accessToken');
    } else {
      console.error('Cannot access localStorage');
      return null;
    }
  }
}