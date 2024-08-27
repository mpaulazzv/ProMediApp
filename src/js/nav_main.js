class navMain extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="mainNav">
            <a href="" class="mainOpc">
                <div id="btn_semestres">
                    <img src='http://127.0.0.1:3000/src/assets/semestre.svg' alt="">
                    <p>Semestres</p>
                </div>
            </a>
            <a href="" class="mainOpc">
                <div id="btn_Home" class="">
                    <img src="http://127.0.0.1:3000/src/assets/home.svg" alt="" id="img-home">
                    <p>Home</p>
                </div>
            </a>
            <a href="" class="mainOpc">
                <div id="btn_Usuario">
                    <img src="http://127.0.0.1:3000/src/assets/user.svg" alt="">
                    <p>Perfil</p>
                </div>
            </a>
        </div>
    `;
    }
}

window.customElements.define("nav-main", navMain);

