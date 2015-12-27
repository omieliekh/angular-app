angular.module('slide', []).controller('slideController', [
    '$scope',
    'slideService',
function (
    $scope,
    slideService
) {
    slideService.getSlideList().then(function (slideList) {
        console.log('slideList: ', slideList);
        $scope.slideList = slideList;
    });

    $scope.test = 'test';
}]);