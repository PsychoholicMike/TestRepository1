var turn = 'X';

$(document).ready(function() {
$('div').click(function() {
   		switch (turn) {
      case 'X':
      	turn = 'O';
      	$(this).addClass('X');
        break;
      case 'O':
      	turn = 'X';
      	$(this).addClass('O');
        break;
      }
   });
});
