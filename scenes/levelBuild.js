import { sceneTransition } from "../animations.js";
import { getLevels} from "../levels.js";
let id = window.location.href.split("?")[1];
let victories = window.location.href.split("?")[2]
let levels = getLevels();
let level = levels[id - 1];

const imagem = level.drawning;
const arrayImgs = [];
const arrayFiles = level.imgs;
for (let i = 0; i <= arrayFiles.length - 1; i++) {
    let newImg = new Image();
    newImg.src = arrayFiles[i];
    arrayImgs.push(newImg);
}
let question = level.question;
let options = level.options;

options.sort((a, b) => 0.5 - Math.random());
let rightAnswers = options.filter((item) => item.isRight);
rightAnswers = rightAnswers.map((item) => item.text);

const questionText = document.querySelector("#question");
questionText.textContent = question;
const answers = document.querySelectorAll(".answer");
answers.forEach(defineAnswers);

function defineAnswers(item, index) {
    item.textContent = options[index].text;
    item.addEventListener("click", () => winTest());

    function winTest() {
        if (rightAnswers.includes(item.textContent)) {
            setTimeout(win, 250);
            function win() {
                victories = Number(victories) + 1
                let gameResult = document.querySelector("#game-result");
                gameResult.style.animationName = "openIcon";
                gameResult.style.display = "block";
                let positive = document.querySelector("#positive");
                positive.style.display = "block";
                setTimeout(endGameScreen, 500);
            }
        } else {
            setTimeout(defeat, 250);
            function defeat() {
                let gameResult = document.querySelector("#game-result");
                gameResult.style.animationName = "closeIcon";
                gameResult.style.display = "block";
                let negative = document.querySelector("#negative");
                negative.style.display = "block";
                setTimeout(startAnimation, 500);
            }
        }
    }
}

let canvas = document.querySelector("#animation");
let context = canvas.getContext("2d");
let imgHeight = (canvas.height / 100) * 100;
let imgWidth = (canvas.width / 100) * 100;
let img = new Image();
img.src = imagem;
img.onload = function () {
    context.drawImage(
        img,
        canvas.width / 2 - imgWidth / 2,
        canvas.height - imgHeight,
        imgWidth,
        imgHeight + 5
    );
};

//Colocar dentro da função
function startAnimation() {
    let indice = 0;
    let timeLapse = 0;
    let anim = true;
    function animation() {
        if (indice < arrayImgs.length - 1) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(
                arrayImgs[Math.ceil(indice)],
                canvas.width / 2 - imgWidth / 2,
                canvas.height - imgHeight,
                imgWidth,
                imgHeight + 5
            );
            indice += level.animVel;
        } else {
            indice = 0;
            timeLapse += 1;
            if (timeLapse == 1) {
                if (level.continueAnim === false) {
                    anim = false;
                }
                endGameScreen();
            }
        }
        if (anim === true) {
            requestAnimationFrame(animation);
        }
    }
    function start() {
        requestAnimationFrame(animation);
    }
    return start();
}
function endGameScreen() {
    if (levels.length > id) {
        sceneTransition("./scene.html?" + (Number(id) + 1) + "?" + victories);
    } else {
        translucentScreen();

        let restartBtn = document.querySelector("#restart");
        let menuBtn = document.querySelector("#back-menu");
        let pointsLabel = document.querySelector("#points");
        pointsLabel.innerText = "PONTOS: " + victories

        setTimeout(startButtons, 1000);
        function startButtons() {
            pointsLabel.style.display = "block";
            restartBtn.style.display = "block";
            menuBtn.style.display = "block";
        }

        restartBtn.addEventListener("click", () => {
            restartScene();
        });
        menuBtn.addEventListener("click", () => {
            mainMenu();
        });

        function translucentScreen() {
            let gameScreen = document.querySelector("#game-over");
            gameScreen.style.display = "block";
            setTimeout(() => {
                gameScreen.style.background = "rgba(0, 0, 0, 0.5)";
            }, 515);
        }

        function restartScene() {
            setTimeout(restart, 200);
            function restart() {
                let gameScreen = document.querySelector("#game-over");
                gameScreen.style.display = "none";
                sceneTransition(window.location.href, false);
            }
        }

        function mainMenu() {
            setTimeout(menu, 200);
            function menu() {
                let gameScreen = document.querySelector("#game-over");
                gameScreen.style.display = "none";
                sceneTransition("../index.html", false);
            }
        }
    }
}
