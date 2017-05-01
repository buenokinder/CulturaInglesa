/// <reference path="_references.ts" />

module culturaWebClient {
    'use strict';
    
    declare var dataLayer: any;
    
    var culturaclient = angular.module('culturaWebClient',
        ['ui.router' , 'angularMoment', 'ui.bootstrap', 
        'angular-loading-bar', 'ngSanitize', 'ui.bootstrap.contextMenu' ]);

 

    // keep the app footer in the botton of page
    function adjustFooter($window) {
        var body = document.getElementsByTagName('body')[0];
        var footer = document.getElementsByTagName('footer')[0];
        
        if (footer) {

            var footer_height = footer.offsetHeight;

            if (document.body.offsetHeight <= $window.innerHeight) {
                footer.style.position = 'fixed';
                body.style.marginBottom = footer_height.toString();
            } else {
                footer.style.position = 'relative';
                body.style.marginBottom = '0';
            }
        }
    }
   


    // controllers initializers - avoid minification issues
    culturaclient.controller('culturaWebClient.BaseController', ['$injector', '$scope', BaseController]); 
    culturaclient.controller('culturaWebClient.controllers.MainController', ['$injector', '$scope', '$timeout', controllers.MainController]);
  
    culturaclient.filter('trusted', ['$sce', function($sce){
        return (url) => {
            return $sce.trustAsResourceUrl(url);
    }}]);

    culturaclient.config(($stateProvider: any,$urlRouterProvider: any, $httpProvider: ng.IHttpProvider, cfpLoadingBarProvider) => {
        
        

    });

   

}