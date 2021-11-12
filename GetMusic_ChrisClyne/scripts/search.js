//create a contoller named iTunesContoller
var iTunesController = function ($scope, $http) {
    //define function searchiTunes which takes parameter artist from the form
    $scope.searchiTunes = function (artist) {
        //connect to the iTunes API
        $http
            .jsonp("https://itunes.apple.com/search", {
                params: {
                    callback: "JSON_CALLBACK",
                    term: artist,
                },
            })
            .then(onSearchComplete, onError);
    };
    //searchiTunes function ends here
    // function return data for the search results
    var onSearchComplete = function (response) {
        //grab all data in search results
        $scope.data = response.data;
        $scope.songs = response.data.results;
    };

    var onError = function (reason) {
        $scope.error = reason;
    };
};
