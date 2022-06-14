$('.img-book').click(function(){
    if ($(".img-book").hasClass("gambar2")) {
        $('.img-book').attr('src', '../assets/world-book.png');
        $(".img-book").removeClass( "gambar2" );
    } else{
        $('.img-book').attr('src', '../assets/world-book2.png');
        $(".img-book").addClass( "gambar2" );
    }
});

$( ".arrow-left" ).click(function() {
    if ($(".mapel1").hasClass("show")) {
        $(".mapel1").removeClass( "show" ).addClass( "show-left" );
        $(".mapel10").removeClass("show-left");
        $(".mapel2").removeClass( "show-right" ).addClass( "show" );
        $(".mapel3").addClass( "show-right" );
    } else if ($(".mapel2").hasClass("show")) {
        $(".mapel2").removeClass( "show" ).addClass( "show-left" );
        $(".mapel1").removeClass("show-left");
        $(".mapel3").removeClass( "show-right" ).addClass( "show" );
        $(".mapel4").addClass( "show-right" );
    } else if ($(".mapel3").hasClass("show")) {
        $(".mapel3").removeClass( "show" ).addClass( "show-left" );
        $(".mapel2").removeClass("show-left");
        $(".mapel4").removeClass( "show-right" ).addClass( "show" );
        $(".mapel5").addClass( "show-right" );
    } else if ($(".mapel4").hasClass("show")) {
        $(".mapel4").removeClass( "show" ).addClass( "show-left" );
        $(".mapel3").removeClass("show-left");
        $(".mapel5").removeClass( "show-right" ).addClass( "show" );
        $(".mapel6").addClass( "show-right" );
    } else if ($(".mapel5").hasClass("show")) {
        $(".mapel5").removeClass( "show" ).addClass( "show-left" );
        $(".mapel4").removeClass("show-left");
        $(".mapel6").removeClass( "show-right" ).addClass( "show" );
        $(".mapel7").addClass( "show-right" );
    } else if ($(".mapel6").hasClass("show")) {
        $(".mapel6").removeClass( "show" ).addClass( "show-left" );
        $(".mapel5").removeClass("show-left");
        $(".mapel7").removeClass( "show-right" ).addClass( "show" );
        $(".mapel8").addClass( "show-right" );
    } else if ($(".mapel7").hasClass("show")) {
        $(".mapel7").removeClass( "show" ).addClass( "show-left" );
        $(".mapel6").removeClass("show-left");
        $(".mapel8").removeClass( "show-right" ).addClass( "show" );
        $(".mapel9").addClass( "show-right" );
    } else if ($(".mapel8").hasClass("show")) {
        $(".mapel8").removeClass( "show" ).addClass( "show-left" );
        $(".mapel7").removeClass("show-left");
        $(".mapel9").removeClass( "show-right" ).addClass( "show" );
        $(".mapel10").addClass( "show-right" );
    } else if ($(".mapel9").hasClass("show")) {
        $(".mapel9").removeClass( "show" ).addClass( "show-left" );
        $(".mapel8").removeClass("show-left");
        $(".mapel10").removeClass( "show-right" ).addClass( "show" );
        $(".mapel1").addClass( "show-right" );
    } else if ($(".mapel10").hasClass("show")) {
        $(".mapel10").removeClass( "show" ).addClass( "show-left" );
        $(".mapel9").removeClass("show-left");
        $(".mapel1").removeClass( "show-right" ).addClass( "show" );
        $(".mapel2").addClass( "show-right" );
    }
});

$( ".arrow-right" ).click(function() {
    if ($(".mapel1").hasClass("show")) {
        $(".mapel1").removeClass( "show" ).addClass( "show-right" );
        $(".mapel2").removeClass( "show-right" );
        $(".mapel10").removeClass( "show-left" ).addClass( "show" );
        $(".mapel9").addClass( "show-left" );
    } else if ($(".mapel2").hasClass("show")) {
        $(".mapel2").removeClass( "show" ).addClass( "show-right" );
        $(".mapel3").removeClass( "show-right" );
        $(".mapel1").removeClass( "show-left" ).addClass( "show" );
        $(".mapel10").addClass( "show-left" );
    } else if ($(".mapel3").hasClass("show")) {
        $(".mapel3").removeClass( "show" ).addClass( "show-right" );
        $(".mapel4").removeClass( "show-right" );
        $(".mapel2").removeClass( "show-left" ).addClass( "show" );
        $(".mapel1").addClass( "show-left" );
    } else if ($(".mapel4").hasClass("show")) {
        $(".mapel4").removeClass( "show" ).addClass( "show-right" );
        $(".mapel5").removeClass( "show-right" );
        $(".mapel3").removeClass( "show-left" ).addClass( "show" );
        $(".mapel2").addClass( "show-left" );
    } else if ($(".mapel5").hasClass("show")) {
        $(".mapel5").removeClass( "show" ).addClass( "show-right" );
        $(".mapel6").removeClass( "show-right" );
        $(".mapel4").removeClass( "show-left" ).addClass( "show" );
        $(".mapel3").addClass( "show-left" );
    } else if ($(".mapel6").hasClass("show")) {
        $(".mapel6").removeClass( "show" ).addClass( "show-right" );
        $(".mapel7").removeClass( "show-right" );
        $(".mapel5").removeClass( "show-left" ).addClass( "show" );
        $(".mapel4").addClass( "show-left" );
    } else if ($(".mapel7").hasClass("show")) {
        $(".mapel7").removeClass( "show" ).addClass( "show-right" );
        $(".mapel8").removeClass( "show-right" );
        $(".mapel6").removeClass( "show-left" ).addClass( "show" );
        $(".mapel5").addClass( "show-left" );
    } else if ($(".mapel8").hasClass("show")) {
        $(".mapel8").removeClass( "show" ).addClass( "show-right" );
        $(".mapel9").removeClass( "show-right" );
        $(".mapel7").removeClass( "show-left" ).addClass( "show" );
        $(".mapel6").addClass( "show-left" );
    } else if ($(".mapel9").hasClass("show")) {
        $(".mapel9").removeClass( "show" ).addClass( "show-right" );
        $(".mapel10").removeClass( "show-right" );
        $(".mapel8").removeClass( "show-left" ).addClass( "show" );
        $(".mapel7").addClass( "show-left" );
    } else if ($(".mapel10").hasClass("show")) {
        $(".mapel10").removeClass( "show" ).addClass( "show-right" );
        $(".mapel1").removeClass( "show-right" );
        $(".mapel9").removeClass( "show-left" ).addClass( "show" );
        $(".mapel8").addClass( "show-left" );
    }
});