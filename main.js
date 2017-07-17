var turn = 'X';
var round = 1;

var Aone = 'BLANK';
var Atwo = 'BLANK';
var Athree = 'BLANK';

var Bone = 'BLANK';
var Btwo = 'BLANK';
var Bthree = 'BLANK';

var Cone = 'BLANK';
var Ctwo = 'BLANK';
var Cthree = 'BLANK';

$(document).ready(function() {

$('Roundcounter').html("Round " + round);

$('Aone').click(function() {
   		switch (turn) {
      case 'X':
      	if (Aone === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Aone = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Aone === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Aone = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;
      }
   });
   
$('Atwo').click(function() {
switch (turn) {
      case 'X':
      	if (Atwo === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Atwo = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Atwo === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Atwo = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;
      }
   });
   
$('Athree').click(function() {
switch (turn) {
      case 'X':
      	if (Athree === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Athree = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Athree === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Athree = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;
      }
   });
   
   
$('Bone').click(function() {
switch (turn) {
      case 'X':
      	if (Bone === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Bone = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Bone === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Bone = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;
      }
   });
   
$('Btwo').click(function() {
switch (turn) {
      case 'X':
      	if (Btwo === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Btwo = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Btwo === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Btwo = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;
      }
   });
   
$('Bthree').click(function() {
switch (turn) {
      case 'X':
      	if (Bthree === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Bthree = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Bthree === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Bthree = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;
      }
   });
   
$('Cone').click(function() {
switch (turn) {
      case 'X':
      	if (Cone === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Cone = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Cone === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Cone = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;
      }
   });
   
$('Ctwo').click(function() {
switch (turn) {
      case 'X':
      	if (Ctwo === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Ctwo = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Ctwo === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Ctwo = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;
      }
   });
   
$('Cthree').click(function() {
switch (turn) {
      case 'X':
      	if (Cthree === 'BLANK') {
      	turn = 'O';
        $('statusbox').html("O turn");
        Cthree = 'X';
      	$(this).addClass('X');
        XVictory();}
        break;
      case 'O':
      	if (Cthree === 'BLANK')   {    
      	turn = 'X';
        $('statusbox').html("X turn");
        Cthree = 'O';
      	$(this).addClass('O');
        OVictory();}
        break;

      }
   });
});

function XVictory() {
	if (round < 10) { 
  round = round + 1;
	$('Roundcounter').html("Round " + round);
  
  if (Aone === 'X' && Atwo === 'X' && Athree === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Aone === 'X' && Btwo === 'X' && Cthree === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Aone === 'X' && Bone === 'X' && Cone === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Atwo === 'X' && Btwo === 'X' && Ctwo === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Athree === 'X' && Bthree === 'X' && Cthree === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Cone === 'X' && Btwo === 'X' && Athree === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Atwo === 'X' && Btwo === 'X' && Ctwo === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Athree === 'X' && Bthree === 'X' && Cthree === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Bone === 'X' && Btwo === 'X' && Bthree === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Cone === 'X' && Ctwo === 'X' && Cthree === 'X'){
  $('StatusBox').html("X WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else {
  if (round === 10) {
  $('StatusBox').html("DRAW");
  $('Roundcounter').html("Game Over");
  }
  }
  
  }

};

function OVictory() {
	if (round < 10) { 
  round = round + 1;
	$('Roundcounter').html("Round " + round);
  
  if (Aone === 'O' && Atwo === 'O' && Athree === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Aone === 'O' && Btwo === 'O' && Cthree === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Aone === 'O' && Bone === 'O' && Cone === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Atwo === 'O' && Btwo === 'O' && Ctwo === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Athree === 'O' && Bthree === 'O' && Cthree === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Cone === 'O' && Btwo === 'O' && Athree === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Atwo === 'O' && Btwo === 'O' && Ctwo === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Athree === 'O' && Bthree === 'O' && Cthree === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Bone === 'O' && Btwo === 'O' && Bthree === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else if (Cone === 'O' && Ctwo === 'O' && Cthree === 'O'){
  $('StatusBox').html("O WINS");
  $('Roundcounter').html("Game Over");
  }
  
  else {
  if (round === 10) {
  $('StatusBox').html("DRAW");
  $('Roundcounter').html("Game Over");
  }
  }
  
  }

};
