'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2013',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directive Masterclass',
          creatorName: 'Bob Smith',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'Inthis session you will learn the ins and outs of directives!'
        },
        {
          name: 'Scope for fun and profit',
          creatorName: 'John Doe',
          duration: '30 mins',
          level: 'Introductory',
          abstract: 'This session will take a closer look at scopes. Learn what they do, how they to it, and how to get them to do it for you.'
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'John Doe',
          duration: '2 hours',
          level: 'Intermediate',
          abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win'
        },
      ]
    };
  }
);
