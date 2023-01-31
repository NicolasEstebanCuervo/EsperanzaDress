// Nicolas Cuervo - EsperanzaDress.

const navToggle = document.querySelector(".Nav_Toggle");
const navMenu = document.querySelector(".Nav_Menu");
const imagen = document.querySelector(".Imagen_Logo")
const div_Header = document.querySelector(".Imagen-Hamburguesa")

//Creacion de envento para quitar y poner atributos del Css

navToggle.addEventListener("click", () => {
navMenu.classList.toggle("Nav_Menu_Visible");

  if (navMenu.classList.contains("Nav_Menu_Visible")) {

      navToggle.setAttribute("aria-label", "Cerrar menú");

      navToggle.classList.add("Fixed_Boton_Hamburguesa")
      
      imagen.classList.add("Fixed_Imagen_Logo")

      div_Header.classList.add("Fixed_Div_Header")
  
  } 
  
  else{

      navToggle.setAttribute("aria-label", "Abrir menú");

      navToggle.classList.remove("Fixed_Boton_Hamburguesa")

      imagen.classList.remove("Fixed_Imagen_Logo")

      div_Header.classList.remove("Fixed_Div_Header")

  }

});


