module culturaWebClient.init {

    export function bootstrapRoutes($stateProvider: any) {
        $stateProvider
            // when not found
            .state('otherwise', {
                url: '/notfound',
                templateUrl: 'app/views/notfound.html',
                accessRequired: false
            })
            // Template
            .state('root', {
                url: '',
                templateUrl: 'app/views/main.html',
                controller: 'culturaWebClient.controllers.MainController'
            })
            //PORTAL
            .state('root.portal', {
                url: '/portal',
                templateUrl: 'app/views/hotsite/index.html',
                controller: 'culturaWebClient.controllers.hotSite.PortalController',
                title: 'Cultura',
                navigationName: 'Portal',
                accessRequired: false
            })
            
    }
}