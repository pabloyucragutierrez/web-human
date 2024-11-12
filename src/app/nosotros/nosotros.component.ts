import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

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

  onSubmit() {
    if (this.emailForm.valid) {
      const email = this.emailForm.value.email;

      this.http
        .post('http://localhost:3000/subscribers/subscribe', { email })
        .subscribe(
          (response: any) => {
            this.responseMessage = response.message || 'Suscripción exitosa';
            this.emailForm.reset();
          },
          (error) => {
            this.responseMessage =
              'Hubo un error al intentar suscribirse. Intenta de nuevo más tarde.';
            console.log('Error');
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
