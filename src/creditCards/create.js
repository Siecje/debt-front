import {API} from '../api';
import {Router} from 'aurelia-router';

export class CreateCreditCard{
  static inject() { return [API, Router]; }

  constructor(API, router){
    this.API = API;
    this.router = router;
    this.creditCard = {};
    this.errorMessage = '';
  }

  createCreditCard(){
    this.API.saveCreditCard(this.creditCard).then(response => {
      // this.router.navigate('/' + JSON.parse(response.response).id);
      this.router.navigate('/');
    }).catch(err => {
      console.log(err);
      if (err.statusCode === 400){
        this.errorMessage = JSON.parse(err.response).type;
      }
      else if(err.statusCode === 401){
        this.errorMessage = JSON.parse(err.response).detail;
      }
    });
  }

}
