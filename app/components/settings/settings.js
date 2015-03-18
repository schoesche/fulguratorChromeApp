'use strict;'
/**
 * Created by U116064 on 11.03.2015.
 */

angular.module('fulgurator.settings',[
    /*'fulgurator.linksModule'*/
]).

    controller('SettingsCtrl',['linksModule',function(linksModule){
        var vmSettings = this;

        vmSettings.gugusvariable = "gugus123";

        vmSettings.insert = {};
        vmSettings.rowCollection = {};


        vmSettings.addLink = function() {

        };

        vmSettings.loadLinks = function() {
           /* vmSettings.rowCollection = linksModule.allLinks();*/
        };

    }]);
