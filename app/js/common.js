$(function() {

  var $menu = $('#my-menu').mmenu({
    'extensions': [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
    'navbar': {
      'title': '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
    },
    'offCanvas': {
      'position': 'right'
    }
  });

  var API = $menu.data('mmenu'),
    $hamburger = $('.hamburger');

  $hamburger.on("click", function() {
    API.open();
  });

  API.bind( "open:finish", function() {
    setTimeout(function() {
      $hamburger.addClass('is-active');
    }, 50);
  });
  API.bind( "close:finish", function() {
    setTimeout(function() {
      $hamburger.removeClass('is-active');
    }, 50);
  });

  API.bind('close:finish', function() {
    setTimeout(function() {
      $hamburger.removeClass('is-active');
    }, 100);
  });﻿

});
