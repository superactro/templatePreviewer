'use strict';
$(window).load(function () {
      
      // define variables
      var imgArray = [],
            description = $('#description'),
            toggle = $('#toggle'),
            nav = $('nav'),
            next = $('#next'),
            prev = $('#prev'),
            tooltip = $('.tooltip'),
            currBg = 0,
            loading = $('#loading'),
            dir = '../' + window.location.pathname + "/layouts/";
            
      // set description to page title
      description.text($(document).attr('title'));
      console.log('sas');
      // listen for events 
      document.onkeydown = checkKey;

      function checkKey(e) {
            e = e || window.event;
            if (e.keyCode == '37') switchPrev();
            else if (e.keyCode == '32') {
                  switchNav(toggle);
                  return false;
            }
            else if (e.keyCode == '39') switchNext();
      }

      function switchNav(toogle) {
            if (toogle.hasClass('hidden')) {
                  nav.stop().animate({ "bottom": "+15px", }, 300);
                  toogle.removeClass('hidden');
            }
            else {
                  nav.stop().animate({ "bottom": "-60px", }, 300);
                  toogle.addClass('hidden');
            }

            if (toogle.find('img').css("transform") == 'none') {
                  toogle.find('img').css("transform", "rotate(180deg)");
            } else {
                  toogle.find('img').css("transform", "");
            }
      }

      toggle.click(function () { switchNav(toggle); return false; });
      next.click(function () { switchNext(); return false; });
      prev.click(function () { switchPrev(); return false; });

      function switchNext() {
            if (currBg < (imgArray.length - 1)) {
                  currBg++;
                  setBackground(currBg);
            }
            else {
                  currBg = 0;
                  setBackground(currBg);
            }
      }

      function switchPrev() {
            if (currBg > 0) {
                  currBg--;
                  setBackground(currBg);
            }
            else {
                  currBg = imgArray.length - 1;
                  setBackground(currBg);
            }
      }

      var fileextension = ".jpg";
      // add the images from the layouts dir to array
      
      
      $('#urls').children().each(function () {
            preload(dir + $(this).text());
            var filename = $(this).text();
            imgArray.push(filename);
      });


      var hash = window.location.hash;
      if (hash === '') setBackground(0);
      else setBgToCurrHash(hash, imgArray);
                       
      // check and set current hash url
      function setBgToCurrHash(hash, imgArray) {

            var hashID = $.inArray(hash.substring(1, hash.length) + '.jpg', imgArray);

            setBackground(hashID, true);
      }





      function setBackground(id, autoTrigger) {
            if (imgArray.length == 1) {
                  $('#prev, #next').css({
                        'opacity': '.1'
                  }).addClass('no-hover');
                  if (!autoTrigger && !tooltip.is(":visible")) {
                        tooltip.stop().fadeIn(100);
                        setTimeout(function () {
                              tooltip.fadeOut(600);
                        }, 4000);
                  }
            }

            console.log(imgArray[id]);
            var bgUrl = imgArray[id];
            var layoutText = bgUrl.substring(0, bgUrl.length - 4);
            window.location.hash = layoutText;
            nav.find('.layout').remove();
            nav.append('<p class="layout animated bounceIn">layout_01a</p>');
            $('.layout').text(layoutText);

            $('<img src="' + dir + bgUrl + '"/>').load(function () {
                  $('body').css({ 'height': this.height + 'px', });
            }).load(function () {
                  loading.fadeOut(100);
                  nav.show(100);
            });
            $('body').css({ 'background': '#fff url(' + dir + bgUrl + ') no-repeat center top' });
      }

      // Rotate arrow icon
      var rotate_factor = 0;
      function rotateMe(e) {
            rotate_factor += 1;
            var rotate_angle = (180 * rotate_factor) % 360;
            $(e).rotate({ angle: rotate_angle });
      }
      
      // Preload images
      function preload(img) {
            $('<img/>')[0].src = img;
      }
});