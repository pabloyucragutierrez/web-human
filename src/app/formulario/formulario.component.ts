import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from '@emailjs/browser'; // Paquete correcto para EmailJS

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() formularioEnviado = new EventEmitter<boolean>(); 
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

  emailjsUserId = 'YgXO620_EAIQ1Kxmt';
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      contactName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')],
      ],
      companyName: ['', Validators.required],
      companyRuc: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{11}$')],
      ],
      collaboratorsNum: ['', Validators.required],
      country: ['Perú', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
      ],
      services: this.fb.array([], Validators.required),
      comments: [''],
    });

    this.setServicesControls();
  }

  ngOnInit() {
    this.servicesArray.valueChanges.subscribe(() => {
      if (!this.atLeastOneSelected()) {
        this.servicesArray.setErrors({ minSelected: true });
      } else {
        this.servicesArray.setErrors(null); 
      }
    });
  }

  get servicesArray(): FormArray {
    return this.contactForm.get('services') as FormArray;
  }

  setServicesControls() {
    this.services.forEach(() => {
      this.servicesArray.push(this.fb.control(false));
    });
  }

  atLeastOneSelected(): boolean {
    return this.servicesArray.controls.some((control) => control.value);
  }

  onSubmitContact() {
    if (!this.atLeastOneSelected()) {
      this.servicesArray.setErrors({ minSelected: true });
    } else {
      this.servicesArray.setErrors(null);
    }

    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      return;
    }

    const selectedServices = this.contactForm.value.services
      .map((checked: boolean, index: number) =>
        checked ? this.services[index] : null
      )
      .filter((service: string | null) => service !== null);

    const formData = {
      contactName: this.contactForm.value.contactName,
      companyName: this.contactForm.value.companyName,
      companyRuc: this.contactForm.value.companyRuc,
      collaboratorsNum: this.contactForm.value.collaboratorsNum,
      country: this.contactForm.value.country,
      email: this.contactForm.value.email,
      services: selectedServices.join(', '),
      comments: this.contactForm.value.comments,
    };

    emailjs
      .send(
        'service_xd8taeq', 
        'template_ye4lyz6', 
        {
          from_name: formData.contactName,
          company_name: formData.companyName,
          company_ruc: formData.companyRuc,
          collaborators_num: formData.collaboratorsNum,
          country: formData.country,
          email: formData.email,
          services: formData.services,
          comments: formData.comments,
        },
        this.emailjsUserId 
      )
      .then(
        (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.formularioEnviado.emit(true);
          this.contactForm.reset(); 
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
          alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
        }
      );
  }
}
