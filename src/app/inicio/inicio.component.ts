import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  yearsExperience: number = 0;
  companies: number = 0;
  customerSatisfaction: number = 0;

  finalYearsExperience: number = 14;
  finalCompanies: number = 300;
  finalCustomerSatisfaction: number = 98;

  @ViewChild('trabajarSection', { static: true }) trabajarSection!: ElementRef;
  @ViewChild('sliderExito', { static: false }) sliderExito!: ElementRef;

  activeButton: 'left' | 'right' = 'right'; // Establece el botón activo inicialmente

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this.trabajarSection.nativeElement);
  }

  animateNumbers() {
    const yearsInterval = setInterval(() => {
      if (this.yearsExperience < this.finalYearsExperience) {
        this.yearsExperience++;
      } else {
        clearInterval(yearsInterval);
      }
    }, 100);
    const companiesInterval = setInterval(() => {
      if (this.companies < this.finalCompanies) {
        this.companies += 5;
      } else {
        clearInterval(companiesInterval);
      }
    }, 100);

    const satisfactionInterval = setInterval(() => {
      if (this.customerSatisfaction < this.finalCustomerSatisfaction) {
        this.customerSatisfaction++;
      } else {
        clearInterval(satisfactionInterval);
      }
    }, 30);
  }

  leftExito() {
    const containerExito = this.sliderExito.nativeElement;
    containerExito.scrollLeft -= containerExito.offsetWidth;
    this.activeButton = 'left'; 
  }

  rightExito() {
    const containerExito = this.sliderExito.nativeElement;
    containerExito.scrollLeft += containerExito.offsetWidth;
    this.activeButton = 'right'; 
  }
}
