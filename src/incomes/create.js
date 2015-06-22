import {API} from '../api';
import {Router} from 'aurelia-router';

export class CreateExpense{
  static inject() { return [API, Router]; }

  constructor(API, router){
    this.API = API;
    this.router = router;
    this.income = {};
    this.errorMessage = '';
    this.errors = {};
  }

  createIncome(){
    this.API.saveIncome(this.income).then(response => {
      this.router.navigate('/');
    }).catch(err => {
      console.log(err);
      if (err.statusCode === 400){
        this.errors = JSON.parse(err.response);
      }
      else if(err.statusCode === 401){
        this.errorMessage = JSON.parse(err.response).detail;
      }
    });
  }

}
