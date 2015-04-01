'use strict;'

angular.module('fulgurator.settings',['fulgurator.filemanipulator'])

    .controller('SettingsCtrl',['$q','linksModuleData', 'FileService', function($q, linksModuleData, FileService){
        var vmSettings = this;

        vmSettings.rowCollection = {};

        vmSettings.insertGroup = {};
        vmSettings.insertGroup.name = "";

        vmSettings.insert = {};
        vmSettings.insert.name = "";
        vmSettings.insert.tag = "";
        vmSettings.insert.link = "";

        vmSettings.addLink = function() {
            vmSettings.rowCollection[vmSettings.rowCollection.indexOf(vmSettings.selectedIndex)].grouplinks.push(vmSettings.insert);
            vmSettings.insert = {};
        };

        vmSettings.addGroup = function() {
            var newGroup = {};
            newGroup.groupname = vmSettings.insertGroup.name;
            newGroup.grouplinks = [];
            vmSettings.rowCollection.push(newGroup);
            vmSettings.insertGroup = {};
        };

        vmSettings.removeGroup = function(index) {
            vmSettings.rowCollection.splice(vmSettings.rowCollection.indexOf(index), 1);
        };

        vmSettings.removeLink = function(groupIndex , rowIndex) {

            vmSettings.rowCollection[groupIndex].grouplinks.splice(rowIndex, 1);
        };

        vmSettings.loadLinks = function() {
            vmSettings.rowCollection = linksModuleData.allLinks();
            vmSettings.lengthRow = vmSettings.rowCollection.length;
        };

        vmSettings.writeLinksFile = function() {
            var jsonString = JSON.stringify(vmSettings.rowCollection);
            FileService.saveFileAs(jsonString);
        };

        vmSettings.readFile = function() {
            vmSettings.rowCollection = [];
            var promiseReadFile = FileService.readFile();
            promiseReadFile.then(function (result) {
                console.log("reading successful:" + result);
                vmSettings.rowCollection = JSON.parse(result);
            }, function (reason) {
                console.log("Failed ->:" + reason);
            }, function (update) {
                console.log("Got notification ->:" + update);
            });
        };

        vmSettings.loadLinks();

    }]);
