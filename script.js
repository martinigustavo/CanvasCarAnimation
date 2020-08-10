window.onload = function () {
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    let fps = 60;

    let carro = document.getElementById("carro");

    // carro -> width: 69, height: 132

    //posição inicial do carro e velocidade (=== 2 ou multiplos de 5)
    let posX = 30;
    let posY = -110;
    const vel = 2;
    
    function drawCar(posX, posY) {

        // salva e restora posiçao do canvas pra limpar a tela
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();

        // redesenha a imagem do carro a cada posição
        context.drawImage(carro, posX, posY);

    }

    function rotateCar(angle) {
        // passa o ponto de giro para o centro do objeto(carro)
        // e depois retorna pro ponto original(0, 0)
        context.translate(posX + carro.width / 2, posY + carro.height / 2);
        context.rotate(angle * Math.PI / 180);
        context.translate(-posX - carro.width / 2, -posY - carro.height / 2);
    }

    setInterval(function () {
        
        //carro anda
        if (posY <= 400 || posY <= 680 || posY <= 1100 ||
            posY <= 1300 || posY <= 1350 || posY <= 1450 ||
            posY <= 1550 || posY <= 1580 || posY <= 1770 ||
            posY <= 2050 || posY <= 3000) {
            posY += vel;
        }

        //carro vira pra esquerda
        if (posY === 400 || posY === 680 || posY === 1580 ||
            posY === 1770 || posY === 2050) {
            rotateCar(-90);
            posY += vel;
        }

        //carro vira pra direita
        if (posY === 1080) {
            rotateCar(90);
            posY += vel;
        }

        //carro vira 45º
        if (posY === 1300 || posY === 1350 ||
            posY === 1450 || posY === 1550) {
            rotateCar(45);
            posY += vel;
        }

        console.log(posX, posY)
        drawCar(posX, posY);
    }, 1000 / fps);
}







