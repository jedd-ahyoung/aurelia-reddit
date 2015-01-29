import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.navigation = [
      { href: '#/hot', title: 'Hot' },
      { href: '#/new', title: 'New' },
      { href: '#/rising', title: 'Rising' },
      { href: '#/controversial', title: 'Controversial' },
      { href: '#/top', title: 'Top' },
      { href: '#/gilded', title: 'Gilded' },
      { href: '#/wiki', title: 'Wiki' },
      { href: '#/promoted', title: 'Promoted' }
    ];
    
    this.router = router;
    this.router.configure(config => {
      config.title = 'Reddit';
      config.map([
        { route: ['/:type'],         moduleId: 'listing'},
      ]).mapUnknownRoutes(instruction => {
        instruction.config.moduleId = 'listing';
        console.log("instruction", instruction);
      });
    });
  }
}