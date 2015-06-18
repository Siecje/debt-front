import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {User} from './User';

@inject(HttpClient, User)
export class API {

  constructor(http, User){
    this.http = http;
    this.http.configure(x => {
      x.withBaseUrl('http://localhost:8000/api/v1.0/');
      let token = localStorage.getItem('token');
      if(token){
        x.withHeader('Authorization', 'Token ' + token);
      }
      x.withHeader('Content-Type', 'application/json');
      x.withHeader('Accept', 'application/json');
    });
    this.User = User;
  }

  getAuthToken(username, password){
    return this.http.post('auth/token', {username: username, password: password})
      .then(response => {
        let token = JSON.parse(response.response).token;
        this.http.configure(x => {
          x.withHeader('Authorization', 'Token ' + token);
        });
        localStorage.setItem('token', token);
        return Promise.resolve();
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAllCreditCards(){
    return this.http.get('credit-cards');
  }

  getCreditCard(id){
    return this.http.get(`credit-cards/${id}`);
  }

  saveCreditCard(creditCard){
    if(creditCard.id){
      return this.http.put(`credit-cards/${project.id}`, creditCard);
    }
    return this.http.post('credit-cards', creditCard);
  }
}
