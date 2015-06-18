import {inject} from 'aurelia-framework';
import {API} from './api';

@inject(API)
export class Welcome{

  constructor(API){
    this.API = API;
    this.creditCards = [];
  }

  activate(){
    return this.API.getAllCreditCards().then(response => {
      this.creditCards = response.content;
    });
  }
}
