var app = angular.module("presApp", ['ngRoute']);

//Sets specific html view to load and sets an Angular controller
app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: "../../views/home.html",
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: "../../views/about.html",
            controller: "AboutController"
        })
        .when('/jobs', {
            templateUrl: "../../views/jobs.html",
            controller: "JobsController"
        })
        .when('/rank', {
            templateUrl: "../../views/rank.html",
            controller: "RankController"
        })

    $locationProvider.html5Mode(true);
});

app.controller("HomeController", ["$scope", function($scope){
    $scope.message = "DAnald Tramp";
}]);
app.controller("AboutController", ["$scope", function($scope){
    $scope.message = ["Danald Tramp is running for president because he is going through a midlife crisis", 'Donwald Trimp is running for president because he is looking to make more money'];
}]);
app.controller("JobsController", ["$scope", function($scope){
    $scope.message = ["pyramid scheme", "soda bottle collector", "some kinda real estate stuff", "reality TV fool"];
}]);
app.controller("RankController", ["$scope", function($scope){
    $scope.message = "somehow still leading the Republican Primary";
}]);