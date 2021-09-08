//funcao aumenta e diminui imagem cards
//imagem card1

$(document).ready(function() {//função executada apos carregar documento

    //imagem card1

    $("#slide1").mouseenter(function(){ //função executada qnd usuario coloca mouse emcima imagem
    $("#slide1").animate({width:"25rem", height:"21rem"}); //efeito animate
    });
    $("#slide1").mouseout(function(){ //função executada qnd usuario tira mouse emcima imagem
    $("#slide1").animate({width:"25rem"}).animate({height:"19rem"}); //efeito animate
    });
    //imagem card1

     //imagem card2

     $("#slide2").mouseenter(function(){ //função executada qnd usuario coloca mouse emcima imagem
        $("#slide2").animate({width:"25rem", height:"21rem"}); //efeito animate
        });
        $("#slide2").mouseout(function(){ //função executada qnd usuario tira mouse emcima imagem
        $("#slide2").animate({width:"25rem"}).animate({height:"19rem"}); //efeito animate
        });
        //imagem card2

        //imagem card3

     $("#slide3").mouseenter(function(){ //função executada qnd usuario coloca mouse emcima imagem
        $("#slide3").animate({width:"25rem", height:"21rem"}); //efeito animate
        });
        $("#slide3").mouseout(function(){ //função executada qnd usuario tira mouse emcima imagem
        $("#slide3").animate({width:"25rem"}).animate({height:"19rem"}); //efeito animate
        });
        //imagem card3


   });
//imagem card1



   //funcao aumenta e diminui imagem cards
