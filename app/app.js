/** Created by Georg Achermann */
'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table',
    'fulgurator.linksModule',
    'fulgurator.linksModuleData',
    'fulgurator.settings',
    'fulgurator.data'
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

    }])


    .controller('FulguratorCtrl', ['$scope', function ($scope) {

        $scope.fulgurator = {};
        $scope.fulgurator.rowCollection = {};

    }]);





