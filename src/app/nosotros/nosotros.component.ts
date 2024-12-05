import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import * as emailjs from '@emailjs/browser'; // Asegúrate de usar este paquete

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent {
  showSuccessModal = false;

  onFormularioEnviado(success: boolean) {
    if (success && !this.showSuccessModal) {
      this.showSuccessModal = true;
    }
  }

  closeModalForm() {
    this.showSuccessModal = false;
  }

  contactForm: FormGroup;

  services = [
    'HR Nóminas',
    'HR Gestión del tiempo',
    'HR Gestión del talento',
    'HR Planificación',
    'Gestión Inteligente de espacios de trabajo',
    'HR Portal del empleado',
    'HR Presupuestos y costo de personal',
    'Gestión de relaciones laborales',
    'HR Viáticos',
  ];
  emailForm: FormGroup;
  isModalOpen = false;
  responseMessage: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.contactForm = this.fb.group({
      contactName: ['', Validators.required],
      companyName: ['', Validators.required],
      companyRuc: ['', Validators.required],
      collaboratorsNum: ['', Validators.required],
      country: ['Perú', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      services: this.buildServices(),
      comments: [''],
    });
  }

  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }

  exitSubscriber = false;
  closeModalSubs() {
    this.exitSubscriber = false;
  }

  // Public Key de EmailJS
  emailjsUserId = 'YgXO620_EAIQ1Kxmt'; // Usa tu Public Key aquí

  onSubmit() {
    if (this.emailForm.valid) {
      const email = this.emailForm.value.email;
  
      emailjs
        .send(
          'service_kke9j8f', // Service ID
          'template_lbj6ays', // Template ID
          {
            email: email, // Solo pasa el campo email
            formType: 'Nuevo correo de suscripción', // Indica el tipo de formulario
          },
          this.emailjsUserId // Public Key
        )
        .then(
          (response) => {
            console.log('Correo enviado con éxito:', response);
            this.responseMessage = '¡Te has suscrito exitosamente!';
            this.emailForm.reset();
            this.exitSubscriber = true;
          },
          (error) => {
            console.error('Error al enviar el correo:', error);
            this.responseMessage =
              'Hubo un error al intentar suscribirse. Intenta de nuevo más tarde.';
          }
        );
    } else {
      this.responseMessage = 'Por favor, ingresa un correo electrónico válido.';
    }
  }
  
  
  

  buildServices(): FormArray {
    const arr = this.services.map(() => this.fb.control(false));
    return this.fb.array(arr);
  }

  get servicesArray(): FormArray {
    return this.contactForm.get('services') as FormArray;
  }

  onSubmitContact() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post<{ message: string }>(
        'http://localhost:3000/new-contact/submit',
        JSON.stringify(this.contactForm.value),
        { headers }
      )
      .subscribe(
        (response) => {
          alert(response.message);
        },
        (error) => {
          console.error('Detalles del error:', error);
          alert(
            'Hubo un error al enviar el formulario. Intenta de nuevo más tarde.'
          );
        }
      );
  }
}
