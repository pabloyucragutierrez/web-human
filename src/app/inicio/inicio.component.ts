import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  yearsExperience: number = 0;
  companies: number = 0;
  customerSatisfaction: number = 0;

  finalYearsExperience: number = 14;
  finalCompanies: number = 300;
  finalCustomerSatisfaction: number = 98;

  @ViewChild('trabajarSection', { static: true }) trabajarSection!: ElementRef;
  @ViewChild('sliderExito', { static: false }) sliderExito!: ElementRef;
  @ViewChild('video', { static: false }) videoElement!: ElementRef<HTMLVideoElement>; // Referencia al video

  activeButton: 'left' | 'right' = 'right';

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
      { threshold: 0.8 }
    );

    observer.observe(this.trabajarSection.nativeElement);
  }

  ngAfterViewInit() {
    // Configurar el video para reproducirse automáticamente
    const video = this.videoElement.nativeElement;
    video.muted = true; // Mutear el video para permitir autoplay en Chrome
    video.play().catch(error => {
      console.error("Error al reproducir el video automáticamente:", error);
    });
  }

  animateNumbers() {
    const duration = 5000;
    const yearsStepTime =
      duration / (this.finalYearsExperience - this.yearsExperience);
    const yearsInterval = setInterval(() => {
      if (this.yearsExperience < this.finalYearsExperience) {
        this.yearsExperience++;
      } else {
        clearInterval(yearsInterval);
      }
    }, yearsStepTime);

    const companiesStepTime =
      duration / ((this.finalCompanies - this.companies) / 5);
    const companiesInterval = setInterval(() => {
      if (this.companies < this.finalCompanies) {
        this.companies += 5;
      } else {
        clearInterval(companiesInterval);
      }
    }, companiesStepTime);

    const satisfactionStepTime =
      duration / (this.finalCustomerSatisfaction - this.customerSatisfaction);
    const satisfactionInterval = setInterval(() => {
      if (this.customerSatisfaction < this.finalCustomerSatisfaction) {
        this.customerSatisfaction++;
      } else {
        clearInterval(satisfactionInterval);
      }
    }, satisfactionStepTime);
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
