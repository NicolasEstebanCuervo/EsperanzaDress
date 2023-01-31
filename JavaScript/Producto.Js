// Nicolas Cuervo - EsperanzaDress.

// Funcion de mostrar imagen cuando se pasa el cursor por la misma.

function mostrarImagen (smallImg){

    let fullImg = document.querySelector(".Imagen_Principal");

    fullImg.src = smallImg.src;

}

// Funcion de la animacion al abrir la semi pagina.

function mostrarPantallaEmergente() {

    let Div_Informacion = document.querySelector(".Ventana_Emergente")
    Div_Informacion.classList.remove("Opacidad")
    Div_Informacion.classList.remove("z-Index")
    Div_Informacion.classList.remove("Animacion_Div_Informacion_Salida")

     let Boton_Informacion_Abrir = document.querySelector(".Mas_Informacion_Pagos")

     Boton_Informacion_Abrir.addEventListener("click",funcionAnimacionAbrir)
 
     function funcionAnimacionAbrir(){
 
        Div_Informacion.classList.add("Animacion_Div_Informacion_Entrada")
 
     }

}

// Funcion de la animacion al cerrar la semi pagina.

function CerrarPantallaEmergente() {

    let SetDiv_Informacion = document.querySelector(".Ventana_Emergente")
    let Boton_Informacion = document.querySelector(".Boton_Cerrar")
    SetDiv_Informacion.classList.add("Opacidad")

    Boton_Informacion.addEventListener("click",funcionAnimacion)

    function funcionAnimacion(){

        SetDiv_Informacion.classList.add("Animacion_Div_Informacion_Salida")

    }

    setTimeout( function index(){ SetDiv_Informacion.classList.add("z-Index")},800)
  
}

// ©Nicolas Rojas 2022 Todos los derechos reservados
