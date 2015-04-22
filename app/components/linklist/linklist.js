'use strict;'

angular.module('fulgurator.linksModule',[
    'fulgurator.linksModuleData',
'fulgurator.data'
])


    .controller('LinksCtrl',['$scope','linksModuleData', 'DataService', function($scope, linksModuleData, DataService){
        var vmLinksCtrl = this;

        /*vmLinksCtrl.rowCollection = $scope.fulgurator.rowCollection;*/

        vmLinksCtrl.rowCollection = {};

        vmLinksCtrl.getRowCollectionDataService = DataService.getRowCollection();

        vmLinksCtrl.loadLinkFile = function () {

            vmLinksCtrl.rowCollection = linksModuleData.allLinks();

        };

        vmLinksCtrl.loadLinkFile();



    }]);