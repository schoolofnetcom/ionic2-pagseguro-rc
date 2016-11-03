import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {MyCartPage} from '../pages/my-cart/my-cart';
import {ProductListPage} from '../pages/product-list/product-list';
import {CheckoutPage} from '../pages/checkout/checkout';
import {Cart} from '../providers/cart';

@NgModule({
    declarations: [
        MyApp,
        MyCartPage,
        ProductListPage,
        CheckoutPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MyCartPage,
        ProductListPage,
        CheckoutPage
    ],
    providers: [Cart]
})
export class AppModule {
}
