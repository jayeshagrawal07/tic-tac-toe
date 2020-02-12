var a = 1;
var b = 1;
var x = 'fa-remove';
var o = 'fa-circle-o';
var input = [0,0,0,0,0,0,0,0,0];
$('#lt').click(function(){
  if(a%2===0){
    $('#lti').addClass(o);
    input[0]=1;
  }
  else{
    $('#lti').addClass(x);
    input[0]=2;
  }
  a++;
  $('#lt').off('click');
  b = check(input,b);
});
$('#mt').click(function(){
  if(a%2===0){
    $('#mti').addClass(o);
    input[1]=1;
  }
  else{
    $('#mti').addClass(x);
    input[1]=2;
  }
  a++;
  $('#mt').off('click');
  b = check(input,b);
});
$('#rt').click(function(){
  if(a%2===0){
    $('#rti').addClass(o);
    input[2]=1;
  }
  else{
    $('#rti').addClass(x);
    input[2]=2;
  }
  a++;
  $('#rt').off('click');
  b = check(input,b);
});
$('#lm').click(function(){
  if(a%2===0){
    $('#lmi').addClass(o);
    input[3]=1;
  }
  else{
    $('#lmi').addClass(x);
    input[3]=2;
  }
  a++;
  $('#lm').off('click');
  b = check(input,b);
});
$('#mm').click(function(){
  if(a%2===0){
    $('#mmi').addClass(o);
    input[4]=1;
  }
  else{
    $('#mmi').addClass(x);
    input[4]=2;
  }
  a++;
  $('#mm').off('click');
  b = check(input,b);
});
$('#rm').click(function(){
  if(a%2===0){
    $('#rmi').addClass(o);
    input[5]=1;
  }
  else{
    $('#rmi').addClass(x);
    input[5]=2;
  }
  a++;
  $('#rm').off('click');
  b = check(input,b);
});
$('#lb').click(function(){
  if(a%2===0){
    $('#lbi').addClass(o);
    input[6]=1;
  }
  else{
    $('#lbi').addClass(x);
    input[6]=2;
  }
  a++;
  $('#lb').off('click');
  b = check(input,b);
});
$('#mb').click(function(){
  if(a%2===0){
    $('#mbi').addClass(o);
    input[7]=1;
  }
  else{
    $('#mbi').addClass(x);
    input[7]=2;
  }
  a++;
  $('#mb').off('click');
  b = check(input,b);
});
$('#rb').click(function(){
  if(a%2===0){
    $('#rbi').addClass(o);
    input[8]=1;
  }
  else{
    $('#rbi').addClass(x);
    input[8]=2;
  }
  a++;
  $('#rb').off('click');
  b = check(input,b);
});

function check(a,b){
  if(a[0]===1 && a[3]===1 && a[6]===1){
    $('p').css("visibility", "visible");
    $('#title').text('Player 2 Win');
    $('.box').off('click');
    end();
  }
  else if(a[0]===2 && a[3]===2 && a[6]===2){
    $('p').css("visibility", "visible");
    $('#title').text('Player 1 Win');
    $('.box').off('click');
    end();
  }
  else if(a[1]===1 && a[4]===1 && a[7]===1){
    $('p').css("visibility", "visible");
    $('#title').text('Player 2 Win');
    $('.box').off('click');
    end();
  }
  else if(a[1]===2 && a[4]===2 && a[7]===2){
    $('#title').text('Player 1 Win');
    $('.box').off('click');
    end();
  }
  else if(a[2]===1 && a[5]===1 && a[8]===1){
    $('p').css("visibility", "visible");
    $('#title').text('Player 2 Win');
    $('.box').off('click');
    end();
  }
  else if(a[2]===2 && a[5]===2 && a[8]===2){
    $('p').css("visibility", "visible");
    $('#title').text('Player 1 Win');
    $('.box').off('click');
    end();
  }
  else if(a[0]===1 && a[1]===1 && a[2]===1){
    $('p').css("visibility", "visible");
    $('#title').text('Player 2 Win');
    $('.box').off('click');
    end();
  }
  else if(a[0]===2 && a[1]===2 && a[2]===2){
    $('p').css("visibility", "visible");
    $('#title').text('Player 1 Win');
    $('.box').off('click');
    end();
  }
  else if(a[3]===1 && a[4]===1 && a[5]===1){
    $('p').css("visibility", "visible");
    $('#title').text('Player 2 Win');
    $('.box').off('click');
    end();
  }
  else if(a[3]===2 && a[4]===2 && a[5]===2){
    $('p').css("visibility", "visible");
    $('#title').text('Player 1 Win');
    $('.box').off('click');
    end();
  }
  else if(a[6]===1 && a[7]===1 && a[8]===1){
    $('p').css("visibility", "visible");
    $('#title').text('Player 2 Win');
    $('.box').off('click');
    end();
  }
  else if(a[6]===2 && a[7]===2 && a[8]===2){
    $('p').css("visibility", "visible");
    $('#title').text('Player 1 Win');
    $('.box').off('click');
    end();
  }
  else if(a[0]===1 && a[4]===1 && a[8]===1){
    $('p').css("visibility", "visible");
    $('#title').text('Player 2 Win');
    $('.box').off('click');
    end();
  }
  else if(a[0]===2 && a[4]===2 && a[8]===2){
    $('p').css("visibility", "visible");
    $('#title').text('Player 1 Win');
    $('.box').off('click');
    end();
  }
  else if(a[2]===1 && a[4]===1 && a[6]===1){
    $('p').css("visibility", "visible");
    $('#title').text('Player 2 Win');
    $('.box').off('click');
    end();
  }
  else if(a[2]===2 && a[4]===2 && a[6]===2){
    $('p').css("visibility", "visible");
    $('#title').text('Player 1 Win');
    $('.box').off('click');
    end();
  }
  else{
    b++;
    if(b===10){
      $('#title').text('Draw');
      end();
    }
    return b;
  }
}
function end(){
  $('#reload').css("visibility", "visible");
  $('#reload').click(function() {
  location.reload();
  });
}
