import {API} from '../api';

export class Expense{
  static inject() { return [API]; }

  constructor(API){
    this.API = API;
    this.expense = {};
  }

  activate(params){
    return this.API.getExpense(params.id).then(response => {
      this.expense = response.content;
    });
  }

}
