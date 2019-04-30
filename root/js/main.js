$(document).ready(function(){
    'use strict';
    
    $('.link-01').click(function(){
        $('#about').hide();
        $('#feedback').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#explore').hide();
        $('#signin').hide();
        $('#passreset').hide();
        $('#news').hide();
        $('#home').show();
    });
    
    $('.link-02').click(function(){
        $('#home').hide();
        $('#feedback').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#explore').hide();
        $('#signin').hide();
        $('#passreset').hide();
        $('#news').hide();
        $('#about').show();
    });
    
    $('.link-03').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#help').hide();
        $('.menu').hide();
        $('#explore').hide();
        $('#signin').hide();
        $('#passreset').hide();
        $('#news').hide();
        $('#feedback').show();
    }); 
    
    $('.link-04').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#feedback').hide();
        $('.menu').hide();
        $('#explore').hide();
        $('#signin').hide();
        $('#passreset').hide();
        $('#news').hide();
        $('#help').show();
    });
    
    $('.link-05').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#feedback').hide();
        $('.menu').hide();
        $('#help').hide();
        $('#signin').hide();
        $('#passreset').hide();
        $('#news').hide();
        $('#explore').show();
    });
    
    $('.signin').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#feedback').hide();
        $('.menu').hide();
        $('#help').hide();
        $('#signin').show();
        $('#passreset').hide();
        $('#news').hide();
        $('#explore').hide();
    });
    
    $('#password').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#feedback').hide();
        $('.menu').hide();
        $('#help').hide();
        $('#signin').hide();
        $('#passreset').show();
        $('#news').hide();
        $('#explore').hide();
    });
    
    $('#signcomp').click(function(){
        $('#home').hide();
        $('#about').hide();
        $('#feedback').hide();
        $('.menu').hide();
        $('#help').hide();
        $('#signin').hide();
        $('#passreset').hide();
        $('#news').show();
        $('#explore').hide();
    });
    
    $('.fa-paint-brush').click(function(){
        $('#paintthin').show();
        console.log("Painting Thin Line")
    });
    $('.fa-brush').click(function(){
        $('#paintthick').show();
        console.log("Paining Thick Line")
    });
    $('.fa-fill-drip').click(function(){
        $('#bucket').show();
        console.log("Pouring Bucket")
    });
    $('.fa-eraser').click(function(){
        $('#paintthin').hide();
        $('#paintthick').hide();
        $('#bucket').hide();
        console.log("Clearing Canvas")
    });
}); 