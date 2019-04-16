$(document).ready(function(){
    'use strict';
    
    $('.link-01').click(function(){
        $('#about').hide();
        $('#feedback').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#home').show();
    });
    
    $('.link-02').click(function(){
        $('#home').hide();
        $('#feedback').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#about').show();
    });
    
    $('.link-03').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#feedback').show();
    });
    
}); 