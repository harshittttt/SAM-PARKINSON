
$('.multi-item-carousel').carousel({
    interval: false
  });
  
  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("background_color");
            $(".nav-link").removeClass("link-light");
            $(".nav-link").addClass("link-dark");
            document.getElementById("search").src = "https://img.icons8.com/ios-glyphs/30/1A1A1A/search--v1.png";
            document.getElementById("heart").src = "https://img.icons8.com/fluency-systems-regular/48/1A1A1A/like--v1.png";
            document.getElementById("user").src = "https://img.icons8.com/fluency-systems-regular/48/1A1A1A/user.png";
            document.getElementById("cart").src = "https://img.icons8.com/fluency-systems-regular/48/000000/shopping-cart.png";
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".navbar").removeClass("background_color");
            $(".nav-link").addClass("link-light");
            $(".nav-link").removeClass("link-dark");
            document.getElementById("search").src = "https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png";
            document.getElementById("heart").src = "https://img.icons8.com/material-outlined/24/FFFFFF/like--v1.png";
            document.getElementById("user").src = "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/user.png";
            document.getElementById("cart").src = "https://img.icons8.com/material-outlined/24/FFFFFF/shopping-cart--v1.png";

        }
    });
});


function func1() {
    if ($(window).scrollTop() < 50) {
        $(".nav-link").addClass("link-dark");
        $(".nav-link").removeClass("link-light");
        document.getElementById("search").src = "https://img.icons8.com/ios-glyphs/30/1A1A1A/search--v1.png";
        document.getElementById("heart").src = "https://img.icons8.com/fluency-systems-regular/48/1A1A1A/like--v1.png";
        document.getElementById("user").src = "https://img.icons8.com/fluency-systems-regular/48/1A1A1A/user.png";
        document.getElementById("cart").src = "https://img.icons8.com/fluency-systems-regular/48/000000/shopping-cart.png";
    }
}
function func2() {
    if ($(window).scrollTop() < 50) {
        $(".nav-link").removeClass("link-dark");
        $(".nav-link").addClass("link-light");
        document.getElementById("search").src = "https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png";
        document.getElementById("heart").src = "https://img.icons8.com/material-outlined/24/FFFFFF/like--v1.png";
        document.getElementById("user").src = "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/user.png";
        document.getElementById("cart").src = "https://img.icons8.com/material-outlined/24/FFFFFF/shopping-cart--v1.png";
    }
}
function func_search(){
    document.getElementById("search").src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/1A1A1A/external-search-cyber-monday-anggara-glyph-anggara-putra.png";
}
function func_heart(){
    document.getElementById("heart").src="https://img.icons8.com/ios-glyphs/30/1A1A1A/like--v1.png";
}
function func_user(){
    document.getElementById("user").src="https://img.icons8.com/fluency-systems-filled/48/1A1A1A/user.png";
}
function func_cart(){
    document.getElementById("cart").src="https://img.icons8.com/ios-glyphs/30/1A1A1A/shopping-cart--v1.png";
}

function func_change(){
    if(document.getElementById("search").src=="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/1A1A1A/external-search-cyber-monday-anggara-glyph-anggara-putra.png"){
        document.getElementById("search").src="https://img.icons8.com/ios-glyphs/30/1A1A1A/search--v1.png";
    }
    if( document.getElementById("heart").src=="https://img.icons8.com/ios-glyphs/30/1A1A1A/like--v1.png"){
        document.getElementById("heart").src = "https://img.icons8.com/fluency-systems-regular/48/1A1A1A/like--v1.png";

    }
    if(
    document.getElementById("user").src=="https://img.icons8.com/fluency-systems-filled/48/1A1A1A/user.png"){
        document.getElementById("user").src = "https://img.icons8.com/fluency-systems-regular/48/1A1A1A/user.png";
    }
    if(document.getElementById("cart").src=="https://img.icons8.com/ios-glyphs/30/1A1A1A/shopping-cart--v1.png"){
        document.getElementById("cart").src = "https://img.icons8.com/fluency-systems-regular/48/000000/shopping-cart.png";

    }
}



function bg2(){
    x=document.getElementById("handbag1");
    x.src="content/mensling11.avif";
    $("#color-1").removeClass('color-active');
    $("#color-2").addClass('color-active');
}

function bg1(){
    x=document.getElementById("handbag1");
    x.src="content/mensling1.avif";
    $("#color-2").removeClass('color-active');
    $("#color-1").addClass('color-active');
}


function bg4(){
    x=document.getElementById("handbag2");
    x.src="content/mensling22.avif";
    $("#color-3").removeClass('color-active');
    $("#color-4").addClass('color-active');
}

function bg3(){
    x=document.getElementById("handbag2");
    x.src="content/mensling2.avif";
    $("#color-4").removeClass('color-active');
    $("#color-3").addClass('color-active');
}

function bg6(){
    x=document.getElementById("handbag3");
    x.src="content/mensling33.avif";
    $("#color-5").removeClass('color-active');
    $("#color-6").addClass('color-active');
}

function bg5(){
    x=document.getElementById("handbag3");
    x.src="content/mensling3.avif";
    $("#color-6").removeClass('color-active');
    $("#color-5").addClass('color-active');
}
function bg8(){
    x=document.getElementById("handbag4");
    x.src="content/mensling44.avif";
    $("#color-7").removeClass('color-active');
    $("#color-8").addClass('color-active');
}

function bg7(){
    x=document.getElementById("handbag4");
    x.src="content/mensling4.avif";
    $("#color-8").removeClass('color-active');
    $("#color-7").addClass('color-active');
}

function sd(x){
    if(x.src=="https://img.icons8.com/ios/50/000000/like--v1.png"){
    x.src="https://img.icons8.com/color/48/000000/like--v1.png";}
    else{
        x.src="https://img.icons8.com/ios/50/000000/like--v1.png";
    };
}

