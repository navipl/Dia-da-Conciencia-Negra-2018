

function MostrarBox (i,d) {
$('.botoes-laterais').children().removeClass('menu-ativo');
$(".botoes-laterais li:nth-child("+ i +")").addClass('menu-ativo');

    $('.cont-principal').children().removeClass('ativo');
$(d).addClass("ativo");
}

function ManipulaMoldal(){
   $("#Moldal").toggleClass('moldal-ativo');
   $("#Moldal").toggleClass('moldal-inativo');

   $("#Cont-Inicio .box-center").toggleClass('box-frozen');
   $("#Cont-Negros .box-center").toggleClass('box-frozen');
   $("#Cont-Quilombo .box-center").toggleClass('box-frozen');
}

function ExibeMoldal(m){
        var conteudo = $(m).html();

    $("#Moldal .cont-moldal div").empty();

    $("#Moldal .cont-moldal div").append(conteudo);

    ManipulaMoldal();
}