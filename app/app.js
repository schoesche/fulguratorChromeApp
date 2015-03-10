'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table',
    'fulgurator.linksModule'
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

    controller('LinksCtrl', ['$scope', '$filter', '$http', 'linksModule', function (scope, filter, http, linksModule) {

        var loadLinkFile = function () {
            /*
             http.get('links.json')
             .then(function(res){
             scope.rowCollection = res.data;
             });
             */


            scope.rowCollection = linksModule.allLinks();


        }

        loadLinkFile();


        scope.predicates = ['name', 'tag', 'link'];
        scope.selectedPredicate = scope.predicates[0];


    }]).

    controller('LinksSettingsCtrl', ['$scope', '$filter', '$http', 'linksModule', function (scope, filter, http, linksModule) {

    }]);



