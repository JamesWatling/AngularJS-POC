@app = angular.module("Watchlist", [])

@WatchlistController = ['$scope', '$http','$element' ,   (scope, http, element) ->
  scope.images = ['1.png','2.png','3.png']
  scope.watchlist = []

  scope.addToWatchlist = (id) ->
    if scope.watchlist.indexOf(id) is -1
      scope.watchlist.push (id)

  scope.removeFromWatchlist = (id) ->
    scope.watchlist.splice scope.watchlist.indexOf(id) , 1
]