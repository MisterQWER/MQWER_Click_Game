/**
 * @author Parham
 * 
 * This file contains the clicking game
 */
var grid = ({

    level: 1,
    delay: 3000,
    timer: null,
    target: 0,
    score: 0,
    didClick: false,
    gameover: false
});

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

intro();







/**
 * this method will print a message on the canvas containing the score
 * and after 1.2 seconds it will show the next rectangle to click
 */
function intro()    {

    if(!grid.gameover)  {
        ctx.font = "60px Arial";
        ctx.fillStyle = "red";
        ctx.strokeStyle = "vertigo";
        ctx.fillText("level: " + grid.level + " , Score: " + grid.score, 120, 200);
        ctx.strokeText("level: " + grid.level + " , Score: " + grid.score, 120, 200);

        setTimeout(showGrid, 1200);
    }
}




/**
 * this method will clear the whole canvas and replace it 
 * with the new grid according to the level
 * if all the levels are passed then the win message will be shown
 */
function showGrid() {


    ctx.clearRect(0, 0, 1200, 600);
    
    if(!grid.gameover)  {

        if(grid.level == 1) {
            playLevelOne();
        }
        else if(grid.level == 2) {
            playLevelTwo();
        }
        else if(grid.level == 3)    {
            playLevelThree();
        }
        else if(grid.level == 4)    {
            playLevelFour();
        }
        else if(grid.level == 5)    {
            playLevelFive();
        }
        else if(grid.level == 6)    {
            playLevelSix();
        }
        else if(grid.level == "ULTIMATE")    {
            playUltimate();
        }

        else{
            ctx.font = "60px Arial";
            ctx.fillStyle = "midnightBlue";
            ctx.strokeStyle = "vertigo";
            ctx.fillText("You have completed the game, Well done!", 30, 300);
            ctx.strokeText("You have completed the game, Well done!", 30, 300);

        }
    }
}










/**
 * the method for initiating level 1 grid then we will randomize the square using draw method
 * will wait for the user to click until the timer runs out
 * if the user clicks we will invoke the checker method
 * if the user fails to click we will invoke the gameOver method
 */
function playLevelOne() {


    ctx.beginPath();
    ctx.strokeStyle = "black";

    for(let i = 0; i < 4; i++)  {
        ctx.strokeRect(600 * (i % 2), 300 * Math.floor(i / 2), 600, 300);
    }
        
    draw();
    grid.timer = setTimeout(gameOver, grid.delay);
    canvas.addEventListener('mousedown', checker);



}






/**
 * the method for initiating level 2 grid then we will randomize the square using draw method
 * will wait for the user to click until the timer runs out
 * if the user clicks we will invoke the checker method
 * if the user fails to click we will invoke the gameOver method
 */
function playLevelTwo() {

    ctx.beginPath();
    ctx.strokeStyle = "black";

    for(let i = 0; i < 9; i++)  {
        ctx.strokeRect(400 * (i % 3), 200 * Math.floor(i / 3), 400, 200);
    }

    draw();
    grid.timer = setTimeout(gameOver, grid.delay);
    
    canvas.addEventListener('mousedown', checker);


}





/**
 * the method for initiating level 3 grid then we will randomize the square using draw method
 * will wait for the user to click until the timer runs out
 * if the user clicks we will invoke the checker method
 * if the user fails to click we will invoke the gameOver method
 */
function playLevelThree()   {

    ctx.beginPath();
    ctx.strokeStyle = "black";

    for(let i = 0; i < 16; i++)  {
        ctx.strokeRect(300 * (i % 4), 150 * Math.floor(i / 4), 300, 150);
    }
        
    draw();
    grid.timer = setTimeout(gameOver, grid.delay);
    
    canvas.addEventListener('mousedown', checker);
}




/**
 * the method for initiating level 4 grid then we will randomize the square using draw method
 * will wait for the user to click until the timer runs out
 * if the user clicks we will invoke the checker method
 * if the user fails to click we will invoke the gameOver method
 */
function playLevelFour()   {

    ctx.beginPath();
    ctx.strokeStyle = "black";

    for(let i = 0; i < 25; i++)  {
        ctx.strokeRect(240 * (i % 5), 120 * Math.floor(i / 5), 240, 120);
    }
        
    draw();
    grid.timer = setTimeout(gameOver, grid.delay);
    canvas.addEventListener('mousedown', checker);
}





/**
 * the method for initiating level 5 grid then we will randomize the square using draw method
 * will wait for the user to click until the timer runs out
 * if the user clicks we will invoke the checker method
 * if the user fails to click we will invoke the gameOver method
 */
function playLevelFive()   {

    ctx.beginPath();
    ctx.strokeStyle = "black";

    for(let i = 0; i < 36; i++)  {
        ctx.strokeRect(200 * (i % 6), 100 * Math.floor(i / 6), 200, 100);
    }
        
    draw();
    grid.timer = setTimeout(gameOver, grid.delay);
    canvas.addEventListener('mousedown', checker);
}




/**
 * the method for initiating level 6 grid then we will randomize the square using draw method
 * will wait for the user to click until the timer runs out
 * if the user clicks we will invoke the checker method
 * if the user fails to click we will invoke the gameOver method
 */
function playLevelSix()   {

    ctx.beginPath();
    ctx.strokeStyle = "black";

    for(let i = 0; i < 49; i++)  {
        ctx.strokeRect(1200/7 * (i % 7), 600/7 * Math.floor(i / 7), 1200/7, 600/7);
    }
        
    draw();
    grid.timer = setTimeout(gameOver, grid.delay);
    canvas.addEventListener('mousedown', checker);
}



/**
 * the method for initiating ULTIMATE LEVEL grid then we will randomize the square using draw method
 * will wait for the user to click until the timer runs out
 * if the user clicks we will invoke the checker method
 * if the user fails to click we will invoke the gameOver method
 */
function playUltimate()   {

    ctx.beginPath();
    ctx.strokeStyle = "black";

    for(let i = 0; i < 100; i++)  {
        ctx.strokeRect(120 * (i % 10), 60 * Math.floor(i / 10), 120, 60);
    }
        
    draw();
    grid.timer = setTimeout(gameOver, grid.delay);
    canvas.addEventListener('mousedown', checker);
}






/**
 * this method will fill the rectangle to be pressed at each level
 */
function draw() {
    
    grid.didClick = false;

    if(grid.level == 1) {

        ctx.fillStyle = "black";
        grid.target = Math.floor((Math.random() * 4));
        ctx.fillRect(600 * (grid.target % 2), 300 * Math.floor(grid.target / 2) , 600, 300);
    }

    else if(grid.level == 2) {

        ctx.fillStyle = "violet";
        grid.target = Math.floor((Math.random() * 9));
        ctx.fillRect(400 * (grid.target % 3), 200 * Math.floor(grid.target / 3) , 400, 200);
    }


    else if(grid.level == 3) {
        ctx.fillStyle = "midnightblue";
        grid.target = Math.floor((Math.random() * 16));
        ctx.fillRect(300 * (grid.target % 4), 150 * Math.floor(grid.target / 4) , 300, 150);

    }

    else if(grid.level == 4)    {
        ctx.fillStyle = "gold";
        grid.target = Math.floor((Math.random() * 25));
        ctx.fillRect(240 * (grid.target % 5), 120 * Math.floor(grid.target / 5) , 240, 120);

    }
    else if(grid.level == 5)    {
        ctx.fillStyle = "darkred";
        grid.target = Math.floor((Math.random() * 36));
        ctx.fillRect(200 * (grid.target % 6), 100 * Math.floor(grid.target / 6) , 200, 100);

    }

    else if(grid.level == 6)    {
        ctx.fillStyle = "cyan";
        grid.target = Math.floor((Math.random() * 49));
        ctx.fillRect(1200/7 * (grid.target % 7), 600/7 * Math.floor(grid.target / 7) , 1200/7, 600/7);

    }

    else if(grid.level == "ULTIMATE")    {
        ctx.fillStyle = "black";
        grid.target = Math.floor((Math.random() * 100));
        ctx.fillRect(120 * (grid.target % 10), 60 * Math.floor(grid.target / 10) , 120, 60);

    }


}






/**
 * this method will check if the square has been pressed or not
 * pressed ==> score goes up, delay goes down(often) and intro function will get invoked after 1 second of clicking
 *              and the timer in the calling method will stop
 * 
 * not pressed ==> the timer in the calling method will finish and the game will be over
 */
function checker()  {

    if(grid.level == 1) {

        if(event.offsetX >= (600 * (grid.target % 2)) && event.offsetX <= (600 * (grid.target % 2) + 600) 
                            && event.offsetY >= (300 * Math.floor(grid.target / 2))  && event.offsetY <= (300 * Math.floor(grid.target / 2) + 300) && !grid.gameover)    {
            
            clearTimeout(grid.timer);
            ctx.clearRect(600 * (grid.target % 2) + 1, 300 * Math.floor(grid.target / 2) + 1, 600 - 2, 300 - 2);

            if(!grid.didClick)  {
                grid.score++;
                grid.delay -= 300;
                grid.didClick = true;
                setTimeout(intro, 1000);
                
            }

        }

    }

    else if(grid.level == 2)    {

        if(event.offsetX >= (400 * (grid.target % 3)) && event.offsetX <= (400 * (grid.target % 3) + 400) 
            && event.offsetY >= (200 * Math.floor(grid.target / 3))  && event.offsetY <= (200 * Math.floor(grid.target / 3) + 200) && !grid.gameover)    {

            clearTimeout(grid.timer);
            ctx.clearRect(400 * (grid.target % 3) + 1, 200 * Math.floor(grid.target / 3) + 1, 400 - 2, 200 - 2);

            if(!grid.didClick)  {
                grid.score++;
                grid.delay -= 100;
                grid.didClick = true;
                setTimeout(intro, 1000);
                
            }
        }
    }


    else if(grid.level == 3)   {

        if(event.offsetX >= (300 * (grid.target % 4)) && event.offsetX <= (300 * (grid.target % 4) + 300) 
            && event.offsetY >= (150* Math.floor(grid.target / 4))  && event.offsetY <= (150 * Math.floor(grid.target / 4) + 150) && !grid.gameover)    {

            clearTimeout(grid.timer);
            ctx.clearRect(300 * (grid.target % 4) + 1, 150 * Math.floor(grid.target / 4) + 1, 300 - 2, 150 - 2);
            if(!grid.didClick)  {
                grid.score++;
                grid.delay -= 40;
                grid.didClick = true;
                setTimeout(intro, 1000);
                
            }
        }
    }


    else if(grid.level == 4)   {

        if(event.offsetX >= (240 * (grid.target % 5)) && event.offsetX <= (240 * (grid.target % 5) + 240) 
            && event.offsetY >= (120* Math.floor(grid.target / 5))  && event.offsetY <= (120 * Math.floor(grid.target / 5) + 120) && !grid.gameover)    {

            clearTimeout(grid.timer);
            ctx.clearRect(240 * (grid.target % 5) + 1, 120 * Math.floor(grid.target / 5) + 1, 240 - 2, 120 - 2);
            if(!grid.didClick)  {
                grid.score++;
                grid.delay -= 20;
                grid.didClick = true;
                setTimeout(intro, 1000);
                
            }
        }
    }

    else if(grid.level == 5)   {

        if(event.offsetX >= (200 * (grid.target % 6)) && event.offsetX <= (200 * (grid.target % 6) + 200) 
            && event.offsetY >= (100* Math.floor(grid.target / 6))  && event.offsetY <= (100 * Math.floor(grid.target / 6) + 100) && !grid.gameover)    {

            clearTimeout(grid.timer);
            ctx.clearRect(200 * (grid.target % 6) + 1, 100 * Math.floor(grid.target / 6) + 1, 200 - 2, 100 - 2);
            if(!grid.didClick)  {
                grid.score++;
                grid.didClick = true;
                setTimeout(intro, 1000);
                
            }
        }
    }

    else if(grid.level == 6)   {

        if(event.offsetX >= (1200/7 * (grid.target % 7)) && event.offsetX <= (1200/7 * (grid.target % 7) + 1200/7) 
            && event.offsetY >= (600/7* Math.floor(grid.target / 7))  && event.offsetY <= (600/7 * Math.floor(grid.target / 7) + 600/7) && !grid.gameover)    {

            clearTimeout(grid.timer);
            ctx.clearRect(1200/7 * (grid.target % 7) + 1, 600/7 * Math.floor(grid.target / 7) + 1, 1200/7 - 2, 600/7 - 2);
            if(!grid.didClick)  {
                grid.score++;
                grid.didClick = true;
                setTimeout(intro, 1000);
                
            }
        }
    }

    else if(grid.level == "ULTIMATE")   {

        if(event.offsetX >= (120 * (grid.target % 10)) && event.offsetX <= (120 * (grid.target % 10) + 120) 
            && event.offsetY >= (60 * Math.floor(grid.target / 10))  && event.offsetY <= (60 * Math.floor(grid.target / 10) + 60) && !grid.gameover)    {

            clearTimeout(grid.timer);
            ctx.clearRect(120 * (grid.target % 10) + 1, 60 * Math.floor(grid.target / 10) + 1, 120 - 2, 60 - 2);
            if(!grid.didClick)  {
                grid.score++;
                grid.didClick = true;
                setTimeout(intro, 1000);
                
            }
        }
    }



    
    if(grid.score <= 4) {
        grid.level = 1;
    }
    else if(grid.score < 10)     {
        grid.level = 2;    
    }
    else if(grid.score < 16)    {
        grid.level = 3;
    }
    else if(grid.score < 31) {
        grid.level = 4;
    }
    else if(grid.score < 51)   {
        grid.level = 5;
    }
    else if(grid.score < 71)   {
        grid.level = 6;
    }
    else if(grid.score < 101)   {
        grid.level = "ULTIMATE";
    }
    else{
        grid.level = 0;
    }

    console.log(grid.delay);
}








/**
 * the method will finish the game
 * after this method if you want to play the game again you can reload the page
 */
function gameOver() {
    grid.gameover = true;
    ctx.clearRect(0,0, 1200, 600);
    ctx.font = "60px Arial";
    ctx.fillStyle = "red";
    ctx.strokeStyle = "vertigo";
    ctx.fillText("GAME OVER! " + "SCORE: " + grid.score, 200, 300);
    ctx.strokeText("GAME OVER! " + "SCORE: " + grid.score, 200, 300);
}
