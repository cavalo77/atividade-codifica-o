//efeito de esconder formulário de cadastro

$(document).ready(function(){

$("#botao cadastrar"). click(function(){


    $("#forme cadastrar") slideToggle("slow");
    $("#section login") slideToggle("slow");
    $("#botao cadastrar") hide("");
});

} );