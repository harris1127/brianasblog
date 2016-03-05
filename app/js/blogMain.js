/**
 * Created by 23rharris on 3/5/16.
 */
/**
 * Main AngularJS Web Application
 */
var app = angular.module('brianasBlogWebApp', [
    'ngRoute',
    'blogController'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {templateUrl: 'menu/partials/home.html', controller: 'HomeCtrl'})
    // Pages
    .when("/about", {templateUrl: 'menu/partials/about.html', controller: 'AboutCtrl'})
    .when("/contact", {templateUrl: 'menu/partials/contact.html', controller: 'ContactCtrl'})
    /* etc… routes to other pages… */
    // Blog
    .when("/post", {templateUrl: 'menu/partials/post.html', Controller: 'BlogCtrl'})
    // else 404
    .otherwise("/404", {templateUrl: 'menu/partials/404.html', Controller: 'PageCtrl'});
}]);
