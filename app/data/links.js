'use strict';


angular.module('fulgurator.linksModuleData', [])



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

