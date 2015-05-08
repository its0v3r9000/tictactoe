var count = 0;
var player1wins = 0;
var player2wins = 0;
var tiecount = 0;
var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg'];

//Selecting our "boxes". Runs checkboard on each click, checks for win state, checks for tie, then counts/resets the board.
$('.col').on('click', function() {
  if($(this).text() === ""){
    $(this).css("fontSize", 60)
    $(this).text(getPlayer(count)).animate({
     fontSize : "140px"
   }, 2000);
    if (checkBoard()){
      //alert(getPlayer(count) + " WINS ALL THE BOARDS");
      if (getPlayer(count) === "X"){
        player1wins = player1wins + 1;
        $("#xscore").empty();
        $("#xscore").append("X: " + player1wins);
        $("#whowon").empty();
        $("#whowon").append("Player X won!")
      } else {
        player2wins = player2wins + 1;
        $("#oscore").empty();
        $("#oscore").append("O: " + player2wins);
        $("#whowon").empty();
        $("#whowon").append("Player O won!")
      }
      reset();
      count = 0;
    } else {
      count++;
    }
    if (count >= 9) {
      //alert("the game is a tie!");
      tiecount = tiecount + 1;
      $("#tscore").empty();
      $("#tscore").append("Ties: " + tiecount);
      $("#whowon").empty();
      $("#whowon").append("The game was a tie")
      count = 0;
      reset();
    }
  }
});

//simple reset function using jquery. Sets the text in each col to blank. Changes the background image.
function reset() {
  $('#game_board').hide("explode", {pieces: 16}, 500 );
  $('#game_board').show("explode", {pieces: 16 }, 500 );
  $(".col").text("");
  $('html').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
};

//the win state check. Set win to false and proceed to check the different win states.
function checkBoard() {
  var win = false;

//we see if a square is NOT blank, and hten check to see if the connected squares are the same (in this case diagonal)
  if ($("#1").text() !== "" &&
    $("#5").text() === $("#1").text() &&
    $("#9").text() === $("#1").text()){
      win = true;
    }

  if ($("#3").text() !== "" &&
    $("#5").text() === $("#3").text() &&
    $("#7").text() === $("#3").text()){
      win = true;
    }
//here we use some concatotations of strings to check each row and coloum in a loop, saving us from writing out each row/col.
//we count three times, since there are three of each row/col. Then we start at one, and add the starting column and then * by the amount we want to move.
// i starts at 0 so our first pass through is the first row. (i * 3 = 0)
  for (i = 0; i < 3; i++){
    if ($("#" + (1 + (i * 3))).text() !== "" &&
      $("#" + (2 + (i * 3))).text() === $("#" + (1 + (i * 3))).text() &&
      $("#" + (3 + (i * 3))).text() === $("#" + (1 + (i * 3))).text()){
      win = true;
    }
    if ($("#" + (1 + i )).text() !== "" &&
      $("#" + (4 + i )).text() === $("#" + (1 + i)).text() &&
      $("#" + (7 + i )).text() === $("#" + (1 + i)).text()){
      win = true;
    }
  }
  return win;
}

//here is a function to check which turn it is. It was originally in the main part of the script to hard set the turn, but it was moved out because it allows
//us to call it later to check whose turn it is. Useful for doing "who wins" strings/+ the win counter.
function getPlayer(count){
  if (count % 2 === 0) {
      return "X";
    } else {
      return "O";
    }
}













