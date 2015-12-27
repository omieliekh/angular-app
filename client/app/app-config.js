angular.module('app').config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
function (
    $locationProvider,
    $stateProvider,
    $urlRouterProvider
) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "app/modules/module1/module1.html"
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "app/modules/module2/module2.html"
        })
        .state('slide', {
            url: "/slide",
            templateUrl: "app/modules/slide/slide.html",
            controller: 'slideController'
        })
    ;

}]);