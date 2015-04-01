'use strict;'

angular.module('fulgurator.linksModule',['fulgurator.linksModuleData'])


    .controller('LinksCtrl',['$scope','linksModuleData', function($scope, linksModuleData){
        var vmLinksCtrl = this;

        /*vmLinksCtrl.rowCollection = $scope.fulgurator.rowCollection;*/

        vmLinksCtrl.rowCollection = {};


        vmLinksCtrl.loadLinkFile = function () {

            vmLinksCtrl.rowCollection = linksModuleData.allLinks();

        };

        vmLinksCtrl.loadLinkFile();


    }]);