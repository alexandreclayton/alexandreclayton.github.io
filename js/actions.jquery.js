$(document).ready(function(){
  //alert("Olá mundo JQUERY!!");

  $("#btnContraste").click(function(){
    $("html").toggleClass("contraste");
  });

  $(".readmore").hide();

  $(".js-texto a").click(function(e){
    e.preventDefault();
    $(".readmore").slideToggle("slow", function(){
      alert("Opa");
    });
  });

  $("#btnFonteMais").click(function(){
    $("body").animate({
      fontSize: "+=0.5"
    }, 10);
  });

  $("#btnFonteMenos").click(function(){
    $("body").animate({
      fontSize: "-=0.5"
    }, 10);
  });

  $(".js-bounce").click(function(){
    $("#titulo").animate({
      fontSize: "+=5"
    }, 500);
  });
  
});
