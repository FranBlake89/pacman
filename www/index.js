$('#start').click(function init(){
    $('#score').toggle();
    $('#start').toggle();
    $('.container').toggle();
})
$('#restart').click(function(){
    $('#restart').toggle();
    location.reload();
})

var Mundo = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0, 1],
    [1, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 1],
    [1, 0, 1, 1, 2, 1, 2, 1, 1, 0, 0, 1, 1, 2, 1, 2, 0, 0, 1, 1],
    [1, 0, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1],
    [1, 0, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1],
    [1, 0, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 1, 1],
    [1, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 1],
    [1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0, 1],
    [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var pacman = {

    x: 1 * 35,
    y: 1 * 35
};


var score = 0;


function gameover(score){
    if(score == 1570){
        alert('fin del juego');
        $('#restart').toggle();
    }
}

function MuestraMundo() {
    var salida = '';

    for (let i = 0; i < Mundo.length; i++) {
        salida += "\n<div class='row'>\n";

        for (let j = 0; j < Mundo[i].length; j++) {
            if (Mundo[i][j] == 1)
                salida += "<div class='bricks'></div>";

            else if (Mundo[i][j] == 2)
                salida += "<div class='coin'></div>";

            if (Mundo[i][j] == 0)
                salida += "<div class='empty'></div>";
        }
        salida += "\n</div>";
    }
    // console.log(salida);
    $('#Mundo').html(salida);
}

function MuestraPacman() {
    document.getElementById('pacman').style.top = pacman.y + "px"
    document.getElementById('pacman').style.left = pacman.x + "px"
}

MuestraMundo();
MuestraPacman();
fill();

function fill() {    // condiciones de salida

    document.onkeydown = function (e) {

        if (e.keyCode == 37) {//izquierda
            var x = Math.floor(pacman.x / 30);
            var y = Math.floor(pacman.y / 30);

            var nuevox = Math.floor((pacman.x - 30) / 30);
            if (Mundo[y][nuevox] != 1) {
                pacman.x -= 30;
                $('#pacman')[0].style.transform = 'rotate(180deg)';
                if(Mundo[y][nuevox] == 2){
                    Mundo[y][nuevox] = 0;
                    score += 10;
                    $('#score').val(score);
                    MuestraMundo();
                    gameover(score);
                    
                }
            }
        }
        else if (e.keyCode == 39) { //derecha
            var x = Math.floor(pacman.x / 30);
            var y = Math.floor(pacman.y / 30);

            var nuevox = Math.floor((pacman.x + 30) / 30);
            if (Mundo[y][nuevox] != 1) {
                pacman.x += 30;
                $('#pacman')[0].style.transform = 'rotate(0deg)';
                if(Mundo[y][nuevox] == 2){
                    Mundo[y][nuevox] = 0;
                    score += 10;
                    $('#score').val(score);
                    MuestraMundo();
                    gameover(score);
                    
                }
            }  

        }
        else if (e.keyCode == 38) { //arriba
            var x = Math.floor(pacman.x / 30);
            var y = Math.floor(pacman.y / 30);

            var nuevoy = Math.floor((pacman.y - 30) / 30);
            if (Mundo[nuevoy][x] !== 1) {
                pacman.y -= 30;
                $('#pacman')[0].style.transform = 'rotate(-90deg)';
                if(Mundo[nuevoy][x] == 2){
                    Mundo[nuevoy][x] = 0;
                    score += 10;
                    $('#score').val(score);
                    MuestraMundo();
                    gameover(score);
                    
                }
            }   

        }
        else if (e.keyCode == 40) { //abajo
            var x = Math.floor(pacman.x / 30);
            var y = Math.floor(pacman.y / 30);

            var nuevoy = Math.floor((pacman.y + 30) / 30);
            if (Mundo[nuevoy][x] !== 1) {
                pacman.y += 30;
                $('#pacman')[0].style.transform = 'rotate(90deg)'; //retorna un OBJETO HTML DOM
                if(Mundo[nuevoy][x] == 2){
                    Mundo[nuevoy][x] = 0;
                    score += 10;
                    $('#score').val(score);
                    MuestraMundo();
                    gameover(score);
                    
                }
            }
        }

        //posicion inicial x10 y15
        console.log(e.keyCode);
        MuestraPacman();
    }

}
