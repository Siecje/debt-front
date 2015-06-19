import {API} from '../api';

export class EditCreditCard{
  static inject() { return [API]; }
  constructor(API){
    this.API = API;
    this.creditCard = {};
    this.errorMessage = '';
  }

  activate(params){
    return this.API.getCreditCard(params.id).then(response => {
      this.creditCard = response.content;
    });
  }

  saveCreditCard(){
    this.API.saveCreditCard(this.creditCard).catch(err => {
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
