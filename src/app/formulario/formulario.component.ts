// formulario.component.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() formularioEnviado = new EventEmitter<boolean>(); // Emisor de eventos
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

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {
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

  buildServices(): FormArray {
    const arr = this.services.map(() => this.fb.control(false));
    return this.fb.array(arr);
  }

  get servicesArray(): FormArray {
    return this.contactForm.get('services') as FormArray;
  }

  onSubmitContact() {
    const selectedServices = this.contactForm.value.services
      .map((checked: boolean, index: number) =>
        checked ? this.services[index] : null
      )
      .filter((service: string | null) => service !== null);

    const formData = {
      ...this.contactForm.value,
      services: selectedServices,
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post<{ message: string }>(
        'http://localhost:3000/new-contact/submit',
        JSON.stringify(formData),
        { headers }
      )
      .subscribe(
        (response) => {
          this.formularioEnviado.emit(true); // Emitimos el evento en caso de éxito
        },
        (error) => {
          console.error('Detalles del error:', error);
          alert('Hubo un error al enviar el formulario. Intenta de nuevo más tarde.');
        }
      );
  }
}
