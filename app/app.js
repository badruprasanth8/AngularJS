// Define the `libraryAppApp` module
var libApp = angular.module('libraryApp', []);

// Define the `LibraryController` controller on the `libraryApp` module
libApp.controller('LibraryController', function LibraryController($scope) {
  $scope.books = [
    {
      name: 'Social',
      snippet: 'Book about social science.'
    }, {
      name: 'Computer',
      snippet: 'Book about computer science.'
    }, {
      name: 'Physics',
      snippet: 'Book about physics.'
    }
  ];
});