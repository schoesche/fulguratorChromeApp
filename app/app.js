'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table',
    'fulgurator.linksModule',
    'fulgurator.linksModuleData',
    'fulgurator.settings'
]).

    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/linklist',
            {
                templateUrl: 'components/linklist/linklist.html',
                controller: 'LinksCtrl as vmLinksCtrl'
            }).
            when('/settings',
            {
                templateUrl: 'components/settings/settings.html',
                controller: 'SettingsCtrl as vmSettings'

            }).
            otherwise({redirectTo: ("/linklist")});
    }]).

    /*controller('FulguratorCtrl', ['$scope', '$filter', '$http', 'SettingsCtrl', function (scope, filter, http, SettingsCtrl) {*/
    controller('FulguratorCtrl', ['$scope', '$filter', function (scope, filter) {

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
                vm.testvalue = 'ist das toll';

        };

        vm.loadLinkFile();



    }]);





