class navMain extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="mainNav">
            <a  class="mainOpc">
                <div id="btn_semestres">
                    <img src='http://127.0.0.1:3000/src/assets/semestre.svg' alt="">
                    <p>Semestres</p>
                </div>
            </a>
            <a  class="mainOpc">
                <div id="btn_Home">
                    <img src="http://127.0.0.1:3000/src/assets/home.svg" alt="" id="img-home">
                    <p >Home</p>
                </div>
            </a>
            <a class="mainOpc">
                <div id="btn_Usuario">
                    <img src="http://127.0.0.1:3000/src/assets/user.svg" alt="">
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

