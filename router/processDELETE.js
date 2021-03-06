var routerUtil = require('../util/routerUtil');
var favorite = require('../controller/favorite');
var logger = require('../util/logger');

exports.process = function(request, response){
    var pathname = routerUtil.parsePathname(request);
    var path = routerUtil.parsePath(request);
    var qs = routerUtil.parseQueryString(request);
    logger.info('[3.2] '+path); 
    if(pathname[1] == 'favorite' && pathname[2] == 'info'){
        favorite.deleteFavorite(request, response, qs);
    } else if(pathname[1] == 'favorite' && pathname[2] == 'signedUp'){
        favorite.deleteSignedUpFavorites(request, response, qs);
    } else if(pathname[1] == 'favorite' && pathname[2] == 'temp'){
        favorite.deleteTempFavorites(request, response, qs);
    }
} 