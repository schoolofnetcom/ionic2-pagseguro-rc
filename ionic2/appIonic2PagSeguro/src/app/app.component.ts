import { Component, ViewChild } from '@angular/core';
import {Http} from '@angular/http';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import {MyCartPage} from '../pages/my-cart/my-cart';
import {ProductListPage} from '../pages/product-list/product-list';

declare var PagSeguroDirectPayment;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = MyCartPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public http: Http
  ) {
    this.initializeApp();
    this.getSession();

    // set our app's pages
    this.pages = [
      { title: 'Listagem de produtos', component: ProductListPage },
      { title: 'Meu carrinho', component: MyCartPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  getSession(){
    this.http.get('http://localhost:8000/api/session')
        .toPromise().then(response => PagSeguroDirectPayment.setSessionId(response.json().sessionId))
  }
}
