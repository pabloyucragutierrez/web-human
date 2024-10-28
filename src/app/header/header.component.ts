import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuVisible: boolean = false;

  reloadPage() {
    window.location.reload();
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
