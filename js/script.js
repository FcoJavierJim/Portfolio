
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
        "nav.inicio": "Inicio",
        "nav.sobreMi": "Sobre mí",
        "nav.tecnologias": "Tecnologías",
        "nav.proyectos": "Proyectos",
        "nav.experiencia": "Experiencia",
        "nav.contacto": "Contacto"
    },

    en: {
        "nav.inicio": "Home",
        "nav.sobreMi": "About me",
        "nav.tecnologias": "Technologies",
        "nav.proyectos": "Projects",
        "nav.experiencia": "Experience",
        "nav.contacto": "Contact"
    }
};

function cambiarIdioma(idioma) {

    const elementos = document.querySelectorAll("[data-i18n]");

    elementos.forEach(elemento => {

        const clave = elemento.getAttribute("data-i18n");

        elemento.textContent = traducciones[idioma][clave];

    });
}

document.getElementById("btn-es").addEventListener("click", () => {
    cambiarIdioma("es");
});

document.getElementById("btn-en").addEventListener("click", () => {
    cambiarIdioma("en");
});