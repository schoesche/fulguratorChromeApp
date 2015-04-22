/** Created by Georg Achermann */
'use strict;'

angular.module('fulgurator.settings',[
    'fulgurator.filemanipulator',
    'fulgurator.data'
])

    .controller('SettingsCtrl',['$scope','$q','linksModuleData', 'FileService', 'DataService', function($scope, $q, linksModuleData, FileService, DataService){
        var vmSettings = this;

        vmSettings.rowCollection = {};
       /* vmSettings.rowCollection = $scope.fulgurator.rowCollection;*/

        vmSettings.insertGroup = {};
        vmSettings.insertGroup.name = "";

        vmSettings.insert = {};
        vmSettings.insert.name = "";
        vmSettings.insert.tag = "";
        vmSettings.insert.link = "";

        vmSettings.testHalloWelt = DataService.getHelloWorld();

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
          /*  DataService.readFile();
            vmSettings.rowCollection = DataService.getRowCollection();
            console.log("gugus" + DataService.getRowCollection());*/
                        vmSettings.rowCollection = [];
                        var promiseReadFile = FileService.readFile();
                        promiseReadFile.then(function (result) {
                            console.log("reading successful:" + result);
                            vmSettings.rowCollection = JSON.parse(result);
                            /*$scope.fulgurator.rowCollection = JSON.parse(result);*/
                        }, function (reason) {
                            console.log("Failed ->:" + reason);
                        }, function (update) {
                            console.log("Got notification ->:" + update);
                        });
        };

        vmSettings.loadLinks();

    }]);
