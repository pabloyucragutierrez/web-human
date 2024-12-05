import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from '@emailjs/browser'; // Usando el paquete correcto

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.css'],
})
export class HumanResourceComponent implements OnInit {
  showSuccessModal = false;
  showSuccessModal2 = false;

  contactForm!: FormGroup;
  contactFormDataForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  isModalOpen = false;
  responseMessage: string = '';
  emailjsUserId: string = 'YgXO620_EAIQ1Kxmt'; // Reemplaza con tu Public Key

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contactName: [''],
      companyName: [''],
      email: [''],
      phone: [''],
    });

    this.contactFormDataForm = this.fb.group({
      contactName: [''],
      position: [''],
      companyName: [''],
      email: [''],
      phone: [''],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Obtenemos todos los valores del formulario
      const formData = {
        contactName: this.contactForm.value.contactName, // Nombre de contacto
        companyName: this.contactForm.value.companyName, // Nombre de la empresa
        email: this.contactForm.value.email, // Correo electrónico
        phone: this.contactForm.value.phone, // Teléfono
        formType: 'Nuevo formulario de Human Resource', // Tipo de formulario
      };

      // Usamos EmailJS para enviar el formulario con todos los datos
      emailjs
        .send(
          'service_kke9j8f', // Service ID
          'template_lbj6ays', // Template ID
          formData, // Pasamos todos los datos del formulario
          this.emailjsUserId // Public Key
        )
        .then(
          (response) => {
            console.log('Formulario enviado con éxito:', response);
            this.showSuccessModal = true; // Mostrar modal de éxito
          },
          (error) => {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un error al enviar el formulario. Intenta nuevamente.');
          }
        );
    } else {
      alert('Por favor, ingresa los campos correctamente.');
    }
  }

  closeExito() {
    this.showSuccessModal = false;
  }

  closeExito2() {
    this.showSuccessModal2 = false;
  }

  submitForm(): void {
    if (this.contactFormDataForm.valid) {
      const formData = this.contactFormDataForm.value;

      // Usar EmailJS para enviar el formulario
      emailjs
        .send(
          'service_kke9j8f', // Service ID
          'template_lbj6ays', // Template ID
          {
            email: formData.email,
            contactName: formData.contactName,
            position: formData.position,
            companyName: formData.companyName,
            phone: formData.phone,
            formType: 'Nuevo formulario de Human Resource', // Personaliza el tipo de formulario
          },
          this.emailjsUserId // Public Key
        )
        .then(
          (response) => {
            console.log('Formulario enviado con éxito:', response);
            this.showSuccessModal2 = true;
          },
          (error) => {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un error al enviar el formulario. Intenta nuevamente.');
          }
        );
    } else {
      alert('Por favor, ingresa un correo electrónico válido.');
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  activeButtonIndexDesktop: number = 0;
  activeButtonIndexMobile: number = -1;
  activeOptionIndex: number = 0;

  articles = [
    [
      {
        title: 'Gestión de empleados',
        description:
          'Directorio, calendario, documentos: todas las operaciones de su personal en un solo lugar.',
        img: 'assets/gestion1.png',
      },
      {
        title: 'Inducción',
        description:
          'Incorporación organizada y automatizada para preparar a los nuevos empleados para el éxito.',
        img: 'assets/gestion2.png',
      },
      {
        title: 'Seguimiento del tiempo libre',
        description:
          'PTO de autoservicio que siempre funciona según lo planificado.',
        img: 'assets/gestion3.png',
      },
      {
        title: 'Gestión de Activos',
        description:
          'Realice un seguimiento de equipos, suscripciones y membresías con facilidad.',
        img: 'assets/gestion4.png',
      },
    ],
    [
      {
        title: 'Análisis de personas',
        description:
          'Información general para tomar decisiones mejor informadas.',
        img: 'assets/analisis1.png',
      },
      {
        title: 'Rendimiento de los empleados',
        description:
          'Ciclos de revisión para fomentar la retroalimentación y una mejor productividad.',
        img: 'assets/analisis2.png',
      },
    ],
    [
      {
        title: 'Integraciones',
        description: 'Tus aplicaciones favoritas, tu HRIS favorito conectados.',
        img: 'assets/integracion1.png',
      },
      {
        title: 'Personalizaciones',
        description:
          'Opciones de marca blanda para hacer que su HRIS sea realmente suyo.',
        img: 'assets/integracion2.png',
      },
    ],
    [
      {
        title: 'Seguimiento de solicitantes',
        description:
          'Herramienta de reclutamiento para atraer, evaluar y contratar a mejores talentos.',
        img: 'assets/reclutamiento1.png',
      },
    ],
  ];

  optionContent = [
    {
      title: 'Centralización de operaciones',
      description:
        'Human centraliza todas las operaciones de recursos humanos en una plataforma única y eficiente. Simplifica la administración diaria al tener toda la información de empleados, nóminas, tiempo y asistencia en un solo lugar, permitiendo una gestión más ágil y ordenada.',
      backgroundImage: 'url("/assets/human1_back.jpg")',
    },
    {
      title: 'Personalización flexible',
      description:
        'Adapta Human a las necesidades específicas de tu empresa con nuestras opciones de personalización. Personaliza flujos de trabajo, informes y módulos para que se alineen perfectamente con tus procesos, garantizando que la plataforma funcione como una extensión natural de tu equipo.',
      backgroundImage: 'url("/assets/human2_back.jpg")',
    },
    {
      title: 'Integraciones perfectas',
      description:
        'Conecta Human con tus aplicaciones favoritas para una experiencia sin interrupciones. Las integraciones fluidas con sistemas de contabilidad, gestión de proyectos y otras herramientas esenciales aseguran una transferencia de datos sin problemas, mejorando la eficiencia operativa y reduciendo errores.',
      backgroundImage: 'url("/assets/human3_back.jpg")',
    },
    {
      title: 'Mejora de la productividad',
      description:
        'Optimiza procesos y reduce  el tiempo dedicado a tareas administrativas. Human automatiza tareas rutinarias como la gestión de nóminas, el seguimiento del tiempo y la organización de documentos, liberando a tu equipo para que se concentre en actividades estratégicas y de alto valor.',
      backgroundImage: 'url("/assets/human4_back.jpg")',
    },
    {
      title: 'Potenciación del talento',
      description:
        'Gestiona el ciclo de vida del empleado, desde el reclutamiento hasta la evaluación del desempeño y la planificación de la carrera. Human ofrece herramientas robustas para identificar, desarrollar y retener talento, ayudando a construir un equipo fuerte y motivado.',
      backgroundImage: 'url("/assets/human5_back.jpg")',
    },
  ];

  preguntas = [
    {
      text: '¿Cómo garantiza Human la seguridad de la información en su plataforma?',
      respuesta:
        ' Human asegura la máxima protección de la información a través de un modelo de Cloud Computing Multitenant, que no solo facilita el acceso desde un único punto, sino que también mantiene todos los datos conectados y automatizados bajo estrictos protocolos de seguridad. Además, realizamos respaldos diarios y contamos con conectividad de alta velocidad, lo que garantiza una disponibilidad del 99.95%.',
      open: false,
    },
    {
      text: '¿Es Human compatible con otras herramientas y sistemas de gestión que ya utilizamos?',
      respuesta:
        'Sí, Human está diseñado para integrarse de manera flexible con otros productos de nuestra suite y con herramientas de terceros. Esto permite que la plataforma se adapte a sus necesidades específicas, ofreciendo un entorno interdepartamental y multifuncional, lo que facilita la conectividad y la automatización de todos sus procesos.',
      open: false,
    },
    {
      text: '¿Cómo asegura Human que su plataforma esté siempre actualizada con las últimas tecnologías?',
      respuesta:
        'En Human, mantenemos un enfoque en el mantenimiento evolutivo, lo que significa que nuestra plataforma se actualiza constantemente para estar al día con los avances del mercado y las expectativas de nuestros clientes. Nuestro equipo multidisciplinario trabaja de manera proactiva para implementar mejoras continuas, sin necesidad de intervención por parte del usuario.',
      open: false,
    },
    {
      text: '¿Cómo facilita Human la toma de decisiones en mi empresa?',
      respuesta:
        'Human ofrece un entorno integrado que conecta y automatiza todos los datos y procesos de tu empresa. Esto permite una visión de conjunto que facilita la toma de decisiones informadas, mejorando la eficiencia operativa y reduciendo los riesgos. Con nuestra plataforma, tendrás toda la información que necesitas en un solo lugar, accesible en tiempo real desde cualquier dispositivo.',
      open: false,
    },
    {
      text: '¿Qué tipo de soporte técnico ofrece Human para asegurar una implementación exitosa?',
      respuesta:
        'Ofrecemos un servicio de soporte técnico integral, adaptado a las necesidades específicas de cada empresa. Contamos con varios canales de comunicación, incluyendo una línea directa de WhatsApp, para resolver cualquier duda o requerimiento de manera rápida y efectiva. Además, nuestro equipo especializado en consultoría y gestión del cambio estará a su disposición durante todo el proceso de implementación y más allá, garantizando un acompañamiento continuo.',
      open: false,
    },
  ];

  togglePregunta(index: number): void {
    this.preguntas[index].open = !this.preguntas[index].open;
  }

  setActiveButtonDesktop(index: number): void {
    this.activeButtonIndexDesktop = index;
  }

  toggleButtonMobile(index: number): void {
    this.activeButtonIndexMobile =
      this.activeButtonIndexMobile === index ? -1 : index;
  }

  setActiveOption(index: number): void {
    this.activeOptionIndex = index;
  }
}
