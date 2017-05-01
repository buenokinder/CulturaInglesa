var culturaWebClient;
(function (culturaWebClient) {
    var init;
    (function (init) {
        function bootstrapRoutes($stateProvider) {
            $stateProvider
                .state('otherwise', {
                url: '/notfound',
                templateUrl: 'app/views/notfound.html',
                accessRequired: false
            })
                .state('root', {
                url: '',
                templateUrl: 'app/views/main.html',
                controller: 'culturaWebClient.controllers.MainController'
            })
                .state('root.portal', {
                url: '/portal',
                templateUrl: 'app/views/hotsite/index.html',
                controller: 'culturaWebClient.controllers.hotSite.PortalController',
                title: 'Cultura',
                navigationName: 'Portal',
                accessRequired: false
            });
        }
        init.bootstrapRoutes = bootstrapRoutes;
    })(init = culturaWebClient.init || (culturaWebClient.init = {}));
})(culturaWebClient || (culturaWebClient = {}));
var culturaWebClient;
(function (culturaWebClient) {
    'use strict';
    var BaseController = (function () {
        function BaseController($injector, $scope) {
            this.$scope = $scope;
            this.$state = $injector.get('$state');
            this.$rootScope = $injector.get('$rootScope');
        }
        return BaseController;
    }());
    culturaWebClient.BaseController = BaseController;
})(culturaWebClient || (culturaWebClient = {}));
var culturaWebClient;
(function (culturaWebClient) {
    var controllers;
    (function (controllers) {
        'use strict';
        var MainController = (function () {
            function MainController($injector, $scope, $timeout) {
                this.$scope = $scope;
                this.$rootScope = $injector.get('$rootScope');
                // this.$modal =$injector.get('$modal');
                this.$location = $injector.get('$location');
                this.$timeout = $timeout;
                var self = this;
                this.$scope.tabs = [
                    {
                        class: "fa-dollar",
                        title: "DADOS FINANCEIRO",
                        templateUrl: 'app/views/financeiro/index.html'
                    },
                    {
                        class: 'fa-mortar-board',
                        title: "DADOS ACADÊMICOS",
                        templateUrl: 'app/views/academico/index.html'
                    },
                    {
                        class: 'fa-envelope-o',
                        title: "ATENDIMENTO",
                        templateUrl: 'app/views/atendimento/index.html'
                    },
                    {
                        class: 'fa-question-circle-o',
                        title: "FAQ",
                        templateUrl: 'app/views/faq/index.html'
                    }
                ];
            }
            return MainController;
        }());
        controllers.MainController = MainController;
    })(controllers = culturaWebClient.controllers || (culturaWebClient.controllers = {}));
})(culturaWebClient || (culturaWebClient = {}));
/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../Scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../Scripts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="routes.ts" />
/// <reference path="controllers/BaseController.ts" />
/// <reference path="controllers/MainController.ts" /> 
/// <reference path="_references.ts" />
var culturaWebClient;
(function (culturaWebClient) {
    'use strict';
    var culturaclient = angular.module('culturaWebClient', ['ui.router', 'angularMoment', 'ui.bootstrap',
        'angular-loading-bar', 'ngSanitize', 'ui.bootstrap.contextMenu']);
    // keep the app footer in the botton of page
    function adjustFooter($window) {
        var body = document.getElementsByTagName('body')[0];
        var footer = document.getElementsByTagName('footer')[0];
        if (footer) {
            var footer_height = footer.offsetHeight;
            if (document.body.offsetHeight <= $window.innerHeight) {
                footer.style.position = 'fixed';
                body.style.marginBottom = footer_height.toString();
            }
            else {
                footer.style.position = 'relative';
                body.style.marginBottom = '0';
            }
        }
    }
    // controllers initializers - avoid minification issues
    culturaclient.controller('culturaWebClient.BaseController', ['$injector', '$scope', culturaWebClient.BaseController]);
    culturaclient.controller('culturaWebClient.controllers.MainController', ['$injector', '$scope', '$timeout', culturaWebClient.controllers.MainController]);
    culturaclient.filter('trusted', ['$sce', function ($sce) {
            return function (url) {
                return $sce.trustAsResourceUrl(url);
            };
        }]);
    culturaclient.config(function ($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
        culturaWebClient.init.bootstrapRoutes($stateProvider);
        cfpLoadingBarProvider.includeSpinner = false;
    });
})(culturaWebClient || (culturaWebClient = {}));
