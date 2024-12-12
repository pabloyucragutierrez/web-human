import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  showSuccessModal = false;

  onFormularioEnviado(success: boolean) {
    if (success && !this.showSuccessModal) {
      this.showSuccessModal = true;
    }
  }

  closeModal() {
    this.showSuccessModal = false;
  }

  // contactForm: FormGroup;

  // services = [
  //   'HR Nóminas',
  //   'HR Gestión del tiempo',
  //   'HR Gestión del talento',
  //   'HR Planificación',
  //   'Gestión Inteligente de espacios de trabajo',
  //   'HR Portal del empleado',
  //   'HR Presupuestos y costo de personal',
  //   'Gestión de relaciones laborales',
  //   'HR Viáticos'
  // ];

  yearsExperience: number = 0;
  companies: number = 0;
  customerSatisfaction: number = 0;

  finalYearsExperience: number = 14;
  finalCompanies: number = 300;
  finalCustomerSatisfaction: number = 98;

  @ViewChild('trabajarSection', { static: true }) trabajarSection!: ElementRef;
  @ViewChild('sliderExito', { static: false }) sliderExito!: ElementRef;
  @ViewChild('video', { static: false })
  videoElement!: ElementRef<HTMLVideoElement>;

  activeButton: 'left' | 'right' = 'right';
  hasAnimated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.animateNumbers();
              this.hasAnimated = true;
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(this.trabajarSection.nativeElement);
    } else {
      this.animateNumbers();
      this.hasAnimated = true;
    }
  }

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    video.muted = true;
    video.play().catch((error) => {
      console.error('Error al reproducir el video automáticamente:', error);
    });
  }

  

  animateNumbers() {
    const duration = 5000;
    const yearsInterval = duration / this.finalYearsExperience;
    const companiesInterval = duration / (this.finalCompanies / 5);
    const satisfactionInterval = duration / this.finalCustomerSatisfaction;

    const yearsTimer = setInterval(() => {
      if (this.yearsExperience < this.finalYearsExperience) {
        this.yearsExperience++;
      } else {
        clearInterval(yearsTimer);
      }
    }, yearsInterval);

    const companiesTimer = setInterval(() => {
      if (this.companies < this.finalCompanies) {
        this.companies += 5;
      } else {
        clearInterval(companiesTimer);
      }
    }, companiesInterval);

    const satisfactionTimer = setInterval(() => {
      if (this.customerSatisfaction < this.finalCustomerSatisfaction) {
        this.customerSatisfaction++;
      } else {
        clearInterval(satisfactionTimer);
      }
    }, satisfactionInterval);
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
