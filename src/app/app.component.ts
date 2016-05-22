

/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home';
import { RouterActive } from './router-active';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('primeui/themes/delta/theme.css'),
    require('primeui/primeui-ng-all.min.css'),
    require('quill/dist/quill.snow.css'),
    require('./app.scss')
  ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  name = 'Webpack mix';
  loading = false;


  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

