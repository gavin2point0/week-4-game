var winCount = 0;
var lossCount = 0;
var running = false;



function run() {
    var currentNum = 0;
    var targetNum = Math.floor((Math.random() * 100) + 20);
    $('.target-num').text(targetNum);
    $('.num-button').removeAttr('value');
    var winScreen = false;
    


    $('.game-content').off().on('click', '.num-button', function () {
        if (!$(this).attr('value') && !winScreen) {
            $(this).attr('value', Math.floor(Math.random() * 12) + 1);
            currentNum += parseInt($(this).attr('value'));

            
         
        } else if ($(this).attr('value') && !winScreen){
            currentNum += parseInt($(this).attr('value'));

            
            
        }

   
    if (currentNum == targetNum) {
        $('.target-num').html("<h1>You Win!</h1><h3>Press any key to play again</h3>");
        winScreen = true;
        winCount++;
        $('.wins').text('Wins: ' + winCount);
        currentNum = 0;
        running = false;


    } else if (currentNum > targetNum) {
        $('.target-num').html("<h1>You Lose!</h1><h3>Press any key to play again</h3>");
        winScreen = true;
        lossCount++;
        $('.losses').text('Losses: ' + lossCount);
        currentNum = 0;
        running = false;

    }
    $('.current-num').text("Current Number: " + currentNum);
});

};

$('body').keyup(function startGame() {
    if (!running) {
    running = true;
    run();
    }
});

