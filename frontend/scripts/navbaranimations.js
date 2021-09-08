$(document).ready(function() {//função executada apos carregar documento
    $("#bt2").click(function(){ //função executada qnd usuario clica no bt1
    $("#nav").show(1000 , msg); //metodo show que mostra a div, no callback chama a msg
    function msg(){// função para exibir a mensagem
        alert("navbar expandido");  
         
   };
 });
    $("#bt1").click(function(){ //função executada qnd usuario clica no bt2
    $("#nav").hide(1000, msg); //metodo hide que oculta a div, no callback chama a msg
    function msg(){// função para exibir a mensagem
        alert("navbar ocultado");  
         
    };


    });
   });
  