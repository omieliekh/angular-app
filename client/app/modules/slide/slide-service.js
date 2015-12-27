angular.module('slide').service('slideService', [
    '$q',
    '$http',
    'slideConfig',
function (
    $q,
    $http,
    slideConfig
) {
    this.getSlideList = function () {
        console.log('getSlideList');
        console.log(slideConfig.slideList);

        //return angular.copy(slideConfig.slideList);

        var defer = $q.defer();

        $http({
            method: 'GET',
            url: slideConfig.slideList
        }).then(function (response) {
            console.log('success');

            if (!response.data){
                defer.reject(response);
                return;
            }

            defer.resolve(response.data);

        }, function (response) {
            defer.reject(response);
            console.log('fail');

        });

        return defer.promise;
    };


}]);