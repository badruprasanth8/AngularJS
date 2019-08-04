'use strict';
// Define the `libraryApp` module
angular.module('libraryApp',  [
  'ngRoute',
    // ...which depends on the `bookList` module
    'bookList',
    'bookDetails'
  ]);