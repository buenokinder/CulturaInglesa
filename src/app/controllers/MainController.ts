module culturaWebClient.controllers {
    'use strict';

    export class MainController {

        private $scope;
        private $rootScope;
        private $modal;
        private $location: ng.ILocationService;
        private $timeout;
     
     
        constructor($injector: ng.auto.IInjectorService, $scope, $timeout) {

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
]
        }
        
    }
} 