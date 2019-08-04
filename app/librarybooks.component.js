// Register `bookList` component, along with its associated controller and template
angular.
  module('libraryApp').
  component('bookList', {
    template:
        '<ul>' +
          '<li ng-repeat="book in $ctrl.books">' +
            '<span>{{book.name}}</span>' +
            '<p>{{book.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function LibraryController() {
      this.books = [
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
    }
  });