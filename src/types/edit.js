import {API} from '../api';

export class EditExpense{
  static inject() { return [API]; }
  constructor(API){
    this.API = API;
    this.type = {};
    this.errorMessage = '';
  }

  activate(params){
    return this.API.getType(params.id).then(response => {
      this.type = response.content;
    });
  }

  saveType(){
    this.API.saveType(this.type).catch(err => {
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
