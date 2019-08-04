angular.
  module('core.books').
  factory('Book', ['$resource',
    function($resource) {
      return $resource('books/:bookId.json', {}, {
        query: {
          method: 'GET',
          params: {bookId: 'books'},
          isArray: true
        }
      });
    }
  ]);