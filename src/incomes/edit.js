import {API} from '../api';

export class EditExpense{
  static inject() { return [API]; }
  constructor(API){
    this.API = API;
    this.income = {};
    this.errorMessage = '';
    this.errors = {};
  }

  activate(params){
    this.API.getIncome(params.id).then(response => {
      this.income = response.content;
    });
  }

  saveIncome(){
    this.API.saveIncome(this.income).catch(err => {
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
