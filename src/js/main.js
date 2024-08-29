
let refs = [];
let btns = [];
let forms = [];

window.onload = init;

function init(){
    
    //Referencias a las secciones
    refs["splash"] = document.getElementById("splash");
    refs["login"] = document.getElementById("login");
    refs["registro"] = document.getElementById("registro");
    refs["Home"] = document.getElementById("Home");
    refs["semestres"] = document.getElementById("semestres");
    refs["Usuario"] = document.getElementById("Usuario");
    refs["semestre"] = document.getElementById("semestre");
    refs["materia"] = document.getElementById("materia");
    refs["crearmateria"] = document.getElementById("crearmateria");
    refs["crearsemestre"] = document.getElementById("crearsemestre");
    refs["alertaRegistro"] = document.getElementById("alertaRegistro");
    refs["successRegistro"] = document.getElementById("successRegistro");
    refs["alertaLogin"] = document.getElementById("alertaLogin");
    refs["successLogin"] = document.getElementById("successLogin");
    

    //Botones para la navegabilidad
    btns["btn_login_splash"] = document.getElementById("btn_login_splash");
    btns["btn_registro_splash"] = document.getElementById("btn_registro_splash");
    btns["btn_Home_splash"] = document.getElementById("btn_Home_splash");
    btns["btn_successLogin"] = document.getElementById("btn_successLogin");
    btns["btn_alertaRegistro"] = document.getElementById("btn_alertaRegistro");
    btns["btn_registro_login"] = document.getElementById("btn_registro_login");
    btns["btn_semestre_actual"] = document.getElementById("btn_semestre_actual")
    btns["btn_semestres_home"] = document.getElementById("btn_semestres_home")
    btns["btn_materia"] = document.getElementById("btn_materia");
    btns["volver_semestre"] = document.getElementById("volver_semestre");
    btns["volver_semestres"] = document.getElementById("volver_semestres");
    btns["volver_Home"] = document.getElementById("volver_Home");
    btns["btn_crearsemestre"] = document.getElementById("btn_crearsemestre");
    btns["btn_crearmateria"] = document.getElementById("btn_crearmateria");
    btns["cerrar_semestres"] = document.getElementById("cerrar_semestres");
    btns["cerrar_semestre"] = document.getElementById("cerrar_semestre");
    btns["btn_semestre_Home"] = document.getElementById("btn_semestre_Home");
    btns["btn_splash_cerrarSesion"] = document.getElementById("btn_splash_cerrarSesion");
    btns["btn_registro_regresar"] = document.getElementById("btn_registro_regresar");
    btns["btn_login_regresar"] = document.getElementById("btn_login_regresar");
    btns["btn_login_registroCompleto"] = document.getElementById("btn_login_registroCompleto");
    btns["btn_Home_loginCompleto"] = document.getElementById("btn_Home_loginCompleto");

    //Forms
    forms["form_registro"] = document.getElementById("form_registro");


    asignarEventosMenu();   
    asignarVolver();
    

}


function asignarEventosMenu(){

    //Eventos botones
    btns["btn_login_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_registro_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_Home_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_successLogin"].addEventListener("click", cambiarSeccion);
    //btns["btn_alertaRegistro"].addEventListener("click", cambiarSeccion);
    btns["btn_registro_login"].addEventListener("click", cambiarSeccion);
    btns["btn_semestre_actual"].addEventListener("click", cambiarSeccion);
    btns["btn_semestres_home"].addEventListener("click", cambiarSeccion);
    btns["btn_materia"].addEventListener("click", cambiarSeccion);
    btns["volver_semestre"].addEventListener("click", cambiarSeccion);
    btns["volver_semestres"].addEventListener("click", cambiarSeccion);
    btns["volver_Home"].addEventListener("click", cambiarSeccion);
    btns["btn_crearsemestre"].addEventListener("click", cambiarSeccion);
    btns["btn_crearmateria"].addEventListener("click", cambiarSeccion);
    btns["cerrar_semestres"].addEventListener("click", cambiarSeccion);
    btns["cerrar_semestre"].addEventListener("click", cambiarSeccion);
    btns["btn_semestre_Home"].addEventListener("click", cambiarSeccion);
    btns["btn_splash_cerrarSesion"].addEventListener("click", cambiarSeccion);
    btns["btn_registro_regresar"].addEventListener("click", cambiarSeccion);
    btns["btn_login_regresar"].addEventListener("click", cambiarSeccion);
    btns["btn_login_registroCompleto"].addEventListener("click", cambiarSeccion);
    btns["btn_Home_loginCompleto"].addEventListener("click", cambiarSeccion);

    //Eventos form
    forms["form_registro"].addEventListener("submit", registro);

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
        if(refs[key].classList[0] === "ventanaEmergente"){
            refs[key].classList.remove("popUp");
        }
    }
}

function cambiarSeccion(e){ 
    let seccion;
    if(e.currentTarget.className === "nav"){
        seccion = e.target.id.split("_")[1];
    }else{
        seccion = e.currentTarget.id.split("_")[1];
    }
     
    cargarSeccion(seccion);
}


function cargarSeccion(seccion){
    
    console.log(refs[seccion].classList[0]);
    console.log(refs[seccion].id)
    if (refs[seccion].classList[0] === "ventanaEmergente"){
        refs[seccion].classList.add("popUp");
    }else{
        ocultar();
    }

    refs[seccion].classList.remove("ocultar");

}


function registro(e){
    
    e.preventDefault();

    //Obtención de los datos del formulario
    const formData = new FormData(e.target);

    const nombre = formData.get('nombre');
    const telefono = formData.get('telefono');
    const username = formData.get('username');
    const password = formData.get('password');
    const passwd_confirmation = formData.get('passwd_confirmation');

    let user = {};

    //Validaciones

    if(nombre === "" || telefono === "" || username === "" || password == "" || passwd_confirmation == "")
        {
            document.getElementById('msj_alerta_reg').innerText = 'Ningún campo puede ir vacío';
            cargarSeccion('alertaRegistro');
            
        }else if(password.lengt <8)
        {
            document.getElementById('msj_alerta_reg').innerText = 'la contraseña debe tener al menos 8 caracteres';
            cargarSeccion('alertaRegistro');
        }else if(passwd_confirmation !== password)
        {
            document.getElementById('msj_alerta_reg').innerText = 'las contraseñas no coinciden';
            cargarSeccion('alertaRegistro');
        }else
        {
            //Se crea el usuario y se guarda en localstorage

            user = 
            {
                nombre: nombre,
                telefono: telefono,
                username: username,
                password: password
            }

            localStorage.setItem("usuario", JSON.stringify(user));

            cargarSeccion('successRegistro');

        }
}
