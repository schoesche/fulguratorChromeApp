'use strict;'

angular.module('fulgurator.linksModule',['fulgurator.linksModuleData'])


    .controller('LinksCtrl',['linksModuleData', function(linksModuleData){
        var vmLinksCtrl = this;

        vmLinksCtrl.rowCollection = {};


        vmLinksCtrl.loadLinkFile = function () {

            vmLinksCtrl.rowCollection = linksModuleData.allLinks();

        };

        vmLinksCtrl.loadLinkFile();


    }]);