$(document).ready(fucntion(){
  $('a').click(function(){
    var target= $(this.hash);
    $('html, body').animate({
      scroll.Top: target.offest().top},1000);
  });

});
