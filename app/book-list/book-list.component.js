// Register the `bookList` component on the `bookList` module,
angular.
  module('bookList').
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