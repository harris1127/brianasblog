/**
 * Created by 23rharris on 3/5/16.
 */
/**
 * Controls the Blog
 */

var blogController = angular.module('blogController', []);

blogController.controller('HomeCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
blogController.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

// Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

// Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});
