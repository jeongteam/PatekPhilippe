$(document).ready(function(){
    $('.about_us_left .who h3').mouseenter(function(){   
        const idx = $(this).index();        
        $('.about_us_left .who h3').removeClass('on');
        $(this).addClass('on');        
        $('.about_us_left .about_left_text .text').hide();
        $('.about_us_left .about_left_text .text').eq(idx).stop().show();
    });

    $('.value_title .title_list li').click(function(){
        const idx1 = $(this).index();
        $('.value_title .title_list li').removeClass('value_on');
        $(this).addClass('value_on');
        $('.value_text .text_list li').hide();
        $('.value_text .text_list li').eq(idx1).stop().show();
    });
});
