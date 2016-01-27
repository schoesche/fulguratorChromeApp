/** Created by Georg Achermann */
'use strict';

angular.module('fulgurator', [
    'ngRoute',
    'smart-table',
    'fulgurator.linksModule',
    'fulgurator.settings',
    'fulgurator.data'
])

    .controller('FulguratorCtrl', ['$scope',  'dataService', function ($scope,  dataService) {

        var vmLinksCtrl = this;

        $scope.fulgurator = {};
        $scope.fulgurator.rowCollection = {};

        console.log("start :" + (vmLinksCtrl.getRowCollectionDataService == {}));
        dataService.setRowCollection(dataService.loadDefaultLinks());
        $scope.fulgurator.rowCollection = dataService.loadDefaultLinks();

    }])


    .config(['$routeProvider',  function ($routeProvider  ) {

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

    }]);







