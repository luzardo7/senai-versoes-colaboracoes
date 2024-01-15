//efeito de esconder formulário de cadastro
$(document).ready(function(){

$("#botao-cadastar").click(function(){

$("form-cadastrar").slideToggle("slow");
$("section-login").slideToggle("slow");
$("botao-cadastrar").hide();

});

});