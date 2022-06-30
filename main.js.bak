document.addEventListener('DOMContentLoaded', () => {

    

    const toggle = document.getElementsByClassName('toggle-btn')[0];

    const navbar = document.getElementsByClassName('navbar-links')[0];

    const grid = document.querySelector('.grid');

    let blox = Array.from(document.querySelectorAll('.grid div'));

    const width = 10;

    console.log(blox); //checking 

    const startButton = document.getElementById('Start Button');

    let timerId;

    const playerScore = document.getElementById('score');

    let score = 0;

    const gameLine = document.getElementById('lines');

    let lines = 0;

    const playerLevel = document.getElementById('levels');

    let level = 0;

    const gameMusic = document.getElementById('musik');

    const soundButton = document.getElementById('play');

    let nextRandom = 0;


    const colours = [

        'MidnightBlue',

        'Green',

        'Orange',

        'HotPink',

        'DarkRed',

        'Brown',

        'Magenta'

    ];


    //  menu

    toggle.addEventListener('click', () => {

        navbar.classList.toggle('active');

    });


    // create

    soundButton.addEventListener('click', () => {

        if (gameMusic.muted == false) {

            gameMusic.muted = true;

            soundButton.innerHTML = 'Music Paused';

        } else {

            gameMusic.muted = false;

            gameMusic.play();

            gameMusic.volume = 0.3;

            gameMusic.loop = true;

            soundButton.innerHTML = 'Music Playing';

        }

    });


    /**

     * Create the arrays for each of the 7 Tetrimino shapes

     * represented by q, p, s, z, t, b and i

     */

    const pTetrimino = [

        [2, 1, width + 1, width * 2 + 1],

        [width, width + 1, width + 2, width * 2 + 2],

        [width * 2, width * 2 + 1, width + 1, 1],

        [0, width, width + 1, width + 2]

    ];


    const qTetrimino = [

        [0, 1, width + 1, width * 2 + 1],

        [width, width + 1, width + 2, 2],

        [width * 2 + 2, width * 2 + 1, width + 1, 1],

        [width * 2, width, width + 1, width + 2]

    ];


    const sTetrimino = [

        [width * 2, width * 2 + 1, width + 1, width + 2],

        [0, width, width + 1, width * 2 + 1],

        [2, 1, width + 1, width],

        [width * 2 + 2, width + 2, width + 1, 1]

    ];


    const zTetrimino = [

        [width, width + 1, width * 2 + 1, width * 2 + 2],

        [1, width + 1, width, width * 2],

        [0, 1, width + 1, width + 2],

        [width * 2 + 1, width + 1, width + 2, 2]

    ];


    const tTetrimino = [

        [1, width, width + 1, width + 2],

        [width + 2, 1, width + 1, width * 2 + 1],

        [width * 2 + 1, width, width + 1, width + 2],

        [width, 1, width + 1, width * 2 + 1]

    ];


    

    const bTetrimino = [

        [0, 1, width, width + 1],

        [1, 2, width + 1, width + 2],

        [width + 1, width + 2, width * 2 + 1, width * 2 + 2],

        [width, width + 1, width * 2, width * 2 + 1]

    ];


    const iTetrimino = [

        [1, width + 1, width * 2 + 1, width * 3 + 1],

        [width, width + 1, width + 2, width + 3],

        [2, width + 2, width * 2 + 2, width * 3 + 2],

        [width * 2, width * 2 + 1, width * 2 + 2, width * 2 + 3]

    ];


    const theTetriminos = [pTetrimino, qTetrimino, sTetrimino, zTetrimino, tTetrimino, bTetrimino, iTetrimino];

    console.log(theTetriminos[0][0]); 


    

    let currentPosition = 4;

    let currentRotation = 0;

    console.log(currentPosition, currentRotation);


    

    let random = Math.floor(Math.random() * theTetriminos.length);

    let current = theTetriminos[random][currentRotation];

    console.log(current); 


    //add

    function draw() {

        current.forEach(index => {

            blox[currentPosition + index].classList.add('tetrimino');

            blox[currentPosition + index].style.backgroundColor = colours[random];

        });

    }

   


    

    function undraw() {

        current.forEach(index => {

            blox[currentPosition + index].classList.remove('tetrimino');

            blox[currentPosition + index].style.backgroundColor = '';

        });

    }



    

    startButton.addEventListener('click', () => {

        if (timerId) {

            clearInterval(timerId);

            timerId = null;

            startButton.innerHTML = 'Game Paused'; 

        } else {

            draw();

            timerId = setInterval(moveDown, 1000);

            startButton.innerHTML = 'Started'; 

            nextRandom = Math.floor(Math.random() * theTetriminos.length);

        }

    });


    //create a function 

    function moveDown() {

        undraw();

        currentPosition += width;

        draw();

        freeze();

    }


    

    function freeze() {

        if (current.some(index => blox[currentPosition + index + width].classList.contains('taken'))) {


            current.forEach(index => blox[currentPosition + index].classList.add('taken'));

          

            random = nextRandom;

            nextRandom = Math.floor(Math.random() * theTetriminos.length);

            current = theTetriminos[random][currentRotation];

            currentPosition = 4;

            draw();

            addScore();

            gameOver();

        }

    }


    

    function moveLeft() {

        undraw();

        const leftEdge = current.some(index => (currentPosition + index) % width === 0); 

        if (!leftEdge) currentPosition -= 1;

        if (current.some(index => blox[currentPosition + index].classList.contains('taken'))) {

            currentPosition += 1;

        }

        draw();

    }


   

    function control(event) {

        event.preventDefault(); 


        if (event.keyCode === 37) {

            moveLeft();

        } else if (event.keyCode === 39) {

            moveRight();

        } else if (event.keyCode === 40) {

            moveDown();

        } else if (event.keyCode === 38) {

            turnShape();

        }

    }


    

    document.addEventListener('keydown', control);


    

    const leftButton = document.getElementById('links');

    const rotateButton = document.getElementById('Drehe');

    const rightButton = document.getElementById('rechts');

    const downButton = document.getElementById('unten');



    leftButton.addEventListener('click', () => {

        moveLeft();

    });

    rotateButton.addEventListener('click', () => {

        turnShape();

    });

    rightButton.addEventListener('click', () => {

        moveRight();

    });

    downButton.addEventListener('click', () => {

        moveDown();

    });


    

    function moveRight() {

        undraw();

        const rightEdge = current.some(index => (currentPosition + index) % width === width - 1); 

        if (!rightEdge) currentPosition += 1;

        if (current.some(index => blox[currentPosition + index].classList.contains('taken'))) {

            currentPosition -= 1;

        }

        draw();

    }


    

    function turnShape() {

        undraw();  

        currentRotation++; 

        if (currentRotation === current.length) {

            currentRotation = 0;  

        }

        current = theTetriminos[random][currentRotation];

        draw();  

    }


    


    

    /** I tried a variety of methods to create a function whereby the players score 

    *  would be taken from the gameOver() and passed to a finalScore that could be stored locally 

   *************************************************************************************************************/

    //create a high score 

    const playerName = document.getElementById('playerName');

    const saveScoreBtn = document.getElementById('save-score');

    const finalScore = document.getElementById('finalScore');

    const mostRecentScore = localStorage.getItem('mostRecentScore');

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    finalScore.innerText = mostRecentScore;


    playerName.addEventListener('keyup', () => {

        saveScoreBtn.disabled = !playerName.value; //save button  

    });


    saveScore = (e) => {

        e.preventDefault();


        const score = {

            score: mostRecentScore,

            name: playerName.value,

        };

        highScores.push(score);

        highScores.sort((a, b) => b.score - a.score);

        highScores.splice(3);


        localStorage.setItem('highScores', JSON.stringify(highScores));  //stores the players 

        window.location.assign( ' / '); 

    };


    //create function 

    function addScore() {

        for (let i = 0; i < 199; i += width) { 

            const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9];


            if (row.every(index => blox[index].classList.contains('taken'))) {

                score += 15; 

                playerScore.innerHTML = score;

                lines += 1; 

                gameLine.innerHTML = lines; {

                    if (lines % 4 === 0 && lines < 1001) { 

                        level += 1;

                        score += 100; 

                        playerScore.innerHTML = score;

                        playerLevel.innerHTML = level;

                    }

                }


                row.forEach(index => {

                    blox[index].classList.remove('taken');

                    blox[index].classList.remove('tetrimino');

                    blox[index].style.backgroundColor = '';

                });

                const bloxRemoved = blox.splice(i, width);

                blox = bloxRemoved.concat(blox);

                blox.forEach(cell => grid.appendChild(cell));

            }

        }

    }


    

    function gameOver() {

        if (current.some(index => blox[currentPosition + index].classList.contains('taken'))) { 

            clearInterval(timerId); 

            startButton.innerHTML = 'Game Over';

            startButton.style.backgroundColor = 'red';

            startButton.style.color = 'white';

            startButton.disabled = true; 

            localStorage.setItem("mostRecentScore", score);

            

            return window.location.assign("indexT.html"); 

        }

    }


    

    

    function validateForm() {

        let x = document.getElementById('PlayerName').value;

         if (x == "" ) {

            alert(' You must enter a name!');

            return false;

         }

         

    }

    validateForm();


});


