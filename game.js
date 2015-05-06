var count = 0;
var player1wins = 0;
var player2wins = 0;
var tiecount = 0;
$('.col').on('click', function() {
  if($(this).text() === ""){
    $(this).text(getPlayer(count));
    if (checkBoard()){
      alert(getPlayer(count) + " WINS ALL THE BOARDS");
      if (getPlayer(count) === "X"){
        player1wins = player1wins + 1;
        $("#xscore").empty();
        $("#xscore").append("X: " + player1wins);
        console.log("player1wins");
      } else {
        player2wins = player2wins + 1;
        $("#oscore").empty();
        $("#oscore").append("O: " + player2wins);
      }
      reset();
      count = 0;
    } else {
      count++;
    }
    if (count >= 9) {
      alert("the game is a tie!");
      tiecount = tiecount + 1;
      $("#tscore").empty();
      $("#tscore").append("Ties: " + tiecount);
      count = 0;
      reset();
    }
  }
});


function reset() {
  $(".col").text("");
};

function checkBoard() {
  var win = false;
  var s = [];

  for(var i = 1; i <= 9; i++){
    s.push($("#" + i).text());
  }

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

function getPlayer(count){
  if (count % 2 === 0) {
      return "X";
    } else {
      return "O";
    }
}
