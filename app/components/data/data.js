/** Created by Georg Achermann */
'use strict;'

angular.module('fulgurator.data',[
    'fulgurator.filemanipulator'])



    .factory('dataService', ['$q', 'FileService', function($q,  FileService){
        var factory = {};
        factory.testHalloWelt = 'Hello World, I love you!';


        var rowCollectionDummy = [
            {
                "groupname": "Allgemein",
                "grouplinks": [
                    {
                        "name": "google",
                        "tag": "google 2",
                        "link": "https://www.google.ch"
                    },
                    {
                        "name": "google",
                        "tag": "google 1",
                        "link": "https://www.google.ch"
                    }
                ]
            },
            {
                "groupname": "Development",
                "grouplinks": [
                    {
                        "name": "google",
                        "tag": "google 3",
                        "link": "https://www.google.ch"
                    },
                    {
                        "name": "google",
                        "tag": "google 2",
                        "link": "https://www.google.ch"
                    }
                ]
            }
        ];


        console.log("data js rowCollection wird ");
        factory.rowCollection = {};
        factory.rowCollection = rowCollectionDummy;


        factory.getHelloWorld = function() {
            return factory.testHalloWelt;
        };

        factory.setRowCollection = function(rowCollection) {
            console.log("data js setRowCollection rowCollection1", factory.rowCollection);
            console.log("data js setRowCollection", rowCollection);
            factory.rowCollection = rowCollection;
            console.log("data js setRowCollection rowCollection2", factory.rowCollection);
            return factory.rowCollection;
        };

        factory.getRowCollection = function () {
            return factory.rowCollection;
        };

        factory.addGroup = function(newGroup) {
            console.log("add group", newGroup);
            factory.rowCollection.push(newGroup);
        };

        factory.addLink = function(selectedGroupIndex, addLink) {
            console.log("add link selectedGroupIndex", selectedGroupIndex);
            factory.rowCollection[factory.rowCollection.indexOf(selectedGroupIndex)].grouplinks.push(addLink);
        };

        factory.removeGroup = function(index) {
            factory.rowCollection.splice(factory.rowCollection.indexOf(index), 1);
        };

        factory.removeLink = function(groupIndex , rowIndex) {
            factory.rowCollection[groupIndex].grouplinks.splice(rowIndex, 1);
        };

        factory.loadDefaultLinks = function() {
            return factory.rowCollection;
        };

    return factory;
    }]);