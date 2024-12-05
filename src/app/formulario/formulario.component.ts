import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from '@emailjs/browser'; // Paquete correcto para EmailJS

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() formularioEnviado = new EventEmitter<boolean>(); // Evento para notificar al componente principal
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

  // Public Key de EmailJS
  emailjsUserId = 'YgXO620_EAIQ1Kxmt'; // Asegúrate de usar tu Public Key

  constructor(private fb: FormBuilder) {
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
      contactName: this.contactForm.value.contactName,
      companyName: this.contactForm.value.companyName, // Asegúrate de enviar correctamente el nombre de la empresa
      companyRuc: this.contactForm.value.companyRuc,
      collaboratorsNum: this.contactForm.value.collaboratorsNum,
      country: this.contactForm.value.country,
      email: this.contactForm.value.email,
      services: selectedServices.join(', '), // Convertimos el array de servicios a string
      comments: this.contactForm.value.comments,
    };

    // Usando EmailJS para enviar el formulario
    emailjs
      .send(
        'service_xd8taeq', // Reemplaza con tu Service ID
        'template_ye4lyz6', // Reemplaza con tu Template ID
        {
          from_name: formData.contactName,
          company_name: formData.companyName, // Asegurando que se envíe el nombre de la empresa
          company_ruc: formData.companyRuc,
          collaborators_num: formData.collaboratorsNum,
          country: formData.country,
          email: formData.email,
          services: formData.services,
          comments: formData.comments,
        },
        this.emailjsUserId // Public Key
      )
      .then(
        (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.formularioEnviado.emit(true); // Emitimos el evento de éxito
          this.contactForm.reset(); // Limpiamos el formulario
        },
        (error) => {
          console.error('Error al enviar el formulario:', error);
          alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
        }
      );
  }
}
