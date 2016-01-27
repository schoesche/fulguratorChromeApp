'use strict';


angular.module('fulgurator.linksModuleData', [])

//    .controller('linksModuleData', ['$q', function($q){
        // 25.01.2016 test , kann man später wieder geloescht werden
  //  }])



    .value('linksModuleData', {
        allLinks: function() {

            var rowCollection = [
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

            return rowCollection;

        }
    });

