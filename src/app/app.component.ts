import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Human 3.0';
  showCookieCard: boolean = false;
  showScrollButton: boolean = false;
  showWhatsAppIcon: boolean = true;
  constructor(private router: Router) {}

  ngOnInit() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      this.showCookieCard = true;
      document.body.classList.add('no-scroll');
    }

    this.router.events.subscribe(() => {
      this.showWhatsAppIcon = this.router.url !== '/iniciar-sesion';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  acceptCookies() {
    this.showCookieCard = false;
    document.body.classList.remove('no-scroll');
    localStorage.setItem('cookieConsent', 'accepted');
    console.log('Cookies aceptadas');
  }

  declineCookies() {
    this.showCookieCard = false;
    document.body.classList.remove('no-scroll');
    localStorage.setItem('cookieConsent', 'rejected');
    console.log('Cookies rechazadas');
  }
}
