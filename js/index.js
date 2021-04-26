/*Chamando as variavéis nescessárias pelo DOM*/
const hr = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const hun = document.querySelector('#hun')
const ini = document.querySelector('#ini')
const pau = document.querySelector('#pause')

/*Inicializando as variavéis*/
let cont=1, pauseButton = false
let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

/*Função para clique no botão iniciar*/
ini.addEventListener('click',()=>{
    control = setInterval(relogio, 10) //Chama a função relogio com um delay de 10
    ini.disabled = true //Desativa o botão iniciar para evitar bugs
    pauseButton = true //Aciona a possibilidade de acionar o botão pause
})

/*Função para zerar relógio e variaveis*/
function zerar(){
    clearInterval(control) //Encerra o metodo setInterval
    ini.disabled = false   //Ativa o botão Iniciar
    pauseButton = false    //Desativa o botão pause para não da bug
    
    //Limpando as variaveis do HTML
    pau.value = 'PAUSE'
    hun.innerHTML = " 00"
    sec.innerHTML = " 00"
    min.innerHTML = " 00"
    hr.innerHTML = " 00"
    
    //Limpando as variaveis do JS
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
}

/*Função botão pause/play*/
pau.addEventListener('click',()=>{  
    if(pauseButton){ //Se retornar TRUE pode acessar o botão pause
        cont ++ // conta os cliks no botão pause
        if(cont % 2 == 0){
            pau.value = 'PLAY'
            clearInterval(control)
            console.log('click Pause')
        }else{
            pau.value = 'PAUSE'
            clearInterval(control)
            control = setInterval(relogio, 1)
            console.log('click Play')
        }
    }
})

/*Lógica do cronometro*/
function relogio(){
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0"+centesimas }
        hun.innerHTML = +centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos ++;
        sec.innerHTML = +segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0) ) {
        minutos++;
        min.innerHTML = +minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
        horas ++;
        hr.innerHTML = horas;
    }
}

