

function MostrarBox (d) {
    $('.cont-principal').children().removeClass('ativo');
$(d).addClass("ativo");
}

function ManipilaMoldal(){
   $("#Moldal").toggleClass('moldal-ativo');
   $("#Moldal").toggleClass('moldal-inativo');
}

function ExibeMoldal(m){
    $("#Moldal .cont-moldal div").empty();

    var conteudo = $(m).html();
    $("#Moldal .cont-moldal div").append(conteudo);

    ManipilaMoldal();
}