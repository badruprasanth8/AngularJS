// Register the `bookList` component on the `bookList` module,
angular.
  module('bookList').
  component('bookList', {
    templateUrl:'book-list/book-list.template.html',       
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