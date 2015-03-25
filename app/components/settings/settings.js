'use strict;'

angular.module('fulgurator.settings',[])

    .controller('SettingsCtrl',['linksModuleData', function(linksModuleData){
        var vmSettings = this;

        vmSettings.rowCollection = {};
        vmSettings.lengthRow = 0;

        vmSettings.addLink = function() {

        };

        vmSettings.removeGroup = function(index) {
            console.log("group :" + index);
            vmSettings.rowCollection.splice(vmSettings.rowCollection.indexOf(index), 1);
        }

        vmSettings.removeLink = function(groupIndex , rowIndex) {
            console.log("group :" + groupIndex + " row :" + rowIndex);
            vmSettings.rowCollection[groupIndex].grouplinks.splice(rowIndex, 1);
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
