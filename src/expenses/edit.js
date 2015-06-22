import {API} from '../api';

export class EditExpense{
  static inject() { return [API]; }
  constructor(API){
    this.API = API;
    this.expense = {};
    this.types = [];
    this.errorMessage = '';
    this.errors = {};
  }

  activate(params){
    this.API.getExpense(params.id).then(response => {
      this.expense = response.content;
    }).then(() => {
      this.API.getAllTypes().then(response => {
        this.types = response.content;
      });
    });
  }

  saveExpense(){
    this.API.saveExpense(this.expense).catch(err => {
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
