import {API} from '../api';

export class Income{
  static inject() { return [API]; }

  constructor(API){
    this.API = API;
    this.income = {};
  }

  activate(params){
    return this.API.getIncome(params.id).then(response => {
      this.income = response.content;
    });
  }

}
