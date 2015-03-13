'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table',
    'fulgurator.linksModule',
    'fulgurator.settings'
]).

    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/',
            {
                templateUrl: 'components/linklist/linklist.html',
                controller: 'LinksCtrl'
            }).
            when('/settings',
            {
                templateUrl: 'components/settings/settings.html',
                controller: 'LinksSettingsCtrl'
            }).
            otherwise({redirectTo: ("/")})
    }]).

    controller('LinksCtrl', ['$scope', '$filter', '$http', 'linksModule', 'SettingsCtrl', function (scope, filter, http, linksModule, SettingsCtrl) {

        var vm = this;

        var loadLinkFile = function () {
            /*
             http.get('links.json')
             .then(function(res){
             scope.rowCollection = res.data;
             });
             */


            /*vm.rowCollection = linksModule.allLinks();*/

            vm.rowCollection = SettingsCtrl.loadLinks();


        }

        loadLinkFile();


       /* vm.predicates = ['name', 'tag', 'link'];
        vm.selectedPredicate = scope.predicates[0];*/


    }]).

    controller('LinksSettingsCtrl', ['$scope', '$filter', '$http', 'linksModule', function (scope, filter, http, linksModule) {

    }]);



