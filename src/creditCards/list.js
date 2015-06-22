import {API} from '../api';

export class CreditCards{
  static inject() { return [API]; }

  constructor(API){
    this.API = API;
    this.creditCards = [];
  }

  activate(params){
    return this.API.getAllCreditCards().then(response => {
      this.creditCards = response.content;
    });
  }

}
