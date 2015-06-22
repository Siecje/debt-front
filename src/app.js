import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Debt';
    config.map([
      { route: '',      moduleId: './welcome', nav: false, title:'Welcome'},
      { route: 'login', moduleId: './login', nav: true, title: 'Login'},

      { route: 'incomes',      moduleId: './incomes/list', nav: true, title: 'Incomes'},
      { route: 'incomes/new',  moduleId: './incomes/create', nav: true, title:'Add Income'},
      { route: 'incomes/:id',  moduleId: './incomes/detail'},
      { route: 'incomes/:id/edit',  moduleId: './incomes/edit'},

      { route: 'expenses',      moduleId: './expenses/list', nav: true, title: 'Expenses'},
      { route: 'expenses/new',  moduleId: './expenses/create', nav: true, title:'Add Expense'},
      { route: 'expenses/:id',  moduleId: './expenses/detail'},
      { route: 'expenses/:id/edit',  moduleId: './expenses/edit'},

      { route: 'types/new',  moduleId: './types/create', nav: true, title:'Add Type'},
      { route: 'types/:id',  moduleId: './types/detail'},
      { route: 'types/:id/edit',  moduleId: './types/edit'},

      { route: 'credit-cards',      moduleId: './creditCards/list', nav: true, title: 'Credit Cards'},
      { route: 'credit-cards/new',  moduleId: './creditCards/create', nav: true, title:'Add Credit Card'},
      { route: 'credit-cards/:id',  moduleId: './creditCards/detail'},
      { route: 'credit-cards/:id/edit',  moduleId: './creditCards/edit'}
    ]);

    this.router = router;
  }
}
