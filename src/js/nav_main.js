class navMain extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="mainNav">
            <a  class="mainOpc">
                <div id="btn_semestres" class="opc_nav">
                    <img src='http://127.0.0.1:3000/src/assets/semestre.svg' alt="" class="imgMainOpc">
                    <p>Semestres</p>
                </div>
            </a>
            <a  class="mainOpc">
                <div id="btn_Home" class="opc_nav">
                    <img src="http://127.0.0.1:3000/src/assets/logo.png" alt="" id="btn_Home" class="logoApp">
                </div>
            </a>
            <a class="mainOpc" >
                <div id="btn_Usuario" class = "opc_nav">
                    <img src="http://127.0.0.1:3000/src/assets/user.svg" alt="" class="imgMainOpc">
                    <p >Perfil</p>
                </div>
            </a>
        </div>
    `;

    this.addEventListener("click", (e) => {
        if (e.target.closest("#btn_Usuario, #btn_Home, #btn_semestres")) {
            cambiarSeccion(e);
        }
    });
    }
}

window.customElements.define("nav-main", navMain);

