



const o_night={
    init(){
        document.documentElement.classList.add('js-enabled');
        const button=document.querySelector('.showPass')
        button.addEventListener('click',montre)
    },
    montre() {
        const input = document.querySelector('#password');
//il n'existe pas de toggle pour type
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.setAttribute('type', 'password');
        }
    }
}
o_night.montre();
o_night.init();


