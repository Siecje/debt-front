import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Debt';
    config.map([
      { route: '',     moduleId: './welcome', nav: false, title:'Welcome'},
      { route: 'login', moduleId: './login', nav: true, title: 'Login'},

      { route: 'expenses',      moduleId: './expenses/list', nav: true, title: 'Expenses'},
      { route: 'expenses/new',  moduleId: './expenses/create', nav: true, title:'Add Expense'},
      { route: 'expenses/:id',  moduleId: './expenses/detail'},
      { route: 'expenses/:id/edit',  moduleId: './expenses/edit'},

      { route: 'new',  moduleId: './creditCards/create', nav: true, title:'Add Credit Card'},
      { route: ':id',  moduleId: './creditCards/detail'},
      { route: ':id/edit',  moduleId: './creditCards/edit'},

      { route: 'types/new',  moduleId: './types/create', nav: true, title:'Add Type'},
      { route: 'types/:id',  moduleId: './types/detail'},
      { route: 'types/:id/edit',  moduleId: './types/edit'}
    ]);

    this.router = router;
  }
}
