$(document).ready(function(){
    'use strict';
    
    $('.link-01').click(function(){
        $('#about').hide();
        $('#feedback').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#explore').hide();
        $('#home').show();
    });
    
    $('.link-02').click(function(){
        $('#home').hide();
        $('#feedback').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#explore').hide();
        $('#about').show();
    });
    
    $('.link-03').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#explore').hide();
        $('#feedback').show();
    }); 
    
    $('.link-04').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#feedback').hide();
        $('.menu').hide();
        $('#explore').hide();
        $('#help').show();
    });
    
    $('.link-05').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#feedback').hide();
        $('.menu').hide();
        $('#help').hide();
        $('#explore').show();
    });
}); 