
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