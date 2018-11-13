

function MostrarBox (d) {
    $('.cont-principal').children().removeClass('ativo');
$(d).addClass("ativo");
}

function ManipulaMoldal(){
   $("#Moldal").toggleClass('moldal-ativo');
   $("#Moldal").toggleClass('moldal-inativo');
}

function ExibeMoldal(m){
        var conteudo = $(m).html();

    $("#Moldal .cont-moldal div").empty();

    $("#Moldal .cont-moldal div").append(conteudo);

    ManipulaMoldal();
}