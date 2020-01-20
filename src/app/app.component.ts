import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string,}>;

  constructor(
              public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: "HomePage", icon: "fa fa-home" },
      { title: "My Favorites", component: "FavoritesPage", icon: "fa fa-heart" },
      { title: "All Products", component: "AllproductsPage", icon: "fa fa-inbox" },
      { title: "Didn't find your product?", component: "AllproductsPage", icon: "fa fa-share" },
      { title: "Contact Us", component: "ContactusPage", icon: "fa fa-phone" },
      { title: "Earn Rewards", component: "ReferralPage", icon: "fa fa-usd" },
      { title: "FAQ", component: "FaqPage", icon: "fa fa-question-circle" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }


  loginPage(){
    this.nav.push('LoginPage');
    // this.navCtrl.push('LoginPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
