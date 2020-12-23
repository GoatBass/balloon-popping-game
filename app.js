// tu código aquí
const globos = document.querySelectorAll('.balloon')
let contador = 0

globos.forEach(explodeBallon)

function explodeBallon(globo){
    globo.addEventListener('mouseover', petarGlobo)    
}

function petarGlobo(e){
    if(e.target.className === 'balloon'){
        e.target.textContent = 'POP!'
        e.target.style.backgroundColor = '#ededed'
        contador++
        e.target.removeEventListener('mouseover', petarGlobo)
        allExplode()
    }
}

function allExplode(){
    if(contador === 24){
        document.querySelector('#yay-no-balloons').style.display = 'inline'
        document.querySelector('#balloon-gallery').style.display = 'none'
    }
}
