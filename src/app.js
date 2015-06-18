import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Debt';
    config.map([
      { route: '',     moduleId: './welcome', nav: true, title:'Welcome'},
      { route: ':id',  moduleId: './creditCards/detail'},
      { route: 'new',  moduleId: './creditCards/create', nav: true, title:'Add Credit Card'},
      { route: 'login', moduleId: './login', nav: true, title: 'Login'}
    ]);

    this.router = router;
  }
}
