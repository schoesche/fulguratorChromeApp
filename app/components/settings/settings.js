'use strict;'

angular.module('fulgurator.settings',[

]).

    controller('SettingsCtrl',['linksModuleData', function(linksModuleData){
        var vmSettings = this;

        vmSettings.rowCollection = {};

        vmSettings.addLink = function() {

        };

        vmSettings.loadLinks = function() {
           vmSettings.rowCollection = linksModuleData.allLinks();
        };

        vmSettings.writeLinksFile = function() {

        };

        vmSettings.readFile = function() {

        };

        vmSettings.loadLinks();

    }]);
