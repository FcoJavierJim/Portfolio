
//NAVEGACION

//BOTON MENU MOVIL
const botonMenu = document.querySelector(".boton-menu");
const enlacesNavegacion = document.querySelector(".enlaces-navegacion");
const enlaces = document.querySelectorAll(".enlaces-navegacion a");

botonMenu.addEventListener("click", () => {
    enlacesNavegacion.classList.toggle("activo");
});

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        enlacesNavegacion.classList.remove("activo");
    });
});


// =========================
// IDIOMAS
// =========================

const traducciones = {
    es: {
        //NAVEGACION
        "nav.inicio": "Inicio",
        "nav.sobreMi": "Sobre mí",
        "nav.tecnologias": "Tecnologías",
        "nav.proyectos": "Proyectos",
        "nav.experiencia": "Experiencia",
        "nav.contacto": "Contacto",
        //Inicio
        "inicio.saludo": "Hola, soy",
        "inicio.titulo": "Técnico Superior en Desarrollo de Aplicaciones Web",
        "inicio.descripcion": "Desarrollador web junior con experiencia profesional en soporte técnico, SQL y gestión de aplicaciones, interesado en nuevas oportunidades relacionadas con el desarrollo web.",
        "inicio.proyectos": "Ver mis proyectos",
        "inicio.contacto": "Contactar conmigo",
    
        // SOBRE MÍ
       "sobreMi.titulo": "Sobre mí",
"sobreMi.subtitulo": "Técnico Superior en Desarrollo de Aplicaciones Web",

"sobreMi.parrafo1": "Soy Técnico Superior en Desarrollo de Aplicaciones Web y cuento con más de 3 años de experiencia profesional en el sector tecnológico.",

"sobreMi.parrafo2": "Actualmente trabajo como técnico de soporte, donde combino la atención y formación de clientes con la resolución de incidencias, el trabajo con bases de datos, la implantación de aplicaciones y la configuración de informes mediante SQL y Crystal Reports.",

"sobreMi.parrafo3": "Mi objetivo profesional es dar el siguiente paso hacia el desarrollo de software, especialmente en posiciones Junior Web Developer o Junior Full Stack, donde pueda aplicar mis conocimientos técnicos, mi experiencia en entornos reales y seguir creciendo como desarrollador.",

"sobreMi.soporte.titulo": "Soporte técnico",

"sobreMi.soporte.texto": "Atención y formación de clientes, resolución de incidencias, análisis de problemas y coordinación con el departamento de desarrollo cuando se requiere intervención sobre el código.",

"sobreMi.sql.titulo": "Bases de datos",

"sobreMi.sql.texto": "Trabajo habitual con SQL y SQL Server para realizar consultas, modificaciones, actualizaciones, inserciones y gestión de datos.",

"sobreMi.implantacion.titulo": "Implantación y formación",

"sobreMi.implantacion.texto": "Implantación de nuevos clientes, preparación de entornos, creación y configuración de bases de datos, migración de información y formación de usuarios y nuevos empleados.",

"sobreMi.consultoria.titulo": "Consultoría y coordinación",

"sobreMi.consultoria.texto": "Análisis de las necesidades de los clientes, búsqueda de soluciones junto al equipo y coordinación y distribución de tareas entre los departamentos de soporte y desarrollo.",

//Tecnologias
"tecnologias.titulo": "Tecnologías",
"tecnologias.web": "Desarrollo web",
"tecnologias.bd": "Bases de datos",
"tecnologias.herramientas": "Herramientas",

//Proyectos
"proyectos.titulo": "Proyectos",
"proyectos.froskeys.tipo": "Trabajo de Fin de Grado",
"proyectos.froskeys.subtitulo": "Tienda digital de videojuegos",
"proyectos.froskeys.descripcion": "Aplicación web de comercio electrónico inspirada en plataformas de distribución digital de videojuegos como Instant Gaming.",
"proyectos.froskeys.usuarios": "Los usuarios pueden registrarse, iniciar sesión y verificar su cuenta mediante correo electrónico, explorar el catálogo mediante categorías y filtros y realizar compras. Tras la compra, reciben por correo electrónico el código de descarga del videojuego.",
"proyectos.froskeys.admin": "La aplicación incluye un panel de administración desde el que se pueden gestionar los videojuegos, sus imágenes, información y categorías.",

//Experiencia
"experiencia.titulo": "Experiencia profesional",
"experiencia.puesto": "Técnico de Soporte",

"experiencia.descripcion": "Actualmente trabajo en el departamento de soporte técnico, proporcionando asistencia a clientes, resolviendo incidencias y colaborando con los equipos de desarrollo para mantener y mejorar las aplicaciones de la empresa.",

"experiencia.soporte.titulo": "Soporte y resolución de incidencias",
"experiencia.soporte.texto": "Atención a clientes, resolución de dudas sobre las aplicaciones y análisis de incidencias. Cuando una incidencia requiere cambios de programación, trabajo conjuntamente con el departamento de desarrollo.",

"experiencia.bd.titulo": "Bases de datos y reporting",
"experiencia.bd.texto": "Trabajo habitual con SQL Server para realizar consultas, modificaciones y gestión de datos. También desarrollo y configuro informes mediante Crystal Reports.",

"experiencia.implantacion.titulo": "Implantación de clientes",
"experiencia.implantacion.texto": "Preparación de nuevos entornos, creación de bases de datos, migración de información desde Excel y configuración inicial de las aplicaciones.",

"experiencia.formacion.titulo": "Formación y atención al cliente",
"experiencia.formacion.texto": "Formación a nuevos clientes y empleados sobre el uso de las aplicaciones, además de acompañamiento durante los procesos de implantación.",

"experiencia.consultoria.titulo": "Consultoría y coordinación",
"experiencia.consultoria.texto": "Análisis de las necesidades de los clientes y búsqueda de soluciones junto al equipo. También participo en la distribución y coordinación de tareas entre los equipos de soporte y desarrollo.",

//CONTACTO
"contacto.titulo": "Contacto",
"contacto.hablamos": "¿Hablamos?",
"contacto.descripcion": "Estoy abierto a nuevas oportunidades relacionadas con el desarrollo web, especialmente posiciones Junior Web Developer o Junior Full Stack, tanto en España como en Irlanda.",
"contacto.linkedin": "Mi perfil de LinkedIn",
"contacto.cv.titulo": "Currículum",
"contacto.cv.descripcion": "Consulta o descarga mi currículum en el idioma que prefieras.",
"contacto.cv.es": "CV — Español",
"contacto.cv.en": "CV — English",
},

    en: {
        //NAVEGACION-EN
        "nav.inicio": "Home",
        "nav.sobreMi": "About me",
        "nav.tecnologias": "Technologies",
        "nav.proyectos": "Projects",
        "nav.experiencia": "Experience",
        "nav.contacto": "Contact",
        "inicio.saludo": "Hello, I'm",
        //INICIO-EN
        "inicio.titulo": "Higher Technician in Web Application Development",
        "inicio.descripcion": "Junior web developer with professional experience in technical support, SQL and application management, looking for new opportunities in web development.",
        "inicio.proyectos": "View my projects",
        "inicio.contacto": "Contact me",

        // SOBRE MI - EN
        "sobreMi.titulo": "About me",
        "sobreMi.subtitulo": "Higher Technician in Web Application Development",

        "sobreMi.parrafo1": "I am a Higher Technician in Web Application Development with more than 3 years of professional experience in the technology sector.",

        "sobreMi.parrafo2": "I currently work as a Technical Support Specialist, combining customer support and training with incident resolution, database management, application deployment and report configuration using SQL and Crystal Reports.",

        "sobreMi.parrafo3": "My professional goal is to take the next step into software development, particularly in Junior Web Developer or Junior Full Stack positions, where I can apply my technical knowledge and experience in real-world environments while continuing to grow as a developer.",

        "sobreMi.soporte.titulo": "Technical support",

        "sobreMi.soporte.texto": "Customer support and training, incident resolution, problem analysis and coordination with the development department when code-level intervention is required.",
        "sobreMi.sql.titulo": "Databases",
        "sobreMi.sql.texto": "Regular use of SQL and SQL Server for queries, data modifications, updates, inserts and data management.",
        "sobreMi.implantacion.titulo": "Implementation and training",
        "sobreMi.implantacion.texto": "Onboarding new clients, preparing environments, creating and configuring databases, migrating data and training users and new employees.",
        "sobreMi.consultoria.titulo": "Consulting and coordination",
        "sobreMi.consultoria.texto": "Analysing client requirements, working with the team to find suitable solutions, and coordinating and distributing tasks between the support and development departments.",

        //tecnologias-EN
        "tecnologias.titulo": "Technologies",
        "tecnologias.web": "Web Development",
        "tecnologias.bd": "Databases",
        "tecnologias.herramientas": "Tools",

        //Proyectos-EN
        "proyectos.titulo": "Projects",
        "proyectos.froskeys.tipo": "Final Degree Project",
        "proyectos.froskeys.subtitulo": "Digital Video Game Store",
        "proyectos.froskeys.descripcion": "E-commerce web application inspired by digital video game distribution platforms such as Instant Gaming.",
        "proyectos.froskeys.usuarios": "Users can register, log in and verify their accounts via email, browse the catalogue using categories and filters, and purchase games. After completing a purchase, they receive the game's download code by email.",
        "proyectos.froskeys.admin": "The application includes an administration panel for managing video games, their images, information and categories.",
    
        //Experiencia - EN
        "experiencia.titulo": "Professional Experience",
        "experiencia.puesto": "Technical Support Specialist",

        "experiencia.descripcion": "I currently work in the technical support department, providing customer assistance, resolving incidents and collaborating with development teams to maintain and improve the company's applications.",

        "experiencia.soporte.titulo": "Technical Support and Incident Resolution",
        "experiencia.soporte.texto": "Customer support, application-related assistance and incident analysis. When an incident requires programming changes, I work closely with the development department.",

        "experiencia.bd.titulo": "Databases and Reporting",
        "experiencia.bd.texto": "Regular use of SQL Server for queries, data modifications and data management. I also develop and configure reports using Crystal Reports.",

        "experiencia.implantacion.titulo": "Client Implementation",
        "experiencia.implantacion.texto": "Preparation of new environments, database creation, data migration from Excel and initial application configuration.",

        "experiencia.formacion.titulo": "Training and Customer Support",
        "experiencia.formacion.texto": "Training new clients and employees on the use of the applications, as well as providing support throughout the implementation process.",

        "experiencia.consultoria.titulo": "Consulting and Coordination",
        "experiencia.consultoria.texto": "Analysing client requirements and working with the team to find suitable solutions. I also participate in task distribution and coordination between the support and development teams.",

        //CONTACTO - EN
        "contacto.titulo": "Contact",
        "contacto.hablamos": "Let's talk",
        "contacto.descripcion": "I am open to new opportunities in web development, particularly Junior Web Developer or Junior Full Stack positions, both in Spain and Ireland.",
        "contacto.linkedin": "My LinkedIn profile",
        "contacto.cv.titulo": "Resume",
        "contacto.cv.descripcion": "View or download my resume in your preferred language.",
        "contacto.cv.es": "CV — Spanish",
        "contacto.cv.en": "CV — English",
    }
};

function cambiarIdioma(idioma) {

    const elementos = document.querySelectorAll("[data-i18n]");

    elementos.forEach(elemento => {

        const clave = elemento.getAttribute("data-i18n");

        elemento.textContent = traducciones[idioma][clave];

    });

    localStorage.setItem("idioma", idioma)
}

document.getElementById("btn-es").addEventListener("click", () => {
    cambiarIdioma("es");
});

document.getElementById("btn-en").addEventListener("click", () => {
    cambiarIdioma("en");
});

const idiomaGuardado = localStorage.getItem("idioma");

if (idiomaGuardado) {
    cambiarIdioma(idiomaGuardado);
}