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