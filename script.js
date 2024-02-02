//Script del juego "Atrapá el Topito"

// Función principal que activa la aparición en cadena de todos los topitos

let jugar = () => {

    juego.puntaje = 0;

    document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

    document.querySelector('.puntaje').style.display = 'block';

    funcionGeneradora(2000, 3500); 

    funcionGeneradora(5000, 6500);

    funcionGeneradora(8000, 9500);

    funcionGeneradora(5500 * 2, 6250 * 2);

    funcionGeneradora(7000 * 2, 7750 * 2);

    funcionGeneradora(8500 * 2, 9250 * 2);

    funcionGeneradora(6666 * 3, 7166 * 3);

    funcionGeneradora(7666 * 3, 8166 * 3);

    funcionGeneradora(8666 * 3, 9166 * 3);

    funcionGeneradora(7250 * 4, 7625 * 4);

    setTimeout(() => {

        document.querySelector('.puntaje p').innerHTML = 'Nvl 1: ' + juego.puntaje + ' de 10';

    }, 7874 * 4);

    setTimeout(() => {

        document.querySelector('.puntaje p').innerHTML = 'Nvl 2...';

    }, 8500 * 4);

    setTimeout(() => {

        document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

    }, 7200 * 5); // 36.000

    funcionGeneradora(7600 * 5, 7800 * 5); // 38.000 y 39.000

    funcionGeneradora(8100 * 5, 8300 * 5); // 40.500 y 41.500

    funcionGeneradora(8600 * 5, 8800 * 5); // 43.000 y 44.000

    funcionGeneradora(9100 * 5, 9300 * 5); // 45.500 y 46.500

    funcionGeneradora(9600 * 5, 9800 * 5); // 48.000 y 49.000

    funcionGeneradora(8416 * 6, 8583 * 6); // 50.500 y 51.500

    funcionGeneradora(8833 * 6, 7714 * 7); // 53.000 y 54.000

    funcionGeneradora(7929 * 7, 8071 * 7); // 55.500 y 56.500

    funcionGeneradora(8285 * 7, 8429 * 7); // 58.000 y 59.000

    funcionGeneradora(7563 * 8, 7688 * 8); // 60.500 y 61.500

    setTimeout(() => {

        document.querySelector('.puntaje p').innerHTML = 'Nvl 2: ' + juego.puntaje + ' de 20';

    }, 8063 * 8);

    setTimeout(() => {

        document.querySelector('.puntaje p').innerHTML = 'Nvl 3...';;

    }, 8313 * 8);

    setTimeout(() => {

        document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

    }, 8562 * 8);

    funcionGeneradora(7833 * 9, 7888 * 9);

    funcionGeneradora(8000 * 9, 8055 * 9);

    funcionGeneradora(8167 * 9, 8222 * 9);

    funcionGeneradora(8333 * 9, 8389 * 9);

    funcionGeneradora(8500 * 9, 8555 * 9);

    funcionGeneradora(8667 * 9, 8722 * 9);

    funcionGeneradora(8833 * 9, 8889 * 9);

    funcionGeneradora(8100 * 10, 8150 * 10);

    funcionGeneradora(8250 * 10, 8300 * 10);

    funcionGeneradora(8400 * 10, 8450 * 10);

    setTimeout(() => {

        document.querySelector('.puntaje p').innerHTML = 'Nvl 3: ' + juego.puntaje + ' de 30';

        musicaDeFondo.pause();

    }, 8650 * 10); // 86.500

    setTimeout(() => {

        document.querySelectorAll('.madriguera').forEach((desaparecer) => {

            desaparecer.style.display = 'none';

            document.querySelector('.reinicio').style.display = 'block';
        });

        document.querySelector('.puntaje').style.display = 'none';

    }, 8950 * 10); 

}

// Función que activa el inicio del juego al hacer CLICK en "Jugar"

document.querySelector('.reinicio').addEventListener('click', () => {
    
    document.querySelectorAll('.madriguera').forEach((aparecer) => {

        document.querySelector('footer').style.margin = '0';

        audioClick.play();

        aparecer.style.display = 'block';

        document.querySelector('.reinicio').style.display = 'none';
    });

    document.querySelector('.puntaje').style.marginTop = '5rem';

    jugar();

});

// Efectos de sonido guardados en variables

let audioAparicionTopito = new Audio('efectos-de-sonido/aparición.mp3');

let audioError = new Audio('efectos-de-sonido/error.mp3');

let audioClick = new Audio('efectos-de-sonido/click.mp3');

// Función que, según un número random, hace aparecer un topito en una madriguera al azar

let funcionGeneradora = (num1, num2) => {

    let numeroAlAzar = Math.floor(Math.random() * 9);

    if(numeroAlAzar == 0) {

        setTimeout(() => {

            document.querySelector('#topito-uno').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-uno').style.display = 'none';
        }, num2);
    }
    if(numeroAlAzar == 1) {

        setTimeout(() => {

            document.querySelector('#topito-dos').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-dos').style.display = 'none';
        }, num2);
    }
    if(numeroAlAzar == 2) {

        setTimeout(() => {

            document.querySelector('#topito-tres').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-tres').style.display = 'none';
        }, num2);
    }
    if(numeroAlAzar == 3) {

        setTimeout(() => {

            document.querySelector('#topito-cuatro').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-cuatro').style.display = 'none';
        }, num2);
    }
    if(numeroAlAzar == 4) {

        setTimeout(() => {

            document.querySelector('#topito-cinco').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-cinco').style.display = 'none';
        }, num2);
    }
    if(numeroAlAzar == 5) {

        setTimeout(() => {

            document.querySelector('#topito-seis').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-seis').style.display = 'none';
        }, num2);
    }
    if(numeroAlAzar == 6) {

        setTimeout(() => {

            document.querySelector('#topito-siete').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-siete').style.display = 'none';
        }, num2);
    }
    if(numeroAlAzar == 7) {

        setTimeout(() => {

            document.querySelector('#topito-ocho').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-ocho').style.display = 'none';
        }, num2);
    }
    if(numeroAlAzar == 8) {

        setTimeout(() => {

            document.querySelector('#topito-nueve').style.display = 'block';
        }, num1);

        setTimeout(() => {

            document.querySelector('#topito-nueve').style.display = 'none';
        }, num2);
    }

}

// Objeto que guarda el puntaje según los aciertos y errores

let juego = {
    puntaje: 0
}

// Función que suma puntos si se logra hacer CLICK sobre el topito que aparece al azar

const topitos = document.querySelectorAll('.topito'); 

topitos.forEach((topito) => {

    topito.addEventListener('click', () => {

        if(topito.id === 'topito-uno') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-uno').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-uno').style.display = 'none';

            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-uno').src = 'img/topito (on).gif';
            }, 500);

        }
        if(topito.id === 'topito-dos') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-dos').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-dos').style.display = 'none';
            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-dos').src = 'img/topito (on).gif';
            }, 500);
        }
        if(topito.id === 'topito-tres') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-tres').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-tres').style.display = 'none';
            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-tres').src = 'img/topito (on).gif';
            }, 500);

        }
        if(topito.id === 'topito-cuatro') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-cuatro').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-cuatro').style.display = 'none';
            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-cuatro').src = 'img/topito (on).gif';
            }, 500);

        }
        if(topito.id === 'topito-cinco') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-cinco').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-cinco').style.display = 'none';
            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-cinco').src += 'img/topito (on).gif';
            }, 500);

        }
        if(topito.id === 'topito-seis') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-seis').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-seis').style.display = 'none';
            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-seis').src = 'img/topito (on).gif';
            }, 500);

        }
        if(topito.id === 'topito-siete') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-siete').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-siete').style.display = 'none';
            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-siete').src = 'img/topito (on).gif';
            }, 500);

        }
        if(topito.id === 'topito-ocho') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-ocho').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-ocho').style.display = 'none';
            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-ocho').src = 'img/topito (on).gif';
            }, 500);

        }
        if(topito.id === 'topito-nueve') {

            juego.puntaje += 1;

            document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

            document.querySelector('#topito-nueve').src = 'img/topito (off).png';

            audioAparicionTopito.play();

            setTimeout(() => {
                document.querySelector('#topito-nueve').style.display = 'none';
            }, 100);

            setTimeout(() => {
                document.querySelector('#topito-nueve').src = 'img/topito (on).gif';
            }, 500);

        }

    });
});

// Función que resta puntos si no se logra dar CLICK en el topito que aparece

const madrigueras = document.querySelectorAll('.agujero');

madrigueras.forEach((madriguera) => {

    madriguera.addEventListener('click', () => {

        juego.puntaje -= 1;

        audioError.play();

        document.querySelector('.puntaje p').innerHTML = 'Aciertos: ' + juego.puntaje;

    });
});



