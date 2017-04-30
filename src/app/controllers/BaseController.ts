module culturaWebClient {
    'use strict';

    export class BaseController {
        $scope: any;
        $state: any;
        
        $rootScope: any;
        

        constructor($injector: ng.auto.IInjectorService, $scope) {
            this.$scope = $scope;
            this.$state = $injector.get('$state');
            this.$rootScope = $injector.get('$rootScope');
         

        }
        
    }
} 