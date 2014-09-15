 $(document).ready(function() {


     (function($) {


         var dotnet_locations = new Array();
         // left, top
         dotnet_locations[0] = new Array('-190px', '0'); // .net
         dotnet_locations[1] = new Array('-180px', '210px'); // pm
         dotnet_locations[2] = new Array('250px', '200px'); // php
         dotnet_locations[3] = new Array('50px', '250px'); // java


         var php_locations = new Array();
         // left, top
         php_locations[0] = new Array('-190px', '165px'); // design
         php_locations[1] = new Array('-190px', '65px'); // pm
         php_locations[2] = new Array('280px', '210px'); // php
         php_locations[3] = new Array('280px', '210px'); // java


         var pm_locations = new Array();
         // left, top
         pm_locations[0] = new Array('-190px', '-50px'); // .net
         pm_locations[1] = new Array('-190px', '220px'); // PM
         pm_locations[2] = new Array('-190px', '130px'); // php
         pm_locations[3] = new Array('-100px', '180px'); // java


         var php_locations = new Array();
         // left, top
         php_locations[0] = new Array('475px', '210px'); // .net
         php_locations[1] = new Array('-160px', '210px'); // pm
         php_locations[2] = new Array('-50px', '-10px'); // php
         php_locations[3] = new Array('-100px', '-90px'); // java

         var java_locations = new Array();
         // left, top
         java_locations[0] = new Array('475px', '210px'); // .net
         java_locations[1] = new Array('-160px', '210px'); // pm
         java_locations[2] = new Array('-50px', '-10px'); // php
         java_locations[3] = new Array('-80px', '-15px'); // java



         $('.circle').click(function(e) {
             e.preventDefault();

             var circle = $(this);
             var circle_id = this.id;

             if (!circle.hasClass('active')) {
                 $(this).children(':not("img")').hide();

                 $('.inactive span, .inactive .intro').hide(); // hides the intro on the main circle before it is animated away

                 // move the new circle and increase size to center
                 $('#' + circle_id).addClass('active').removeClass('small').animate({
                     'top': '30px',
                     'left': '-50px'
                 }).children('img').animate({
                     'width': 320,
                     'height': 320
                 }, {
                     duration: '4000',
                     easing: 'easeOutQuad'
                 });

                 // add the title and content once the circle has resized itself
                 setTimeout((function() {
                     $('#' + circle_id).children(':not("img")').slideDown('fast');
                 }), 500);


                 /*
                  * .Net is active
                  **/
                 if (circle_id == 'dotnetTech') {
                     $('#qctech').animate({
                         'top': dotnet_locations[0][1],
                         'left': dotnet_locations[0][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#pmTech').animate({
                         'top': dotnet_locations[1][1],
                         'left': dotnet_locations[1][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#phpTech').animate({
                         'top': dotnet_locations[2][1],
                         'left': dotnet_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#javaTech').animate({
                         'top': dotnet_locations[2][1],
                         'left': dotnet_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                 } // end if circle id = .Net


                 /*
                  * QC is active
                  **/
                 if (circle_id == 'qcTech') {
                     $('#dotnettech').animate({
                         'top': php_locations[0][1],
                         'left': php_locations[0][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#pmTech').animate({
                         'top': php_locations[1][1],
                         'left': php_locations[1][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#phpTech').animate({
                         'top': php_locations[2][1],
                         'left': php_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#javaTech').animate({
                         'top': php_locations[2][1],
                         'left': php_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                 } // end if circle id = QC



                 /*
                  * PM is active
                  **/
                 if (circle_id == 'pmTech') {
                     $('#qcTech').animate({
                         'top': pm_locations[0][1],
                         'left': pm_locations[0][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#phpTech').animate({
                         'top': pm_locations[1][1],
                         'left': pm_locations[1][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#JavaTech').animate({
                         'top': pm_locations[2][1],
                         'left': pm_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#donetTech').animate({
                         'top': pm_locations[2][1],
                         'left': pm_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                 } // end if circle id = PM



                 /*
                  * PHP is active
                  **/
                 if (circle_id == 'phpTech') {
                     $('#pmTech').animate({
                         'top': php_locations[0][1],
                         'left': php_locations[0][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#qcTech').animate({
                         'top': php_locations[1][1],
                         'left': php_locations[1][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#javaTech').animate({
                         'top': php_locations[2][1],
                         'left': php_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });
                     $('#dotnetTech').animate({
                         'top': php_locations[2][1],
                         'left': php_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                 } // end if circle id = PHP

                if (circle_id == 'javaTech') {
                     $('#qcTech').animate({
                         'top': php_locations[0][1],
                         'left': php_locations[0][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#pmTech').animate({
                         'top': php_locations[1][1],
                         'left': php_locations[1][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#phpTech').animate({
                         'top': php_locations[2][1],
                         'left': php_locations[2][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                     $('#dotnettech').animate({
                         'top': php_locations[0][1],
                         'left': php_locations[0][0]
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     }).addClass('small').removeClass('active').children('img').animate({
                         'width': 125,
                         'height': 125
                     }, {
                         duration: '4000',
                         easing: 'easeOutQuad'
                     });

                 } // end if circle id = java

                 $('.small .intro').hide();


                 //remove the inactive class and slide the title back in
                 setTimeout((function() {
                     $('#box div.inactive').removeClass('inactive').children('span').fadeIn('fast');
                 }), 300);



                 // //disable the companion link from starting the animation
                 // $('a.active').removeClass('active');
                 // //console.log(this.tagName);
                 // $('a#' + circle_id).addClass('active');


             } // end if($(this).hasClass('active'))

         });


     })(jQuery);


 });
