// tu código aquí
const globos = document.querySelectorAll('.balloon')
let contador = 24
let printContador = document.querySelector('#counter')
let reset = document.querySelector('.btn-reset')

printContador.innerHTML = contador
globos.forEach(explodeBallon)

function explodeBallon(globo){
    globo.addEventListener('mouseover', petarGlobo)    
}

function petarGlobo(e){
    if(e.target.className === 'balloon'){
        e.target.textContent = 'POP!'
        e.target.style.backgroundColor = '#ededed'
        contador--
        printContador.innerHTML = contador
        e.target.removeEventListener('mouseover', petarGlobo)
        allExplode()
    }
}

function allExplode(){
    if(contador === 0){
        document.querySelector('#yay-no-balloons').style.display = 'inline'
        document.querySelector('#balloon-gallery').style.display = 'none'
        printContador.innerHTML = 'GG!'
    }
}

//Reset Balloons
globos.forEach(inflateBallons)

function inflateBallons(globo){
    reset.addEventListener('click', function(){
        globo.textContent = ''
        globo.style.backgroundColor = ''
        contador = 24
        printContador.innerHTML = 24
        globo.addEventListener('mouseover', petarGlobo)
        if(contador === 24){
            document.querySelector('#yay-no-balloons').style.display = 'none'
            document.querySelector('#balloon-gallery').style.display = 'inline'
            contador = 24
            printContador.innerHTML = 24
        }
    })
}

//Inflate Single Ballon
globos.forEach(singleBallon)

function singleBallon(globo){
    globo.addEventListener('dblclick', function(){
        if(contador < 24){
            globo.textContent = ''
            globo.style.backgroundColor = ''
            contador = contador + 1
            printContador.innerHTML = contador
            globo.addEventListener('mouseover', petarGlobo)
        }
    })
}
