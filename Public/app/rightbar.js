
$(function(){
    $('.vertical-nav-btn').click(function(){
        $(this).toggleClass('active');

        $('.vertical-nav').toggleClass('active');

        $('.vertical-nav-overlay').toggleClass('active');

        return false;
    })

    $(document).mouseup(function (e){
        var container = $(".vertical-nav-btn");

        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.removeClass('active');
            $('.vertical-nav-overlay').removeClass('active');
            $('.vertical-nav').removeClass('active');
        }
    });
