// Nicolas Cuervo - EsperanzaDress.

//Funcion filtraje de productos.

document.addEventListener("keyup" , e=>{

    if(e.target.matches(".Input_Busqueda")){

        document.querySelectorAll(".Div_Articulo",).forEach(filtro =>{


            filtro.textContent.toLowerCase().includes(e.target.value.toLowerCase())

            ?filtro.classList.remove("Filtro")

            :filtro.classList.add("Filtro")

        })
    }

})  

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