
let refs = [];
let btns = [];
let forms = [];
let usuarios = [];
let user = JSON.parse(localStorage.getItem('usuario'));
let semestreActivo = null;
let materiaActiva = null;
let notaNecesaria = null;

window.onload = init;

function init() {

    //Referencias a las secciones
    refs["splash"] = document.getElementById("splash");
    refs["login"] = document.getElementById("login");
    refs["registro"] = document.getElementById("registro");
    refs["Home"] = document.getElementById("Home");
    refs["semestres"] = document.getElementById("semestres");
    refs["Usuario"] = document.getElementById("Usuario");
    refs["semestre"] = document.getElementById("semestre");
    //refs["materia"] = document.getElementById("materia");
    refs["crearmateria"] = document.getElementById("crearmateria");
    refs["crearsemestre"] = document.getElementById("crearsemestre");
    refs["alertaRegistro"] = document.getElementById("alertaRegistro");
    refs["successRegistro"] = document.getElementById("successRegistro");
    refs["alertaLogin"] = document.getElementById("alertaLogin");
    refs["successLogin"] = document.getElementById("successLogin");
    refs["alertacrear_mat"] = document.getElementById("alertacrear_mat");


    //Botones para la navegabilidad
    btns["btn_login_splash"] = document.getElementById("btn_login_splash");
    btns["btn_registro_splash"] = document.getElementById("btn_registro_splash");
    btns["btn_Home_splash"] = document.getElementById("btn_Home_splash");
    btns["btn_successLogin"] = document.getElementById("btn_successLogin");
    btns["btn_alertaRegistro"] = document.getElementById("btn_alertaRegistro");
    btns["btn_registro_login"] = document.getElementById("btn_registro_login");
    //btns["btn_semestre_actual"] = document.getElementById("btn_semestre_actual")
    btns["btn_semestres_home"] = document.getElementById("btn_semestres_home")
    btns["btn_materia"] = document.getElementById("btn_materia");
    btns["volver_semestre"] = document.getElementById("volver_semestre");
    btns["volver_semestres"] = document.getElementById("volver_semestres");
    btns["volver_Home"] = document.getElementById("volver_Home");
    btns["btn_crearsemestre"] = document.getElementById("btn_crearsemestre");
    btns["btn_crearmateria"] = document.getElementById("btn_crearmateria");
    btns["cerrar_semestres"] = document.getElementById("cerrar_semestres");
    btns["cerrar_semestre"] = document.getElementById("cerrar_semestre");
    //btns["btn_semestre_Home"] = document.getElementById("btn_semestre_Home");
    btns["btn_splash_cerrarSesion"] = document.getElementById("btn_splash_cerrarSesion");
    btns["btn_registro_regresar"] = document.getElementById("btn_registro_regresar");
    btns["btn_login_regresar"] = document.getElementById("btn_login_regresar");
    btns["btn_login_registroCompleto"] = document.getElementById("btn_login_registroCompleto");
    btns["btn_Home_loginCompleto"] = document.getElementById("btn_Home_loginCompleto");
    btns["btn_crearmateria_regresar"] = document.getElementById("btn_crearmateria_regresar");

    //Forms
    forms["form_registro"] = document.getElementById("form_registro");
    forms["form_login"] = document.getElementById("form_login");
    forms["form_crear_sem"] = document.getElementById("crear_sem_form");
    forms["form_agregar_materia"] = document.getElementById("form_agregar_materia");

    asignarEventosMenu();
    asignarVolver();
    cargarSemestres();
    mostrarSemestres();
    mostrar_infoPerfil();


}

function asignarEventosSemestre() {
    let user = JSON.parse(localStorage.getItem('usuario'));
    let nro = 0;
    for (sem in user.semestres) {
        nro++;
        refs["semestre" + String(nro)] = document.getElementById("semestre" + String(nro));
        btns["btn_semestre" + String(nro) + "_semestres"] = document.getElementById("btn_semestre" + String(nro) + "_semestres");
        btns["btn_semestre" + String(nro) + "_home"] = document.getElementById("btn_semestre" + String(nro) + "_home");
        btns["2btn_semestre" + String(nro) + "_home"] = document.getElementById("2btn_semestre" + String(nro) + "_home");
        btns["volver_semestres_" + String(nro)] = document.getElementById("volver_semestres_" + String(nro));
        btns["btn_crearmateria_" + String(nro)] = document.getElementById("btn_crearmateria_" + String(nro));

        if (btns["btn_semestre" + String(nro) + "_semestres"]) {
            btns["btn_semestre" + String(nro) + "_semestres"].addEventListener("click", cambiarSeccion);
        }
        if (btns["btn_semestre" + String(nro) + "_home"]) {
            btns["btn_semestre" + String(nro) + "_home"].addEventListener("click", cambiarSeccion);
        }
        if (btns["2btn_semestre" + String(nro) + "_home"]) {
            btns["2btn_semestre" + String(nro) + "_home"].addEventListener("click", cambiarSeccion);
        }
        if (btns["volver_semestres_" + String(nro)]) {
            btns["volver_semestres_" + String(nro)].addEventListener("click", cambiarSeccion);
        }
        if (btns["btn_crearmateria_" + String(nro)]) {
            btns["btn_crearmateria_" + String(nro)].addEventListener("click", cambiarSeccion);
        }
    }
}

function asignarEventosMateria() {
    let user = JSON.parse(localStorage.getItem('usuario'));
    let nro = 0;
    user.semestres[semestreActivo-1].materias.forEach(function(materia) {
        nro++;
        refs["materia"+String(nro)] = document.getElementById("materia"+String(nro));
        btns["btn_materia"+String(nro)] = document.getElementById("btn_materia"+String(nro));
        //btns["volver_semestre"+semestreActivo+"_m"+materiaActiva] = document.getElementById("volver_semestre"+semestreActivo+"_m"+materiaActiva);

        if (btns["btn_materia"+String(nro)] ) {
            btns["btn_materia"+String(nro)].addEventListener("click", cambiarSeccion);
        }
        /*
        if (btns["volver_semestre"+semestreActivo+"_m"+materiaActiva] ) {
            btns["volver_semestre"+semestreActivo+"_m"+materiaActiva].addEventListener("click", cambiarSeccion);
        }
            */

    ;})

}

function asignarEventosMenu() {

    //Eventos botones
    btns["btn_login_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_registro_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_Home_splash"].addEventListener("click", cambiarSeccion);
    btns["btn_registro_login"].addEventListener("click", cambiarSeccion);
    btns["btn_semestres_home"].addEventListener("click", cambiarSeccion);
    btns["volver_semestres"].addEventListener("click", cambiarSeccion);
    btns["volver_Home"].addEventListener("click", cambiarSeccion);
    btns["btn_crearsemestre"].addEventListener("click", cambiarSeccion);
    btns["btn_crearmateria"].addEventListener("click", cambiarSeccion);
    btns["cerrar_semestres"].addEventListener("click", cambiarSeccion);
    btns["btn_splash_cerrarSesion"].addEventListener("click", cambiarSeccion);
    btns["btn_registro_regresar"].addEventListener("click", cambiarSeccion);
    btns["btn_login_regresar"].addEventListener("click", cambiarSeccion);
    btns["btn_login_registroCompleto"].addEventListener("click", cambiarSeccion);
    btns["btn_Home_loginCompleto"].addEventListener("click", cambiarSeccion);
    btns["btn_crearmateria_regresar"].addEventListener("click", cambiarSeccion);

    //Eventos form
    forms["form_registro"].addEventListener("submit", registro);
    forms['form_login'].addEventListener('submit', login);
    forms['form_crear_sem'].addEventListener('submit', crearSemestre);
    forms["form_agregar_materia"].addEventListener("submit", agregar_materia);

}

function asignarVolver() {
    let btns_volver = document.querySelectorAll(".volver_splash");
    for (let i = 0; i < btns_volver.length; i++) {
        btns_volver[i].addEventListener("click", () => {
            cargarSeccion("splash");
        });
    }
}

function ocultar() {
    for (let key in refs) {
        refs[key].classList.add("ocultar");
        if (refs[key].classList[0] === "ventanaEmergente") {
            refs[key].classList.remove("popUp");
        }
    }
}

function cambiarSeccion(e) {
    let seccion;
    if (e.currentTarget.className === "nav") {
        seccion = e.target.id.split("_")[1];

    } else {
        seccion = e.currentTarget.id.split("_")[1];
    }
    if (seccion.startsWith("semestre") && seccion !== "semestres") {
        semestreActivo = parseInt(seccion.replace("semestre", ""), 10); 
        mostrarMaterias();
    }
    if (seccion.startsWith("materia")) {
        materiaActiva = parseInt(seccion.replace("materia", ""), 10); 
        mostrarNotas();
    }

    cargarSeccion(seccion);
}



function cargarSeccion(seccion) {


    if (refs[seccion].classList[0] === "ventanaEmergente") {
        refs[seccion].classList.add("popUp");
    } else {
        ocultar();
    }

    refs[seccion].classList.remove("ocultar");

}


function registro(e) {

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

    if (nombre === "" || telefono === "" || username === "" || password == "" || passwd_confirmation == "") {
        document.getElementById('msj_alerta_reg').innerText = 'Ningún campo puede ir vacío';
        cargarSeccion('alertaRegistro');

    } else if (password.lengt < 8) {
        document.getElementById('msj_alerta_reg').innerText = 'la contraseña debe tener al menos 8 caracteres';
        cargarSeccion('alertaRegistro');
    } else if (passwd_confirmation !== password) {
        document.getElementById('msj_alerta_reg').innerText = 'las contraseñas no coinciden';
        cargarSeccion('alertaRegistro');
    } else {
        //Se crea el usuario y se guarda en localstorage

        user =
        {
            nombre: nombre,
            telefono: telefono,
            username: username,
            password: password,
            semestres: []
        }

        localStorage.setItem("usuario", JSON.stringify(user));

        cargarSeccion('successRegistro');

    }
}

function login(e) {
    e.preventDefault();

    //Obtención de los datos del formulario

    const formData = new FormData(e.target);

    let username = formData.get('username');
    let password = formData.get('password');


    //Validar que exista el usuario registrado


    if (!localStorage.getItem('usuario')) {
        cargarSeccion('alertaLogin');
    } else {
        let user = JSON.parse(localStorage.getItem('usuario'));

        if (username === "" || password === "") {
            cargarSeccion('alertaLogin');
        }
        else if (user.username !== username) {
            cargarSeccion('alertaLogin')
        } else if (user.password !== password) {
            cargarSeccion('alertaLogin');
        } else {
            cargarSeccion('successLogin');
            cargarSemestres();
        }
    }

}

function cargarSemestres() {
    let lista = document.querySelector('#sem_list');
    let desCrear = document.querySelector('.desCrearSem');
    let bnv = document.querySelector('#bnv');
    let semAct = document.querySelector('#btn_semestre_actual');
    let wrapper = document.querySelector('#wrapper_home');

    let user = JSON.parse(localStorage.getItem('usuario'));

    if (user.semestres.length != 0) {
        desCrear.classList.add('ocultar');
        lista.classList.remove('ocultar');
        bnv.classList.add('ocultar');
        semAct.classList.remove('ocultar')
        wrapper.classList.remove('ocultar')

        mostrarSemestres();
    }
}

function crearSemestre(e) {
    e.preventDefault();

    let user = JSON.parse(localStorage.getItem('usuario'));
    const formData = new FormData(e.target);
    let nombre_sem = formData.get('nombre_sem');

    user.semestres.push({
        nombre: nombre_sem,
        nro_materias: 0,
        promedio: 0.0,
        creditos: 0,
        materias: []
    });

    localStorage.setItem("usuario", JSON.stringify(user));
    cargarSemestres();
}

function mostrarSemestres() {

    let user = JSON.parse(localStorage.getItem("usuario"));

    let semIndv = document.querySelector('#section_semestres');
    let place = document.querySelector('#sem_list');
    let place_home = document.querySelector('#btn_semestre_actual');
    let place_slider = document.querySelector('#slider_home');

    let section = "";
    let out = "";
    let out_home = "";
    let out_slider = "";

    let nro = 0;

    for (sem in user.semestres) {
        nro++;
        out += `
            <div id=${"btn_semestre" + String(nro) + "_semestres"} class="box_semestre">
                <h3 class="nombre_semestre">${user.semestres[sem].nombre}</h3>
                <div class="semestre_body">
                    <div class="info_semestre">
                        <p>Nro de materias: ${user.semestres[sem].nro_materias}</p>
                        <p>Promedio: ${user.semestres[sem].promedio}</p>
                    </div>
                    <img src="http://127.0.0.1:3000/src/assets/arrow-more.svg" alt="" class="semboxImg">
                </div>
            </div>
        `;
        out_home = `
            <div id=${"btn_semestre" + String(nro) + "_home"}>
                <p class="semTitle">${user.semestres[sem].nombre}</p>
                <div class="semBottom">
                    <div class="contBottom">
                        <p class="semDesc">Nro.Materias: ${user.semestres[sem].nro_materias}</p>
                        <p class="semDesc">Promedio: ${user.semestres[sem].promedio}</p>
                    </div>
                    <img src="http://127.0.0.1:3000/src/assets/arrow-more.svg" alt="" class="semImg">
                </div>
            </div>
        `;
        out_slider += `
            <div id=${"2btn_semestre" + String(nro) + "_home"} class="semOpc">
                <p class="opcTitle">${user.semestres[sem].nombre}</p>
                <div class="opcBottom">
                    <div class="opcCont">
                        <p class="opcDesc">Nro.Materias: ${user.semestres[sem].nro_materias}</p>
                        <p class="opcDesc">Promedio: ${user.semestres[sem].promedio}</p>
                    </div>
                    <img src="http://127.0.0.1:3000/src/assets/arrow-more.svg" alt="" class="opcImg">
                </div>
            </div>
        `;

        section += `
            <section id=${"semestre" + String(nro)} class="ocultar">
                <div class="semestreContent">
                    <div class="semestreTop">
                        <img id=${"volver_semestres_" + String(nro)} src="http://127.0.0.1:3000/src/assets/arrow-left.svg" alt="arrow" class="arrowLogin">
                        <h1 class="semestre_titulo">${user.semestres[sem].nombre}</h1>
                        <div class="semestre_subtitulos">
                            <h3 class="promedio_semestre">Promedio: ${user.semestres[sem].promedio}</h3>
                            <h3 class="creditos_semestre">Creditos: ${user.semestres[sem].creditos}</h3>
                        </div>
                    </div>
                    <div id=${"mat_sem"+String(nro)} class="materias_semestre">

                    </div>
                    <div class="btn_agregar_materia" id=${"btn_crearmateria_" + String(nro)}>
                        <h3 class="nombre_materia_semestre">Agregar nueva materia</h3>
                        <img src="http://127.0.0.1:3000/src/assets/plus.svg" alt="" class="semaddImg">
                    </div>
                </div>
                <nav-main class="nav"></nav-main>
            </section>
        `;

    }

    place.innerHTML = out;
    semIndv.innerHTML = section;
    place_home.innerHTML = out_home;
    place_slider.innerHTML = out_slider;

    asignarEventosSemestre();

}

function mostrar_infoPerfil() {

    let username_home = document.getElementById('username_home');
    let username_usuario = document.getElementById('username_usuario');
    let telefono_usuario = document.getElementById('telefono_usuario');
    let nombre_usuario = document.getElementById('nombre_usuario')

    username_home.innerText = user.nombre;
    username_usuario.innerText = user.username;
    telefono_usuario.innerText = user.telefono;
    nombre_usuario.innerText = user.nombre;

}


function agregar_materia(e) {


    e.preventDefault();

    const formData = new FormData(e.target);

    const nombre_materia = formData.get('nombre_materia');
    const creditos_materia = formData.get('creditos_materia');
    const nota_deseada = formData.get('nota_deseada');

    let materia = {
        nombre_materia: nombre_materia,
        creditos_materia: creditos_materia,
        promedio: 0.0,
        nota_deseada: nota_deseada,
        notas: [],
        nota_necesaria: 0,
        porcentaje_restante: 100,

    }

    user = JSON.parse(localStorage.getItem("usuario"));

    if (nombre_materia === "" || creditos_materia === "") {
        cargarSeccion('alertacrear_mat');
    }
    else {


        let array = user.semestres[semestreActivo - 1].materias; 
        array.push(materia);
        user.semestres[semestreActivo-1].materias = array;
        

        localStorage.setItem("usuario", JSON.stringify(user));
    }

    actualizarSemestre();
    mostrarMaterias();

}

function mostrarMaterias()
{
    let user = JSON.parse(localStorage.getItem("usuario"));
    let place = document.querySelector('#mat_sem'+String(semestreActivo));
    let materiaIndv = document.querySelector("#section_materias");
    //calc_nota_necesaria();

    let out="";
    let section = "";
    let materias = user.semestres[semestreActivo-1].materias;
    let nro = 0;

    materias.forEach(function(materia) {
        nro++;
        out +=`
        <div class="materia_semestre" id=${"btn_materia"+String(nro)}>
            <h3 class="nombre_materia_semestre">${materia.nombre_materia}</h3>
            <img src="http://127.0.0.1:3000/src/assets/arrow-more.svg" alt="" class="opcImg">
        </div>
    `;

    section += `
    <section id=${"materia"+String(nro)}>
        <div class="materia_content">
            <div class="materia_top">
            <img id="volver_semestre${semestreActivo}_m${String(nro)}" src="http://127.0.0.1:3000/src/assets/arrow-left.svg" alt="arrow" class="arrowLogin">
            <h1 class="titulo_materia">${materia.nombre_materia}</h1>
        <div class="subtitulos_materia">
            <h3 class="promedio_materia">Promedio: ${materia.promedio}</h3>
            <h3 class="creditos_materia">Créditos: ${materia.creditos_materia}</h3>
        </div>
        <div class="nota_deseada">
            <h3 class="nota_d">Nota deseada: ${materia.nota_deseada} </h3>
        </div>
    </div>
    <div class="notas">
        <div id=${"lista_notas_sem"+String(nro)}>

        </div>
        <form id='crear_nota_m${String(nro)}'>
            <div class="detalle_nota" >
                <input type="text" placeholder="Nombre" class="texto_nota" name="nombre_nota">
                <input type="number" placeholder="Valor" class="texto_nota" name="valor_nota">
                <input type="text" placeholder="Peso" class="texto_nota" name="peso_nota">
            </div>
            <button type="submit" class="btn_agregar_nota">
                <h3 class="nombre_materia_semestre">Agregar nueva nota</h3>
                <img src="http://127.0.0.1:3000/src/assets/plus.svg" alt="" class="semaddImg">
            </button>
        </form>
    </div>
    <div class="nota_necesaria">
        <h2 class="nota_necesaria_titulo">Necesitas ${materia.nota_necesaria.toFixed(2)}</h2>
        <p class="n_necesaria_p">En el${materia.porcentaje_restante}% restante para lograr tu nota ideal</p>
    </div>
    </div>
    <nav-main class="nav"></nav-main>
    </section>`;

    });

    place.innerHTML = out;
    materiaIndv.innerHTML = section;

    let cerrarCrearM = document.getElementById("static_id_cerrar");

    if(cerrarCrearM){
        cerrarCrearM.id = "cerrar_semestre" + semestreActivo;
        let btn_cerrar = document.getElementById("cerrar_semestre" + semestreActivo);
        btn_cerrar.addEventListener("click", cambiarSeccion);
        cerrarCrearM = document.getElementById("cerrar_semestre" + semestreActivo);
    }else if(cerrarCrearM){
        let btn_cerrar = document.getElementById("cerrar_semestre" + semestreActivo);
        btn_cerrar.addEventListener("click", cambiarSeccion);
    }

    asignarEventosMateria();

}

function agregar_nota(e){
    e.preventDefault();

    const formData = new FormData(e.target);

    const nombre_nota = formData.get('nombre_nota');
    const valor_nota = formData.get('valor_nota');
    const peso_nota = formData.get('peso_nota');

    let nota = {
        nombre_nota: nombre_nota,
        valor_nota: valor_nota,
        peso_nota: peso_nota,
    }

    user = JSON.parse(localStorage.getItem("usuario"));

    if (nombre_nota === "" || valor_nota < 0 || valor_nota > 5 || peso_nota < 0 || peso_nota > 100) {
        alert("erro al cargar nota")
    }
    else {

        let array = user.semestres[semestreActivo - 1].materias[materiaActiva -1].notas; 
        array.push(nota);
        user.semestres[semestreActivo-1].materias[materiaActiva-1].notas = array;

        localStorage.setItem("usuario", JSON.stringify(user));
    }

    mostrarNotas();
    //calc_nota_necesaria();

}

function mostrarNotas(){
    let user = JSON.parse(localStorage.getItem("usuario"));
    let place = document.querySelector('#lista_notas_sem'+String(materiaActiva));

    let out="";
    let notas = user.semestres[semestreActivo-1].materias[materiaActiva-1].notas;

    let formAddNota = document.getElementById('crear_nota_m'+materiaActiva);

    formAddNota.addEventListener("submit", agregar_nota);

    let volver_sem = document.getElementById("volver_semestre"+semestreActivo+"_m"+materiaActiva);

    volver_sem.addEventListener("click", cambiarSeccion);

    notas.forEach(function(nota) {
        out +=`
            <div class="detalle_nota" >
                <p class="texto_nota">${nota.nombre_nota}</p>
                <p class="texto_nota">${nota.valor_nota}</p>
                <p class="texto_nota">${nota.peso_nota}</p>
            </div>
        `;
    })

    place.innerHTML = out;

}

function actualizarSemestre(){
    let creditos = 0;

    let user = JSON.parse(localStorage.getItem("usuario"));
    let materias = user.semestres[semestreActivo-1].materias;

    materias.forEach(function(materia) {
        creditos = user.semestres[semestreActivo-1].creditos + materia.creditos_materia;
    })

    user.semestres[semestreActivo-1].nro_materias = materias.length;
    user.semestres[semestreActivo-1].creditos = creditos;
    localStorage.setItem("usuario", JSON.stringify(user));  

}

function calc_nota_necesaria(){

    let materia = user.semestres[semestreActivo-1].materias[materiaActiva-1];
    let notas = materia.notas;


    let nota_esperada = materia.nota_deseada;
    let porcentajeEvaluado = 0; 
    let notaAcumulada = 0;
    let porcentajeRestante = 0;

    notas.forEach(function(nota) {
        porcentajeEvaluado += nota.peso_nota;
        notaAcumulada += (nota.valor_nota * (nota.peso_nota / 100));
    });

    porcentajeRestante = 100 - porcentajeEvaluado;

    let notaNecesaria = (nota_esperada - notaAcumulada / porcentajeRestante);

    materia.nota_necesaria = notaNecesaria;
    materia.porcentaje_restante = porcentajeRestante;
    localStorage.setItem("usuario", JSON.stringify(user));

}
