import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as emailjs from '@emailjs/browser'; // Usamos el paquete correcto

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  showSuccessModal = false;
  @ViewChild('sliderBeneficio', { static: false }) sliderBeneficio!: ElementRef;
  contactForm: FormGroup;
  responseMessage: string = '';
  emailjsUserId: string = 'YgXO620_EAIQ1Kxmt'; // Tu Public Key
  constructor(private fb: FormBuilder, private http: HttpClient) {
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
 
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = {
        contactName: this.contactForm.value.contactName || '',
        position: this.contactForm.value.position || '',
        companyName: this.contactForm.value.companyName || '',
        companyRuc: String(this.contactForm.value.companyRuc || ''),
        country: this.contactForm.value.country || '',
        city: this.contactForm.value.city || '',
        email: this.contactForm.value.email || '',
        phone: String(this.contactForm.value.phone || ''),
        website: this.contactForm.value.website || '',
        sector: this.contactForm.value.sector || '',
        comments: this.contactForm.value.comments || '',
        formType: 'Nuevo formulario de Partners', // Indica el tipo de formulario
      };
  
      emailjs
        .send(
          'service_kke9j8f', // Service ID
          'template_lbj6ays', // Template ID
          formData,
          this.emailjsUserId // Public Key
        )
        .then(
          (response) => {
            console.log('Formulario enviado con éxito:', response);
            this.responseMessage = '¡Formulario enviado exitosamente!';
            this.contactForm.reset();
            this.showSuccessModal = true; // Mostrar modal de éxito
          },
          (error) => {
            console.error('Error al enviar el formulario:', error);
            this.responseMessage =
              'Hubo un error al enviar el formulario. Intenta más tarde.';
          }
        );
    } else {
      this.responseMessage = 'Por favor, completa todos los campos obligatorios.';
    }
  }
  
  

  closeExito() {
    this.showSuccessModal = false;
  }

  leftBeneficio() {
    const containerExito = this.sliderBeneficio.nativeElement;
    containerExito.scrollLeft -= containerExito.offsetWidth;
  }

  rightBeneficio() {
    const containerExito = this.sliderBeneficio.nativeElement;
    containerExito.scrollLeft += containerExito.offsetWidth;
  }
}
