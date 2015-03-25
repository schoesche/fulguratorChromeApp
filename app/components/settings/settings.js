'use strict;'

angular.module('fulgurator.settings',[])

    .controller('SettingsCtrl',['linksModuleData', function(linksModuleData){
        var vmSettings = this;

        vmSettings.rowCollection = {};
        vmSettings.lengthRow = 0;

        vmSettings.addLink = function() {

        };

        vmSettings.loadLinks = function() {
           vmSettings.rowCollection = linksModuleData.allLinks();
            vmSettings.lengthRow = vmSettings.rowCollection.length;
        };

        vmSettings.writeLinksFile = function() {

        };

        vmSettings.readFile = function() {

        };

        vmSettings.loadLinks();

    }]);
