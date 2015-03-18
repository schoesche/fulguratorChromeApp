'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table',
    'fulgurator.linksModule',
    'fulgurator.settings'
]).

    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/linklist',
            {
                templateUrl: 'components/linklist/linklist.html',
                controller: 'LinksCtrl'
            }).
            when('/settings',
            {
                templateUrl: 'components/settings/settings.html',
                controller: 'SettingsCtrl'
            }).
            otherwise({redirectTo: ("/linklist")});
    }]).

    controller('LinksCtrl', ['$scope', '$filter', '$http', 'linksModule', 'SettingsCtrl', function (scope, filter, http, linksModule, SettingsCtrl) {

        var vm = this;
        vm.testvalue = 'ich bin ein testvalue';

        vm.loadLinkFile = function () {
            /*
             http.get('links.json')
             .then(function(res){
             scope.rowCollection = res.data;
             });
             */


            /*vm.rowCollection = linksModule.allLinks();*/


  /*          vm.rowCollection = SettingsCtrl.loadLinks();*/


        };

        vm.loadLinkFile();



    }]);





