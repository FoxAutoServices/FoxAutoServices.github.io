$(function () {
    'use strict';
    //preloader
    $(" .loading-overlay .loader").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(500,
            function () {
                $(this).remove();
            });
    });
})

// Funcion expression to select elements
const selectElement = (s) => document.querySelector(s);

//Open menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
})
//Close menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
})