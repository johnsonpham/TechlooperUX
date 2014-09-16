var app = angular
    .module('app', [
        'ngRoute'
    ])

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'PageCtrl'
            })
    }
]);

app.controller("loadKeyboard", function($scope, $http) {
    $http.get('data/keyboardshortcuts.json').
    success(function(data, status, headers, config) {
        $scope.keyList = data;
    }).
    error(function(data, status, headers, config) {
        // log error
    });
});

app.controller('PageCtrl', ['$scope',
    function($scope) {
        $scope.tagline = 'Career Analytics. Open Source. Awesome!';
    }
]);

app.controller('openCompaniesBar', ['$scope',
    function($scope) {
        var cp = $('.companies-bar'),
            list = $('.companies-list');
        cp.click(function() {
            var ic = $(this).find('i');
            if (ic.hasClass('fa-arrow-up')) {
                ic.removeClass('fa-arrow-up').addClass('fa-arrow-down');
                list.animate({
                    height: '120px',
                    padding: '10px'
                });
            } else {
                ic.removeClass('fa-arrow-down').addClass('fa-arrow-up');
                list.animate({
                    height: '0',
                    padding: '5px 10px'
                });
            }
        });
    }
])

app.controller('openKeyboardShortcuts', ['$scope',
    function($scope) {
        var key = $('.keyboard');
        key.on('click', function() {
            if ($(".keyboard-shortcuts-items:first").is(":hidden")) {
                $(".keyboard-shortcuts-items").slideDown("slow");
            } else {
                $(".keyboard-shortcuts-items").hide();
            }
        });
    }
])

app.controller('settingStyle', ['$scope',
    function($scope) {
        var set = $('.setting-content');
        set.on('click', function() {
            set.find('ul.setting-items').css("display", "block");
            set.stop().animate({
                width: '125'
            });
        }).mouseleave(function() {
            set.find('ul.setting-items').css("display", "none");
            set.stop().animate({
                width: '28px'
            });
            $(".keyboard-shortcuts-items").hide();
        });
    }
])

app.controller("loadCompanies", function($scope, $http) {
    $http.get('data/companies.json').
    success(function(data, status, headers, config) {
        $scope.companies = data;
    }).
    error(function(data, status, headers, config) {
        // log error
    });
});

app.controller("loadTech", function($scope, $http) {
    $http.get('data/techlist.json').
    success(function(data, status, headers, config) {
        $scope.techlist = data;
    }).
    error(function(data, status, headers, config) {
        // log error
    });
});

app.controller("setPercent", function($scope, $http) {});

app.controller('bubble-ctrl', ['$scope',
    function($scope) {

        var dotnet_locations = new Array();
        // left, top
        dotnet_locations[0] = new Array('0', '200px');
        dotnet_locations[1] = new Array('0', '200px');
        dotnet_locations[2] = new Array('0', '200px');
        dotnet_locations[3] = new Array('0', '200px');
        dotnet_locations[4] = new Array('0', '200px');
        dotnet_locations[5] = new Array('0', '200px');
        dotnet_locations[6] = new Array('0', '200px');
        dotnet_locations[7] = new Array('0', '200px');
        dotnet_locations[8] = new Array('0', '200px');


        var php_locations = new Array();
        // left, top
        php_locations[0] = new Array('-180px', '90px');
        php_locations[1] = new Array('-180px', '90px');
        php_locations[2] = new Array('-180px', '90px');
        php_locations[3] = new Array('-180px', '90px');
        php_locations[4] = new Array('-180px', '90px');
        php_locations[5] = new Array('-180px', '90px');
        php_locations[6] = new Array('-180px', '90px');
        php_locations[7] = new Array('-180px', '90px');
        php_locations[8] = new Array('-180px', '90px');


        var java_locations = new Array();
        // left, top
        java_locations[0] = new Array('25px', '10px');
        java_locations[1] = new Array('25px', '10px');
        java_locations[2] = new Array('25px', '10px');
        java_locations[3] = new Array('25px', '10px');
        java_locations[4] = new Array('25px', '10px');
        java_locations[5] = new Array('25px', '10px');
        java_locations[6] = new Array('25px', '10px');
        java_locations[7] = new Array('25px', '10px');
        java_locations[8] = new Array('25px', '10px');


        var qc_locations = new Array();
        // left, top
        qc_locations[0] = new Array('-210px', '210px');
        qc_locations[1] = new Array('-210px', '210px');
        qc_locations[2] = new Array('-210px', '210px');
        qc_locations[3] = new Array('-210px', '210px');
        qc_locations[4] = new Array('-210px', '210px');
        qc_locations[5] = new Array('-210px', '210px');
        qc_locations[6] = new Array('-210px', '210px');
        qc_locations[7] = new Array('-210px', '210px');
        qc_locations[8] = new Array('-210px', '210px');

        var pm_locations = new Array();
        // left, top
        pm_locations[0] = new Array('200px', '160px');
        pm_locations[1] = new Array('200px', '160px');
        pm_locations[2] = new Array('200px', '160px');
        pm_locations[3] = new Array('200px', '160px');
        pm_locations[4] = new Array('200px', '160px');
        pm_locations[5] = new Array('200px', '160px');
        pm_locations[6] = new Array('200px', '160px');
        pm_locations[7] = new Array('200px', '160px');
        pm_locations[8] = new Array('200px', '160px');

        var python_locations = new Array();
        // left, top
        python_locations[0] = new Array('120px', '250px');
        python_locations[1] = new Array('120px', '250px');
        python_locations[2] = new Array('120px', '250px');
        python_locations[3] = new Array('120px', '250px');
        python_locations[4] = new Array('120px', '250px');
        python_locations[5] = new Array('120px', '250px');
        python_locations[6] = new Array('120px', '250px');
        python_locations[7] = new Array('120px', '250px');
        python_locations[8] = new Array('120px', '250px');

        var ruby_locations = new Array();
        // left, top
        ruby_locations[0] = new Array('100px', '190px');
        ruby_locations[1] = new Array('100px', '190px');
        ruby_locations[2] = new Array('100px', '190px');
        ruby_locations[3] = new Array('100px', '190px');
        ruby_locations[4] = new Array('100px', '190px');
        ruby_locations[5] = new Array('100px', '190px');
        ruby_locations[6] = new Array('100px', '190px');
        ruby_locations[7] = new Array('100px', '190px');
        ruby_locations[8] = new Array('100px', '190px');

        var ba_locations = new Array();
        // left, top
        ba_locations[0] = new Array('250px', '200px');
        ba_locations[1] = new Array('250px', '200px');
        ba_locations[2] = new Array('250px', '200px');
        ba_locations[3] = new Array('250px', '200px');
        ba_locations[4] = new Array('250px', '200px');
        ba_locations[5] = new Array('250px', '200px');
        ba_locations[6] = new Array('250px', '200px');
        ba_locations[7] = new Array('250px', '200px');
        ba_locations[8] = new Array('250px', '200px');

        var dba_locations = new Array();
        // left, top
        dba_locations[0] = new Array('100px', '190px');
        dba_locations[1] = new Array('100px', '190px');
        dba_locations[2] = new Array('100px', '190px');
        dba_locations[3] = new Array('100px', '190px');
        dba_locations[4] = new Array('100px', '190px');
        dba_locations[5] = new Array('100px', '190px');
        dba_locations[6] = new Array('100px', '190px');
        dba_locations[7] = new Array('100px', '190px');
        dba_locations[8] = new Array('100px', '190px');

        $('.circle').click(function(e) {
            e.preventDefault();

            var circle = $(this);
            var circle_id = this.id;

            if (!circle.hasClass('active')) {
                $(this).children(':not(".circle-content")').hide();

                $('.inactive span, .inactive .intro').hide(); // hides the intro on the main circle before it is animated away

                // move the new circle and increase size to center
                $('#' + circle_id).addClass('active').removeClass('small').animate({
                    'top': '30px',
                    'left': '-50px'
                }).children('.circle-content').animate({
                    'width': 320,
                    'height': 320
                }, {
                    duration: '4000',
                    easing: 'easeOutQuad'
                });

                // add the title and content once the circle has resized itself
                setTimeout((function() {
                    $('#' + circle_id).children(':not(".circle-content")').slideDown('fast');
                }), 500);


                /*
                 * 1 .Net is active
                 **/
                if (circle_id == 'dotnetTech') {
                    $('#qctech').animate({
                        'top': qc_locations[0][1],
                        'left': qc_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pmTech').animate({
                        'top': pm_locations[1][1],
                        'left': pm_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
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
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#javaTech').animate({
                        'top': java_locations[2][1],
                        'left': java_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#rubyTech').animate({
                        'top': ruby_locations[2][1],
                        'left': ruby_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });


                    $('#pythonTech').animate({
                        'top': python_locations[2][1],
                        'left': python_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dbaTech').animate({
                        'top': dba_locations[2][1],
                        'left': dba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#baTech').animate({
                        'top': ba_locations[2][1],
                        'left': ba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = .Net

                /*
                 * 2 Java is active
                 **/
                if (circle_id == 'javaTech') {
                    $('#qctech').animate({
                        'top': qc_locations[0][1],
                        'left': qc_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pmTech').animate({
                        'top': pm_locations[1][1],
                        'left': pm_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
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
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dotnetTech').animate({
                        'top': dotnet_locations[2][1],
                        'left': dotnet_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#rubyTech').animate({
                        'top': ruby_locations[2][1],
                        'left': ruby_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });


                    $('#pythonTech').animate({
                        'top': python_locations[2][1],
                        'left': python_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dbaTech').animate({
                        'top': dba_locations[2][1],
                        'left': dba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#baTech').animate({
                        'top': ba_locations[2][1],
                        'left': ba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = Java
                
                /*
                 * 3 PHP is active
                 **/
                if (circle_id == 'phpTech') {
                    $('#qctech').animate({
                        'top': qc_locations[0][1],
                        'left': qc_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pmTech').animate({
                        'top': pm_locations[1][1],
                        'left': pm_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#javaTech').animate({
                        'top': java_locations[2][1],
                        'left': java_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dotnetTech').animate({
                        'top': dotnet_locations[2][1],
                        'left': dotnet_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#rubyTech').animate({
                        'top': ruby_locations[2][1],
                        'left': ruby_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });


                    $('#pythonTech').animate({
                        'top': python_locations[2][1],
                        'left': python_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dbaTech').animate({
                        'top': dba_locations[2][1],
                        'left': dba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#baTech').animate({
                        'top': ba_locations[2][1],
                        'left': ba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = PHP

                /*
                 * 4 Ruby is active
                 **/
                if (circle_id == 'rubyTech') {
                    $('#qctech').animate({
                        'top': qc_locations[0][1],
                        'left': qc_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pmTech').animate({
                        'top': pm_locations[1][1],
                        'left': pm_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#javaTech').animate({
                        'top': java_locations[2][1],
                        'left': java_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dotnetTech').animate({
                        'top': dotnet_locations[2][1],
                        'left': dotnet_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
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
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });


                    $('#pythonTech').animate({
                        'top': python_locations[2][1],
                        'left': python_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dbaTech').animate({
                        'top': dba_locations[2][1],
                        'left': dba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#baTech').animate({
                        'top': ba_locations[2][1],
                        'left': ba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = Ruby

                /*
                 * 5 Python is active
                 **/
                if (circle_id == 'pythonTech') {
                    $('#qctech').animate({
                        'top': qc_locations[0][1],
                        'left': qc_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pmTech').animate({
                        'top': pm_locations[1][1],
                        'left': pm_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#javaTech').animate({
                        'top': java_locations[2][1],
                        'left': java_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dotnetTech').animate({
                        'top': dotnet_locations[2][1],
                        'left': dotnet_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#rubyTech').animate({
                        'top': ruby_locations[2][1],
                        'left': ruby_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
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
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dbaTech').animate({
                        'top': dba_locations[2][1],
                        'left': dba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#baTech').animate({
                        'top': ba_locations[2][1],
                        'left': ba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = Python

                /*
                 * 6 Project Manager is active
                 **/
                if (circle_id == 'pmTech') {
                    $('#qctech').animate({
                        'top': qc_locations[0][1],
                        'left': qc_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pythonTech').animate({
                        'top': python_locations[1][1],
                        'left': python_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#javaTech').animate({
                        'top': java_locations[2][1],
                        'left': java_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dotnetTech').animate({
                        'top': dotnet_locations[2][1],
                        'left': dotnet_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#rubyTech').animate({
                        'top': ruby_locations[2][1],
                        'left': ruby_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
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
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dbaTech').animate({
                        'top': dba_locations[2][1],
                        'left': dba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#baTech').animate({
                        'top': ba_locations[2][1],
                        'left': ba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = Project Manager

                /*
                 * 7 Quanity Control is active
                 **/
                if (circle_id == 'qcTech') {
                    $('#pmtech').animate({
                        'top': pm_locations[0][1],
                        'left': pm_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pythonTech').animate({
                        'top': python_locations[1][1],
                        'left': python_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#javaTech').animate({
                        'top': java_locations[2][1],
                        'left': java_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dotnetTech').animate({
                        'top': dotnet_locations[2][1],
                        'left': dotnet_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#rubyTech').animate({
                        'top': ruby_locations[2][1],
                        'left': ruby_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
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
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dbaTech').animate({
                        'top': dba_locations[2][1],
                        'left': dba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#baTech').animate({
                        'top': ba_locations[2][1],
                        'left': ba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = Quanity Control

                 /*
                 * 8 DBA is active
                 **/
                if (circle_id == 'dbaTech') {
                    $('#pmtech').animate({
                        'top': pm_locations[0][1],
                        'left': pm_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pythonTech').animate({
                        'top': python_locations[1][1],
                        'left': python_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#javaTech').animate({
                        'top': java_locations[2][1],
                        'left': java_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dotnetTech').animate({
                        'top': dotnet_locations[2][1],
                        'left': dotnet_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#rubyTech').animate({
                        'top': ruby_locations[2][1],
                        'left': ruby_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
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
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#qcTech').animate({
                        'top': qc_locations[2][1],
                        'left': qc_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#baTech').animate({
                        'top': ba_locations[2][1],
                        'left': ba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = Quanity Control

                /*
                 * 9 Analytics Business is active
                 **/
                if (circle_id == 'baTech') {
                    $('#pmtech').animate({
                        'top': pm_locations[0][1],
                        'left': pm_locations[0][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#pythonTech').animate({
                        'top': python_locations[1][1],
                        'left': python_locations[1][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#javaTech').animate({
                        'top': java_locations[2][1],
                        'left': java_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dotnetTech').animate({
                        'top': dotnet_locations[2][1],
                        'left': dotnet_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#rubyTech').animate({
                        'top': ruby_locations[2][1],
                        'left': ruby_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
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
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#qcTech').animate({
                        'top': qc_locations[2][1],
                        'left': qc_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });

                    $('#dbaTech').animate({
                        'top': dba_locations[2][1],
                        'left': dba_locations[2][0]
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    }).addClass('small').removeClass('active').children('.circle-content').animate({
                        'width': 125,
                        'height': 125
                    }, {
                        duration: '4000',
                        easing: 'easeOutQuad'
                    });
                } // end if circle id = Analytics Business

                $('.small .intro').hide();


                //remove the inactive class and slide the title back in
                setTimeout((function() {
                    $('#box div.inactive').removeClass('inactive').children('span').fadeIn('fast');
                }), 300);


            } // end if($(this).hasClass('active'))

        });
    }
])