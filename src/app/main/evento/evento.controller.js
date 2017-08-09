(function ()
{
    'use strict';

    angular
        .module('app.evento')
        .controller('EventoController', EventoController);

    /** @ngInject */
    function EventoController(EventoData)
    {
        var vm = this;

        // Data
        vm.helloText = "Hola Mundo!";

        // Methods

        //////////
    }
})();
