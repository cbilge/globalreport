var app = angular.module('mainApp', ['ngRoute', 'ngResource']);
app.config(['$routeProvider', function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'mainController', 
      templateUrl: '/views/home.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
}]);

app.controller('mainController', ['$scope', 'Report', function ($scope, Report) {
    $scope.rep = Report.get();

    $scope.labelClass = function (src) {
        if (src == "Bloomberg") {
            return "bbg";
        }
        else if (src == "Reuters") {
            return "rtrs";
        }
        else if (src == "FT") {
            return "ft";
        }
        else if (src == "WSJ") {
            return "wsj";
        }
        else if (src == "subheader") {
            return "sublabel";
        }
        else {
            return "";
        }
    };

    $scope.subCheck = function (src) {
        if (src == "subheader") {
            return "subtext";
        }
        else {
            return "";
        }
    };

    $scope.subSpan = function (src) {
        if (src == "subheader") {
            //return "glyphicon glyphicon-chevron-right subspan";
            return "fa fa-level-up fa-rotate-90";
        }
        else {
            return "";
        }
    };

} ]);

app.factory('Report', ['$resource', function ($resource) {
    return $resource('/js/data/globalreport.txt', {});
} ]);