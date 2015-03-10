'use strict';


angular.module('fulgurator.linksModule', [])



    .value('linksModule', {
        allLinks: function() {

            var rowCollection = [
                {
                    "groupname": "Allgemein",
                    "grouplinks": [
                        {
                            "name": "google",
                            "tag": "google",
                            "link": "https://www.google.ch"
                        },
                        {
                            "name": "google",
                            "tag": "google",
                            "link": "https://www.google.ch"
                        }
                    ]
                },
                {
                    "groupname": "Development",
                    "grouplinks": [
                        {
                            "name": "google",
                            "tag": "google",
                            "link": "https://www.google.ch"
                        },
                        {
                            "name": "google",
                            "tag": "google",
                            "link": "https://www.google.ch"
                        }
                    ]
                }

            ];

            return rowCollection;

        }
    });

