import {API} from '../api';

export class Type{
  static inject() { return [API]; }

  constructor(API){
    this.API = API;
    this.type = {};
  }

  activate(params){
    return this.API.getType(params.id).then(response => {
      this.type = response.content;
    });
  }

}
