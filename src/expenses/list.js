import {API} from '../api';

export class Expenses{
  static inject() { return [API]; }

  constructor(API){
    this.API = API;
    this.expenses = [];
  }

  activate(params){
    return this.API.getAllExpenses().then(response => {
      this.expenses = response.content;
    });
  }

}
