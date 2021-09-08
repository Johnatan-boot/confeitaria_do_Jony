/*Config.animações com imagens carrossel*/
/*Função opacidade de imagens*/

//funcao opacidade de imagens//
$(document).ready(function(){/* função executada quando usúario passa 
mouse por cima da imagem com a proriedade mouseenter oculta a imagem 
com a proriedade fadeto */
    
    /*função executada apos carregar documento*/
    $("#imagem1").fadeTo(1000,0.3).mouseenter(function(){ //emcima do mouse

    $("#imagem1").fadeTo(1000,0.3); //efeito animate

}); 

$("#imagem1").fadeTo(1000,1).mouseout(function(){ //fora do mouse
$("#imagem1").fadeTo(1000,1); //efeito animate

});
 //imagem1
$("#imagem2").fadeTo(1000,0.3).mouseenter(function(){
    $("#imagem2").fadeTo(1000,0.3); //efeito animate

}); 

$("#imagem2").fadeTo(1000,1).mouseout(function(){
$("#imagem2").fadeTo(1000,1); //efeito animate

});
//imagem2

$("#imagem3").fadeTo(1000,0.3).mouseenter(function(){

    $("#imagem3").fadeTo(1000,0.3); //efeito animate

}); 

$("#imagem3").fadeTo(1000,1).mouseout(function(){
$("#imagem3").fadeTo(1000,1); //efeito animate

});
//imagem3

$("#imagem4").fadeTo(1000,0.3).mouseenter(function(){

    $("#imagem4").fadeTo(1000,0.3); //efeito animate

}); 

$("#imagem4").fadeTo(1000,1).mouseout(function(){
$("#imagem4").fadeTo(1000,1); 

});
 //imagem4

 $("#imagem5").fadeTo(1000,0.3).mouseenter(function(){

    $("#imagem5").fadeTo(1000,0.3); 

}); 

$("#imagem5").fadeTo(1000,1).mouseout(function(){
$("#imagem5").fadeTo(1000,1); //efeito animate

});
 //imagem5

 $("#imagem6").fadeTo(1000,0.3).mouseenter(function(){ 
    

    $("#imagem6").fadeTo(1000,0.3); //efeito animate

}); 

$("#imagem6").fadeTo(1000,1).mouseout(function(){
$("#imagem6").fadeTo(1000,1); 

});
 //imagem6
})















