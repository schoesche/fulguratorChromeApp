'use strict;'

angular.module('fulgurator.linksModule',[
        'fulgurator.data'
    ])


    .controller('LinksCtrl',['$scope', 'dataService',  function($scope, dataService  ){
        var vmLinksCtrl = this;

        vmLinksCtrl.rowCollection = {};
        vmLinksCtrl.getRowCollectionDataService = dataService.getRowCollection();

        /**
        console.log("getRowCollectionDataService1:" + (vmLinksCtrl.getRowCollectionDataService == {}));
        console.log("getRowCollectionDataService2:" + (vmLinksCtrl.getRowCollectionDataService == []));
        console.log("getRowCollectionDataService:" + vmLinksCtrl.getRowCollectionDataService);
        console.log("linksModuleData.allLinks():" + dataService.loadDefaultLinks());
        */

        vmLinksCtrl.loadLinkFile = function () {
            vmLinksCtrl.rowCollection = dataService.loadDefaultLinks();
        };

        vmLinksCtrl.loadLinkFile();

        /**
        console.log("getRowCollectionDataService loadLinkFile:" + vmLinksCtrl.rowCollection[0].groupname);
        console.log("getRowCollectionDataService loadLinkFile:" + vmLinksCtrl.rowCollection[1].groupname);
        */
    }]);


