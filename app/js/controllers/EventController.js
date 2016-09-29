'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData) {

    //$scope.snippet = '<span stype="color:red">hi there</span>';
    //$scope.boolValue = false;
    //$scope.mystyle = {color: 'red'};
    //$scope.myclass = "blue";
    //$scope.buttonDissabled = true;
    $scope.sortorder = 'name';
    $scope.event = eventData.event;

    $scope.upVoteCount = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteCount = function(session) {
      session.upVoteCount--;
    };
  }
);
