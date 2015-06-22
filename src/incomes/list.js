import {API} from '../api';

export class Incomes{
  static inject() { return [API]; }

  constructor(API){
    this.API = API;
    this.incomes = [];
  }

  activate(params){
    return this.API.getAllIncomes().then(response => {
      this.incomes = response.content;
    });
  }

}
