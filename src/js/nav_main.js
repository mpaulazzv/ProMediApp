class navMain extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="mainNav">
            <a href="" class="mainOpc">
                <div id="btn_semestres">
                    <img src="/src/assets/semestre.svg" alt="">
                    <p>Semestres</p>
                </div>
            </a>
            <a href="" class="mainOpc">
                <div id="btn_Home" class="">
                    <img src="/src/assets/home.svg" alt="" id="img-home">
                    <p>Home</p>
                </div>
            </a>
            <a href="" class="mainOpc">
                <div id="btn_perfil">
                    <img src="/src/assets/user.svg" alt="">
                    <p>Perfil</p>
                </div>
            </a>
        </div>
    `;
    }
}

window.customElements.define("nav-main", navMain);

