// Register the `bookList` component on the `bookList` module,
angular.
  module('bookList').
  component('bookList', {
    templateUrl:'book-list/book-list.template.html',       
    controller: ['Book',
      function BookListController(Book) {
        this.books = Book.query();
        this.orderProp = 'age';
      }
    ]
  });