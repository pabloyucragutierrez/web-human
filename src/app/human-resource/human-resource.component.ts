import { Component } from '@angular/core';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.css'],
})
export class HumanResourceComponent {
  activeButtonIndex: number = 0;
  activeOptionIndex: number = 0;

  articles = [
    [
      {
        title: 'Gestión de empleados',
        description:
          'Directorio, calendario, documentos: todas las operaciones de su personal en un solo lugar.',
        img: 'assets/img1_human.png',
      },
      {
        title: 'Inducción',
        description:
          'Incorporación organizada y automatizada para preparar a los nuevos empleados para el éxito.',
        img: 'https://s3-alpha-sig.figma.com/img/8d1f/d2d4/9189c2261b1d95818d918a906269fa97?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q5z1QrBP9RxE99af8imsnG1fqA4~T49m8RbJjryF6Zvu1toCfk42nleSz5Um3dBCdb7YGms3Qn708cy8DjtqmH7hAZzeo1M0ftx1AzfRb34IW~AIn2lPCCmH2cI4ulrWPhHQeirb0rcINBpfUzK-Qsb7D9gGtj-yPVfQgiEnHc2zkZU1wI1N4wr-QSdTUeBxpLFznLCprooH3zMp9ZJE1HXo5G-YiBs71v3amkKcG7SsORpcctY~8qC4Hn5o~6DRsgPVHIffYWGNgYD9oxGM7i8Zk4gIl2Qo6JFYjpBKsI1zjx1WHxXUdeJxOksjcZX4YEbp0ddX9875o25vJbJr5Q__',
      },
      {
        title: 'Seguimiento del tiempo libre',
        description:
          'PTO de autoservicio que siempre funciona según lo planificado.',
        img: 'https://s3-alpha-sig.figma.com/img/cddd/e5ee/2cd3fa85ea0980a6e29b41bfce93fb14?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J448xybS20NI0D9LgDMaaTsY7w6wvMwUb8lbkTff0wk95Xft6xlCenQvDQUZmN~~ZkKkiIYHI7j4hn6x7aSlPTgzOBkiD9MuNC6D4caj~tdBXGmhIE~xHrCC-4KvgYUGyaMAijxNoZnbeStIFmoNmhrK8m7sG-Gz7rdfzm~haM7JqZttbZeBE3cttu-rAZ0jia8azveLXWx7oWRJhfdcy~2aKuyZi6raHl7t05Hk-JhnmwT62MerE0mqv9v~REBIlbtLvruqJr351cRaYCa9~H3fp8HClWPN4kECqqCA3prGV1YZpSdCVqk71iUOB2C-am49PuigEQonjpbwNgLYXg__',
      },
      {
        title: 'Gestión de Activos',
        description:
          'Realice un seguimiento de equipos, suscripciones y membresías con facilidad.',
        img: 'https://s3-alpha-sig.figma.com/img/32ab/7997/0be108c297b338e4376f74b46bcca2b1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FS58W2COARm84O2GKKMq4MgCKWSf3li7Nl4T9Z~2f5lgJ5XQKZQ0C6IUq5rrFzWdtebM2JKTkzh10doV7t2zFOvK-zHtTCAJndKnL2YhKxy2hOOrIPGPnI1W18jaA-MsLyv00Kompbry48eNR~BcxXi3lpyXq2LlPfQVA14s6NwRIxY5DftrwU5PmWOr3d5A3IN~tfvbOqerXmc0YPogsRJ~iK8EvGRo9HKFlghdMrjoIB1w6fA~ZJQ9Ik0mFbRtszBMuVhdMdIbVO~RoUgM8loy5x5UgtF-IGuoAZrK8-oPyoOsVXyQZsLATDTyD~3hNbgnI6a-PL-wb7dP-kSEcw__',
      },
    ],
    [
      {
        title: 'Análisis de personas',
        description:
          'Información general para tomar decisiones mejor informadas.',
        img: 'assets/img2_human.png',
      },
      {
        title: 'Rendimiento de los empleados',
        description:
          'Ciclos de revisión para fomentar la retroalimentación y una mejor productividad.',
        img: 'assets/img2_human.png',
      },
    ],
    [
      {
        title: 'Integraciones',
        description:
          'Conecte todos sus sistemas de RR.HH. para una administración centralizada.',
        img: 'assets/img3_human.png',
      },
      {
        title: 'Personalizaciones',
        description:
          'Adapte los flujos de trabajo según las necesidades únicas de su empresa.',
        img: 'assets/img3_human.png',
      },
    ],
    [
      {
        title: 'Seguimiento de solicitantes',
        description: 'Automatice su proceso de reclutamiento y ahorre tiempo.',
        img: 'assets/img4_human.png',
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
        'Human permite personalizar completamente los flujos de trabajo para adaptarse a las necesidades específicas de cada empresa, facilitando la administración eficiente y personalizada de los recursos humanos.',
      backgroundImage: 'url("/assets/human2_back.png")',
    },
    {
      title: 'Integraciones perfectas',
      description:
        'Human se integra perfectamente con las herramientas de software existentes, ofreciendo una conectividad completa entre sus sistemas y una administración de recursos humanos más fluida.',
      backgroundImage: 'url("/assets/human3_back.png")',
    },
    {
      title: 'Mejora de la productividad',
      description:
        'Human ayuda a mejorar la productividad del equipo mediante la automatización de tareas administrativas, lo que permite que el equipo se concentre en actividades más estratégicas.',
      backgroundImage: 'url("/assets/human4_back.png")',
    },
    {
      title: 'Potenciación del talento',
      description:
        'Human facilita el desarrollo y la retención del talento al ofrecer herramientas de seguimiento y evaluación que impulsan el crecimiento profesional de los empleados.',
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
