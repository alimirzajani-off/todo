$(document).ready(function () {
    $('.sidebar-header .fa-bars').on('click', function () {
        $('.sb-tex,.ds-hidden').toggleClass('important d-none');
    });
    $('.sidebar-header .fa-bars').on('click', function () {
        $('.sb-item .sb-tex,.ds-hidden').toggleClass('diss');
    });
    $('.add-task').click(function(){
        $('.ass-task-plus').addClass("important d-none");
        $('.ass-task-circle').addClass("important d-block");
    });
    $('.add-task-step').click(function(){
        $('.add-step-plus').addClass("important d-none");
        $('.add-step-circle').addClass("important d-block");
    });
    $('.add-today-task').click(function(){
        $('.task-info-false').addClass("important d-block");
        $('.task-info-true').addClass("important d-none");
    });
    $('.task-list').dblclick(function(){
        $('.info').addClass("important d-block");
    });
    
    $('.la-caret-square-left').click(function(){
        $('.info').removeClass("important d-block");
    });
      $('.la-times').click(function(){
         $('.task-info-false,.task-info-true').toggleClass("important d-block");
      });
});
