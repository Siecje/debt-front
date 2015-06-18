import {API} from '../api';

export class CreditCard{
  static inject() { return [API]; }
  constructor(API){
    this.API = API;
    this.creditCard = {};
  }

  activate(params){
    return this.API.getCreditCard(params.id).then(response => {
      this.creditCard = response.content;
    });
  }

}
