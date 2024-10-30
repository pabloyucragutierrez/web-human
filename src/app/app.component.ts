import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Human 3.0';
  showCookieCard: boolean = true;

  acceptCookies() {
    this.showCookieCard = false;
    console.log('Cookies aceptadas');
  }

  declineCookies() {
    this.showCookieCard = false;
    console.log('Cookies rechazadas');
  }
}
