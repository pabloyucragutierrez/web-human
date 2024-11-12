import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  showSuccessModal = false;
  @ViewChild('sliderBeneficio', { static: false }) sliderBeneficio!: ElementRef;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Inicializando el formulario reactivo sin validadores
    this.contactForm = this.fb.group({
      contactName: [''],
      position: [''],
      companyName: [''],
      companyRuc: [''],
      country: ['Peru'],
      city: [''],
      email: [''],
      phone: [''],
      website: [''],
      sector: [''],
      comments: [''],
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    // Obtenemos los datos del formulario sin necesidad de validaciones
    // const formData = this.contactForm.value;
    const formData = {
      ...this.contactForm.value,
      companyRuc: String(this.contactForm.value.companyRuc),
      phone: String(this.contactForm.value.phone),
    };
    // Realizamos la solicitud POST al backend
    this.http
      .post('http://localhost:3000/contact-partner/submit', formData)
      .subscribe(
        (response) => {
          this.showSuccessModal = true;
          this.contactForm.reset(); // Limpiamos el formulario
        },
        (error: any) => {
          // En caso de error
          console.error('Error al enviar el formulario:', error);
          alert(
            `Error: ${
              error.error.message ||
              'Hubo un error al enviar el formulario. Intenta más tarde.'
            }`
          );
        }
      );
  }

  closeExito() {
    this.showSuccessModal = false;
  }

  // Métodos para manejar el slider de beneficios
  leftBeneficio() {
    const containerExito = this.sliderBeneficio.nativeElement;
    containerExito.scrollLeft -= containerExito.offsetWidth;
  }

  rightBeneficio() {
    const containerExito = this.sliderBeneficio.nativeElement;
    containerExito.scrollLeft += containerExito.offsetWidth;
  }
}
