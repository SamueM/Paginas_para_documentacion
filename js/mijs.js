$(function(){
    var encabezado = document.getElementById("header");
    var headroom = new Headroom(encabezado);
    headroom.init();

    var boton =  document.getElementById("boton");
    boton.addEventListener("click", function(){
        $("#navegacion").toggle();
    });
    $(window).on("resize", function(){
        if($(window).width() > 901){
            $("#navegacion").css("display", "block");
        } else {
            $("#navegacion").css("display", "none");
        }  
    });
});