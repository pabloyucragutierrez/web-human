import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as emailjs from '@emailjs/browser';
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
  emailjsUserId: string = 'YgXO620_EAIQ1Kxmt';
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      contactName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      position: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      companyRuc: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      country: ['Peru'],
      city: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      website: ['', [Validators.required]],
      sector: ['', [Validators.required]],
      comments: [''],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

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
      formType: 'Nuevo formulario de Partners',
    };

    emailjs
      .send('service_kke9j8f', 'template_lbj6ays', formData, this.emailjsUserId)
      .then(
        (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.responseMessage = '¡Formulario enviado exitosamente!';
          this.contactForm.reset();
          this.showSuccessModal = true;
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
          this.responseMessage =
            'Hubo un error al enviar el formulario. Intenta más tarde.';
        }
      );
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
