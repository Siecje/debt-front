import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {API} from './api';

@inject(API, Router)
export class Login{

  constructor(API, Router){
    this.api = API;
    this.username = '';
    this.password = '';
    this.router = Router;
  }

  activate(){
    // Redirect if already logged in
    let token = localStorage.getItem('token');
    if(token){
      this.router.navigate('');
    }
  }

  login(){
    this.api.getAuthToken(this.username, this.password).then(() => {
      this.router.navigate('');
    });
  }

}
