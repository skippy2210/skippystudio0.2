$(window).on("load", function(){
    $(".loader .inner").fadeOut(3500, function(){
        $(".loader").fadeOut(4000);
    });

    $(".items").isotope({
        filter:"*",
        animationOption :{
            duration:1500,
            easing:'linear',
            queue:false
        }
    });
})

$(document).ready(function(){

    $('#slides').superslides({
        animation: 'slide',
        play : 5000,
        pagination : false,
        animation_speed : 'slow'
    });

    var typed = new Typed(".typed", {
        strings: ["Game Developer.", "Game Designer." ,"web Developer.", "AR/VR Software engineer."],
        typeSpeed: 80,
        loop:true,
        startDelay: 1000,
        showCursor:false

    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    
    var skilltopOffset = $(".skillsSection").offset().top;
    $(window).scroll(function(){
        if(window.pageYOffset >skilltopOffset - $(window).height() + 200)
        {
            $('.chart').easyPieChart({
                animate:5000,
                easing:'easeInOut',
                barColor:'#fff',
                trackColor:'#2a1b8b',
                scaleColor:false,
                lineWidth:12,
                size:152,
                onStep : function(from, to ,percent){
                    $(this.el).find('.percent').text(Math.round(percent));}
        
            });
        }
    });
  

    var statstopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function(){
        if(!countUpFinished && window.pageYOffset > statstopOffset - $(window).height() +200) {

            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());
                var options = {
                    "endVal": endVal,
                    "duration": 5
                }
                 
                element.countup(options);
            })
            countUpFinished = true;

        }
    });

    $("[data-fancybox]").fancybox()

    
    
    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter:selector,
            animationOption :{
                duration:1500,
                easing:'linear',
                queue:false
            }
        });

        return false;
    });

    $("#Navigation li a").click(function(e){
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html , body").animate({scrollTop : targetPosition - 50}, "fast");
    });





    const nav = $("#Navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){
        var body = $("body");
        if($(window).scrollTop() >= navTop)
        {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else
        {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

});


