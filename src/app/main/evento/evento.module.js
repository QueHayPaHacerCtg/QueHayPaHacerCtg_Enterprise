(function ()
{
    'use strict';

    angular
        .module('app.evento', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.evento', {
                url    : '/evento',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/evento/evento.html',
                        controller : 'EventoController as vm'
                    }
                },
                resolve: {
                    EventoData: function (msApi)
                    {
                        return msApi.resolve('evento@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/evento');

        // Api
        msApiProvider.register('evento', ['app/data/evento/evento.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'Menú Principal',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.evento', {
            title    : 'Evento',
            icon     : 'icon-tile-four',
            state    : 'app.evento',
            /*stateParams: {
                'param1': 'page'
             },*/
            translate: 'SAMPLE.SAMPLE_NAV',
            weight   : 1
        });
    }
})();