document.documentElement.classList.add('js-enabled');

function montre () {
    const input = document.querySelector('#password');

//il n'existe pas de toggle pour type
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.setAttribute('type', 'password');
    }
}
const button=document.querySelector('.showPass')
button.addEventListener('click',montre)




