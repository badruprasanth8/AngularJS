'use strict';
// Define the `libraryApp` module
angular.module('libraryApp',  [
  'ngRoute',
  'core',
    // ...which depends on the `bookList` module
    'bookList',
    'bookDetails'
  ]);