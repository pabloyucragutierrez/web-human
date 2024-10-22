import { Component } from '@angular/core';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.css'],
})
export class HumanResourceComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  activeButtonIndex: number = 0;
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
      backgroundImage: 'url("/assets/human1_back.png")',
    },
    {
      title: 'Personalización flexible',
      description:
        'Adapta Human a las necesidades específicas de tu empresa con nuestras opciones de personalización. Personaliza flujos de trabajo, informes y módulos para que se alineen perfectamente con tus procesos, garantizando que la plataforma funcione como una extensión natural de tu equipo.',
      backgroundImage: 'url("/assets/human2_back.png")',
    },
    {
      title: 'Integraciones perfectas',
      description:
        'Conecta Human con tus aplicaciones favoritas para una experiencia sin interrupciones. Las integraciones fluidas con sistemas de contabilidad, gestión de proyectos y otras herramientas esenciales aseguran una transferencia de datos sin problemas, mejorando la eficiencia operativa y reduciendo errores.',
      backgroundImage: 'url("/assets/human3_back.png")',
    },
    {
      title: 'Mejora de la productividad',
      description:
        'Optimiza procesos y reduce  el tiempo dedicado a tareas administrativas, Human automatiza tareas rutinarias como la gestión de nóminas, el seguimiento del tiempo y la organización de documentos, liberando a tu equipo para que se concentre en actividades estratégicas y de alto valor.',
      backgroundImage: 'url("/assets/human4_back.png")',
    },
    {
      title: 'Potenciación del talento',
      description:
        'Gestiona el ciclo de vida del empleado, desde el reclutamiento hasta la evaluación del desempeño y la planificación de la carrera. Human ofrece herramientas robustas para identificar, desarrollar y retener talento, ayudando a construir un equipo fuerte y motivado.',
      backgroundImage: 'url("/assets/human5_back.png")',
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
        'Sí, Human está diseñado para integrarse de manera flexible con otros productos de nuestra suite y con herramientas de terceros. Esto permite que la plataforma se adapte a sus necesidades específicas, ofreciendo un entorno interdepartamental y multifuncional que facilita la conectividad y la automatización de todos sus procesos.',
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
        'Human ofrece un entorno integrado que conecta y automatiza todos los datos y procesos de tu empresa. Esto permite una visión de conjunto que facilita la toma de decisiones informadas, mejora la eficiencia operativa y reduce los riesgos. Con nuestra plataforma, tendrás toda la información que necesitas en un solo lugar, accesible en tiempo real desde cualquier dispositivo.',
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
    this.preguntas[index].open = !this.preguntas[index].open; // Alterna el estado de la pregunta
  }
  setActiveButton(index: number): void {
    this.activeButtonIndex = index;
  }

  setActiveOption(index: number): void {
    this.activeOptionIndex = index;
  }
}
