
let refs = [];
let btns = [];

window.onload = init;

function init(){


    
    refs["splash"] = document.getElementById("splash");
    refs["login"] = document.getElementById("login");
    refs["registro"] = document.getElementById("registro");
    refs["Home"] = document.getElementById("Home");
    refs["semestres"] = document.getElementById("semestres");
    refs["Usuario"] = document.getElementById("Usuario");
    refs["semestre"] = document.getElementById("semestre");
    refs["materia"] = document.getElementById("materia");
    refs["crear_materia"] = document.getElementById("crear_materia");
    refs["crear_semestre"] = document.getElementById("crear_semestre");


    btns["btn_perfil"] = document.getElementById("btn_perfil");
    btns["btn_Home"] = document.getElementById("btn_Home");
    btns["btn_semestres"] = document.getElementById("btn_semestres");
    btns["btn_login_splash"] = document.getElementById("btn_login_splash");
    btns["btn_registro_splash"] = document.getElementById("btn_registro_splash");
    btns["btn_Home_splash"] = document.getElementById("btn_Home_splash");
    btns["btn_Home_login"] = document.getElementById("btn_Home_login");
    btns["btn_Home_registro"] = document.getElementById("btn_Home_registro");
    btns["btn_registro_login"] = document.getElementById("btn_registro_login");
    btns["btn_login_registro"] = document.getElementById("btn_login_registro");


    asignarEventosMenu();
    asignarVolver();
    

}


function asignarEventosMenu(){

    btns["btn_perfil"].addEventListener("click", cambiarSeccion);
    btns["btn_Home"].addEventListener("click", cambiarSeccion);
    btns["btn_semestres"].addEventListener("click", cambiarSeccion);
    btns["btn_login_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_registro_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_Home_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_Home_login"].addEventListener("click", cambiarSeccion);
    btns["btn_Home_registro"].addEventListener("click", cambiarSeccion);
    btns["btn_registro_login"].addEventListener("click", cambiarSeccion);
    btns["btn_login_registro"].addEventListener("click", cambiarSeccion);


}

function asignarVolver(){
    let btns_volver = document.querySelectorAll(".volver_splash");
    for (let i = 0; i < btns_volver.length; i++) {
        btns_volver[i].addEventListener("click", ()=>{
            cargarSeccion("splash");
        });
    }
}

function ocultar()
{
    for (let key in refs) {
        refs[key].classList.add("ocultar");
    }
}

function cambiarSeccion(e){ 
    let seccion = e.target.id.split("_")[1];
    console.log(e.target);
    console.log("seccion: ", seccion);
    cargarSeccion(seccion);
}

function cargarSeccion(seccion){
    ocultar();
    refs[seccion].classList.remove("ocultar");
}
