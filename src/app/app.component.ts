import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Human 3.0';
  showCookieCard: boolean = false; // Inicialmente oculto
  showScrollButton: boolean = false; // Controla la visibilidad del botón

  ngOnInit() {
    // Verifica si el usuario ya tomó una decisión
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      this.showCookieCard = true; // Muestra el banner si no hay decisión
      document.body.classList.add('no-scroll');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el desplazamiento vertical es mayor a 100px, muestra el botón
    this.showScrollButton = window.scrollY > 500;
  }

  scrollToTop() {
    // Desplaza suavemente hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  acceptCookies() {
    this.showCookieCard = false;
    document.body.classList.remove('no-scroll');
    localStorage.setItem('cookieConsent', 'accepted'); // Guarda la decisión en localStorage
    console.log('Cookies aceptadas');
  }

  declineCookies() {
    this.showCookieCard = false;
    document.body.classList.remove('no-scroll');
    localStorage.setItem('cookieConsent', 'rejected'); // Guarda la decisión en localStorage
    console.log('Cookies rechazadas');
  }
}
