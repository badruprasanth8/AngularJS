// Register the `bookList` component on the `bookList` module,
angular.
  module('bookList').
  component('bookList', {
    templateUrl:'book-list/book-list.template.html',       
    controller: function LibraryController($http) {
        var self = this;
        self.orderProp = 'age';
  
        $http.get('books/books.json').then(function(response) {
          self.books = response.data;
        });
    }
  });