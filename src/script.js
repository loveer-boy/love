var btnNao = document.getElementById('nn')
var btnSim = document.querySelector("#rght")
var bg = document.querySelector('.box')

btnNao.addEventListener('mouseenter', run)
function run() {

    var bgX = window.innerWidth
    var bgY = window.innerHeight

    var maxX = bgX - btnNao.offsetWidth
    var maxY = bgY -btnNao.offsetHeight

    var aleatorioX = Math.floor(Math.random() * maxX)
    var aleatorioY = Math.floor(Math.random() * maxY)


    btnNao.style.left = aleatorioX + "px"
    btnNao.style.top =aleatorioY + "px"

    btnSim.classList.add('btn-pulsando')
}

btnSim.addEventListener('click', yess)
function yess(){
    bg.innerHTML = ""
    bg.classList.add('show')

    setTimeout(function(){
        window.open("https://youtube.com/shorts/1JhWdRVh8iU?feature=share", "_blank")
    }, 3000)
}