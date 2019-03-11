

$(window).on('resize', function(){ // Quando a janela é redimensionada, manter as proporções
    $("#circle").height($("#circle").width());  // Colocar altura = largura para os skills
    $(".skill").height($(".skill").width()); // Colocar altura = largura para o circulo
});
$(window).trigger("resize");

var i=0;
var op = 0;
var text2 = "Apaixonado por PC";
var text3 = "Futuro Engenheiro";
var text1 = "Web Developer";
var curText = "";
var textEnd = "<div id='traco'></div>";
var waitTime = 30;

setInterval(function(){
    switch(op){
        case 0:
            if(i>text1.length+waitTime){
                i = 0;
                op += 1;
                curText = "";
            }
            else if(i>=text1.length) i++;
            else{
                curText += text1[i];
                i++;
            }
            break;
        case 1:
            if(i==text2.length+waitTime){
                i = 0;
                op += 1;
                curText = "";
            }
            else if(i>=text2.length) i++;
            else{
                curText += text2[i];
                i++;
            }
            break;
        case 2:
            if(i==text3.length+waitTime){
                i = 0;
                op = 0;
                curText = "";
            }
            else if(i>=text3.length) i++;
            else{
                curText += text3[i];
                i++;
            }
            break;
    }
    $("#text_change").html(curText + textEnd);
}, 50);

$("#inicio_btn").click(function(){
    $('html, body').animate({scrollTop: $("#area_1").position().top}, 500, 'linear');
});

$("#sobre_btn").click(function(){
    $('html, body').animate({scrollTop: $("#area_2").position().top}, 500, 'linear');
});

$("#carreira_btn").click(function(){
    $('html, body').animate({scrollTop: $("#area_3").position().top}, 500, 'linear');
});

$("#habilidades_btn").click(function(){
    $('html, body').animate({scrollTop: $("#area_4").position().top}, 500, 'linear');
});





/*$(window).on("scroll touchmove", function() 
{
    if ($(document).scrollTop() >= $("#area_1").position().top && $(document).scrollTop() < $("#area_2").position().top  ) 
    {
        $('#arrow').css('background-image', 'url(images/arrow.png)');
    };
    if ($(document).scrollTop() >= $("#area_2").position().top )
    {
        $('#arrow').css('background-image', 'url(images/arrow_hover.png)');
    };

});*/

var lastScrollPos = 0;
var lock = false;

function getScrollPosition(pos){ // Função para determinar em qual área o cursor se encontra
    var area2pos = $("#area_2").position().top - $("#header").height(); // scroll top da area 2
    var area3pos = $("#area_3").position().top - $("#header").height(); // scroll top da area 3
    var area4pos = $("#area_4").position().top - $("#header").height(); // scroll top da area 4

    if(pos>area4pos) return 4;
    else if(pos>area3pos) return 3;
    else if(pos>area2pos) return 2;
    else return 1;
}


$(window).on("scroll touchmove", function(){
    var curScrollPos = $(this).scrollTop(); // posicao atual do cursor
    var pos = getScrollPosition(curScrollPos); // get area do cursor
    switch(pos){
        case 1: 
            $("#header").css("background", "none");
            $("#header").removeClass("green");
            $("#header").addClass("blue");
            $("#logo").attr("src", "images/enrico logo.png");
            $("#footer").hide();
            $("#arrow").show();
            $(".page-footer").removeClass("back-blue");
            break;
        case 2:
            $("#header").css("background-color", "rgba(255,255,255,.07");
            $("#header").removeClass("blue");
            $("#header").addClass("green");
            $("#logo").attr("src", "images/enrico logo green.png");
            $("#footer").hide();
            $("#arrow").show();
            $(".page-footer").removeClass("back-blue");
            break;
        case 3:
            $("#header").css("background-color", "rgba(0,0,0,.07");
            $("#header").removeClass("green");
            $("#header").addClass("blue");
            $("#logo").attr("src", "images/enrico logo.png");
            $("#footer").hide();
            $("#arrow").show();
            $(".page-footer").removeClass("back-blue");
            break;
        case 4:
            $("#header").css("background-color", "#09f3ae");
            $("#header").removeClass("green");
            $("#header").addClass("blue");
            $("#logo").attr("src", "images/enrico logo.png");
            $("#footer").show();
            $("#arrow").hide();
            $(".page-footer").addClass("back-blue");


            break;
    }
});
$(window).trigger("scroll");

$("#arrow").click(function(){ // seta clicada
    var curScrollPos = $(window).scrollTop(); // posicao atual do cursor
    var pos = getScrollPosition(curScrollPos);

    switch(pos){
        case 1:
            $('html, body').animate({scrollTop: $("#area_2").position().top}, 500, 'linear');
            break;
        case 2:
            $('html, body').animate({scrollTop: $("#area_3").position().top}, 500, 'linear');
            break;
        case 3:
            $('html, body').animate({scrollTop: $("#area_4").position().top}, 500, 'linear');
            break;
    }
});

/*$(window).on("scroll touchmove", function(){
    if(lock) return;
    var curScrollPos = $(this).scrollTop();

    if(curScrollPos > lastScrollPos){ // Descendo
        if (curScrollPos >= 0 && $(document).scrollTop() < $("#area_2").position().top ) 
        {
            lock = true;
            $('html, body').animate({scrollTop: $("#area_2").position().top}, 500);
            setInterval(function(){lock = false}, 500);
            //window.scrollTo( 0,  $("#area_2").position().top);
        };
    }
    else{ // Subindo
        if (curScrollPos >= $("#area_1").position().top && $(document).scrollTop() < $("#area_2").position().top + $("#area_2").height()) 
        {
            lock = true;
            $('html, body').animate({scrollTop: 0}, 500);
            setInterval(function(){lock = false}, 500);
            //window.scrollTo( 0,  $("#area_1").position().top);
        };
    }
    lastScrollPos = curScrollPos;
});*/