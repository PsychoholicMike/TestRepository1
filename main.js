var turn = 'X';
var round = 0;

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
$('Aone').click(function() {
   		switch (turn) {
      case 'X':
      	if (Aone === 'BLANK') {
      	turn = 'O';
        Aone = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Aone === 'BLANK')   {    
      	turn = 'X';
        Aone = 'O';
      	$(this).addClass('O');}
        break;
      }
   });
   
$('Atwo').click(function() {
switch (turn) {
      case 'X':
      	if (Atwo === 'BLANK') {
      	turn = 'O';
        Atwo = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Atwo === 'BLANK')   {    
      	turn = 'X';
        Atwo = 'O';
      	$(this).addClass('O');}
        break;
      }
   });
   
$('Athree').click(function() {
switch (turn) {
      case 'X':
      	if (Athree === 'BLANK') {
      	turn = 'O';
        Athree = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Athree === 'BLANK')   {    
      	turn = 'X';
        Athree = 'O';
      	$(this).addClass('O');}
        break;
      }
   });
   
   
$('Bone').click(function() {
switch (turn) {
      case 'X':
      	if (Bone === 'BLANK') {
      	turn = 'O';
        Bone = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Bone === 'BLANK')   {    
      	turn = 'X';
        Bone = 'O';
      	$(this).addClass('O');}
        break;
      }
   });
   
$('Btwo').click(function() {
switch (turn) {
      case 'X':
      	if (Btwo === 'BLANK') {
      	turn = 'O';
        Btwo = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Btwo === 'BLANK')   {    
      	turn = 'X';
        Btwo = 'O';
      	$(this).addClass('O');}
        break;
      }
   });
   
$('Bthree').click(function() {
switch (turn) {
      case 'X':
      	if (Bthree === 'BLANK') {
      	turn = 'O';
        Bthree = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Bthree === 'BLANK')   {    
      	turn = 'X';
        Bthree = 'O';
      	$(this).addClass('O');}
        break;
      }
   });
   
$('Cone').click(function() {
switch (turn) {
      case 'X':
      	if (Cone === 'BLANK') {
      	turn = 'O';
        Cone = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Cone === 'BLANK')   {    
      	turn = 'X';
        Cone = 'O';
      	$(this).addClass('O');}
        break;
      }
   });
   
$('Ctwo').click(function() {
switch (turn) {
      case 'X':
      	if (Ctwo === 'BLANK') {
      	turn = 'O';
        Ctwo = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Ctwo === 'BLANK')   {    
      	turn = 'X';
        Ctwo = 'O';
      	$(this).addClass('O');}
        break;
      }
   });
   
$('Cthree').click(function() {
switch (turn) {
      case 'X':
      	if (Cthree === 'BLANK') {
      	turn = 'O';
        Cthree = 'X';
      	$(this).addClass('X');}
        break;
      case 'O':
      	if (Cthree === 'BLANK')   {    
      	turn = 'X';
        Cthree = 'O';
      	$(this).addClass('O');}
        break;

      }
   });
});
