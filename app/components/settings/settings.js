/** Created by Georg Achermann */
'use strict;'

angular.module('fulgurator.settings', [
    'fulgurator.filemanipulator',
    'fulgurator.data'
])

    .controller('SettingsCtrl', ['$scope', '$q',  'FileService', 'dataService', function ($scope, $q,  FileService, dataService) {
        var vmSettings = this;

        vmSettings.rowCollection = {};
        vmSettings.rowCollection = dataService.getRowCollection();

        vmSettings.insertGroup = {};
        vmSettings.insertGroup.name = "";

        vmSettings.insert = {};
        vmSettings.insert.name = "";
        vmSettings.insert.tag = "";
        vmSettings.insert.link = "";

        vmSettings.testHalloWelt = dataService.getHelloWorld();

        vmSettings.addLink = function () {
            console.log("addLink", vmSettings.selectedIndex);
            dataService.addLink(vmSettings.selectedIndex, vmSettings.insert);
            vmSettings.insert = {};
        };

        vmSettings.addGroup = function () {
            var newGroup = {};
            newGroup.groupname = vmSettings.insertGroup.name;
            newGroup.grouplinks = [];

            dataService.addGroup(newGroup);

            vmSettings.insertGroup = {};
        };

        vmSettings.removeGroup = function (index) {
            dataService.removeGroup(index);
        };

        vmSettings.removeLink = function (groupIndex, rowIndex) {
            dataService.removeLink(groupIndex, rowIndex);
        };

        vmSettings.loadLinks = function () {
            vmSettings.rowCollection = dataService.getRowCollection();
        };

        vmSettings.writeLinksFile = function () {
            var jsonString = JSON.stringify(dataService.getRowCollection());
            //var jsonString = JSON.stringify(vmSettings.rowCollection);
            FileService.saveFileAs(jsonString);
        };

        vmSettings.readFile = function () {
            /*  dataService.readFile();
             vmSettings.rowCollection = dataService.getRowCollection();
             console.log("gugus" + dataService.getRowCollection());*/
            //vmSettings.rowCollection = [];
            var promiseReadFile = FileService.readFile();
            promiseReadFile.then(function (result) {
                console.log("reading successful:" + result);
                //vmSettings.rowCollection = JSON.parse(result);

                dataService.setRowCollection(JSON.parse(result));
                vmSettings.loadLinks();
                /*$scope.fulgurator.rowCollection = JSON.parse(result);*/
            }, function (reason) {
                console.log("Failed ->:" + reason);
            }, function (update) {
                console.log("Got notification ->:" + update);
            });
        };

    }]);
