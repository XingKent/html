const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 200}px)`;
}

setInterval(carrossel, 2000);


document.getElementById("contactForm").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
            
    if (name.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        event.preventDefault();
    }
            
    if (!validateEmail(email)) {
        alert("Por favor, insira um endereço de email válido.");
        event.preventDefault();
    }
            
    if (mensagem.trim() === "") {
        alert("Por favor, preencha o campo Mensagem.");
        event.preventDefault();
    }
});
            
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}         