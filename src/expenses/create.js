import {API} from '../api';
import {Router} from 'aurelia-router';

export class CreateExpense{
  static inject() { return [API, Router]; }

  constructor(API, router){
    this.API = API;
    this.router = router;
    this.expense = {};
    this.errorMessage = '';
    this.errors = {};
    this.types = [];
  }

  activate(params){
    return this.API.getAllTypes().then(response => {
      this.types = response.content;
    });
  }

  createExpense(){
    this.API.saveExpense(this.expense).then(response => {
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
