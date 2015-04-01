/** Created by Georg Achermann */
'use strict;'

angular.module('fulgurator.data',['fulgurator.filemanipulator'])

    .factory('DataService', ['$q','linksModuleData', 'FileService', function($q, linksModuleData, FileService){
        var factory = {};
        factory.rowCollection = {};

        factory.addLink = function(selectedGroupIndex, addLink) {
            factory.rowCollection[factory.rowCollection.indexOf(selectedGroupIndex)].grouplinks.push(addLink);
        };

        factory.addGroup = function(newGroup) {
            factory.rowCollection.push(newGroup);
        };

        factory.removeGroup = function(index) {
            factory.rowCollection.splice(factory.rowCollection.indexOf(index), 1);
        };

        factory.removeLink = function(groupIndex , rowIndex) {
            factory.rowCollection[groupIndex].grouplinks.splice(rowIndex, 1);
        };

        // Load dummy data from dummy module
        // linksModuleData is just to see something
        factory.loadLinks = function() {
            factory.rowCollection = linksModuleData.allLinks();
        };

        factory.writeLinksFile = function() {
            var jsonString = JSON.stringify(factory.rowCollection);
            FileService.saveFileAs(jsonString);
        };

        factory.readFile = function() {
            factory.rowCollection = [];
            var promiseReadFile = FileService.readFile();
            promiseReadFile.then(function (result) {
                console.log("reading successful:" + result);
                factory.rowCollection = JSON.parse(result);

            }, function (reason) {
                console.log("Failed ->:" + reason);
            }, function (update) {
                console.log("Got notification ->:" + update);
            });

        };

        factory.getRowCollection = function () {
            return factory.rowCollection;
        }

        // Load dummy data
        factory.loadLinks();

        return factory;
    }]);