const hr = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const hun = document.querySelector('#hun')
const ini = document.querySelector('#ini')
const pau = document.querySelector('#pause')
let cont=1, pauseButton = false
let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;


ini.addEventListener('click',()=>{
    //clearInterval(control)
    control = setInterval(relogio, 10)
    ini.disabled = true
    pauseButton = true
    console.log('Iniciando')
})

function zerar(){
    clearInterval(control)
    ini.disabled = false
    pauseButton = false
    
    pau.value = 'PAUSE'
    hun.innerHTML = " 00"
    sec.innerHTML = " 00"
    min.innerHTML = " 00"
    hr.innerHTML = " 00"
    
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    console.log('Zerado')
}


    
pau.addEventListener('click',()=>{  
    if(pauseButton){
        cont ++
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

