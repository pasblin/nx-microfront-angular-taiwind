import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn() {
    console.log(!!localStorage.getItem('token') && localStorage.getItem('token') === '123456');
    return !!localStorage.getItem('token') && localStorage.getItem('token') === '123456';
  }
  logout() {
    localStorage.removeItem('token');
  }
}
