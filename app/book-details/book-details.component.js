angular.
  module('bookDetails').
  component('bookDetails', {
    template: 'TBD: Detail view for <span>{{$ctrl.bookId}}</span>',
    controller: ['$routeParams','Book',
      function BookDetailsController($routeParams,Book) {
        this.bookId = $routeParams.bookId;
      }
    ]
  });