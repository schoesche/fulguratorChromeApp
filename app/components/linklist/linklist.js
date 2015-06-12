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

        console.log("getRowCollectionDataService1:" + (vmLinksCtrl.getRowCollectionDataService == {}));
        console.log("getRowCollectionDataService2:" + (vmLinksCtrl.getRowCollectionDataService == []));
        console.log("getRowCollectionDataService:" + vmLinksCtrl.getRowCollectionDataService);
        console.log("linksModuleData.allLinks():" + linksModuleData.allLinks());

    /*    if (DataService.getRowCollectionDataService  hier was rein) {
            console.log("asdfasdfasdfaasdfsadf");
            DataService.setRowCollection(linksModuleData.allLinks());
        }*/

        vmLinksCtrl.loadLinkFile = function () {

            vmLinksCtrl.rowCollection = linksModuleData.allLinks();

        };

        vmLinksCtrl.loadLinkFile();

        console.log("getRowCollectionDataService loadLinkFile:" + vmLinksCtrl.rowCollection[0].groupname);
        console.log("getRowCollectionDataService loadLinkFile:" + vmLinksCtrl.rowCollection[1].groupname);

    }]);