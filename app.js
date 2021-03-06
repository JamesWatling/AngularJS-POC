// Generated by CoffeeScript 1.6.3
this.app = angular.module("Watchlist", []);

this.WatchlistController = [
  '$scope', '$http', '$element', function(scope, http, element) {
    scope.images = ['1.png', '2.png', '3.png'];
    scope.watchlist = [];
    scope.addToWatchlist = function(id) {
      if (scope.watchlist.indexOf(id) === -1) {
        return scope.watchlist.push(id);
      }
    };
    return scope.removeFromWatchlist = function(id) {
      return scope.watchlist.splice(scope.watchlist.indexOf(id), 1);
    };
  }
];
