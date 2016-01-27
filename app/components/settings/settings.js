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
        /* vmSettings.rowCollection = $scope.fulgurator.rowCollection;*/

        vmSettings.insertGroup = {};
        vmSettings.insertGroup.name = "";

        vmSettings.insert = {};
        vmSettings.insert.name = "";
        vmSettings.insert.tag = "";
        vmSettings.insert.link = "";

        vmSettings.testHalloWelt = dataService.getHelloWorld();

        vmSettings.addLink = function () {
            //vmSettings.rowCollection[vmSettings.rowCollection.indexOf(vmSettings.selectedIndex)].grouplinks.push(vmSettings.insert);

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
            //vmSettings.rowCollection.splice(vmSettings.rowCollection.indexOf(index), 1);

            dataService.removeGroup(index);
        };

        vmSettings.removeLink = function (groupIndex, rowIndex) {
            //vmSettings.rowCollection[groupIndex].grouplinks.splice(rowIndex, 1);

            dataService.removeLink(groupIndex, rowIndex);
        };

        vmSettings.loadLinks = function () {
            //vmSettings.rowCollection = linksModuleData.allLinks();
            //vmSettings.lengthRow = vmSettings.rowCollection.length;

            dataService.setRowCollection(dataService.loadDefaultLinks());
            //vmSettings.rowCollection = dataService.getRowCollection();
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
                /*$scope.fulgurator.rowCollection = JSON.parse(result);*/
            }, function (reason) {
                console.log("Failed ->:" + reason);
            }, function (update) {
                console.log("Got notification ->:" + update);
            });
        };

        vmSettings.loadLinks();

    }]);
