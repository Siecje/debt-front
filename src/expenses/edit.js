import {API} from '../api';

export class EditExpense{
  static inject() { return [API]; }
  constructor(API){
    this.API = API;
    this.expense = {};
    this.errorMessage = '';
    this.types = [];
  }

  activate(params){
    return this.API.getExpense(params.id).then(response => {
      this.expense = response.content;
      this.API.getAllTypes().then(response => {
        this.types = response.content;
      });
    });
  }

  saveExpense(){
    this.API.saveExpense(this.expense).catch(err => {
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
