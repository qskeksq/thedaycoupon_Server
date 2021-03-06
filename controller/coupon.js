var dao = require('../dao/couponDao');
var error = require('../error');
var logger = require('../util/logger');
var result = {
    "totalCount": 0,
    "RESULT" : {
        "CODE": "200",
        "MESSAGE": "정상 처리되었습니다"
    },
    "coupon" : []
}

/**
 * 데이터 전체 읽어옴-데이터가 부족한 초반
 */
exports.readAll = function(request, response){
    logger.info('[4.1] CONTROLLER coupon-readAll');
    dao.selectAll((err, rows)=>{
        if(err) return error.send(response, 500, err);
        send(response, rows);  
    });
}

/**
 * 현재 위치 기반 데이터 쿼리-데이터가 충분한 경우
 */
exports.readByLocation = function(request, response, qs){
    logger.info('[4.1] CONTROLLER coupon-readByLocation');
    dao.selectByLocation(qs, (err, rows)=>{
        if(err) return error.send(response, 500, err);
        send(response, rows);  
    });
}

function send(response, rows) {
    result.totalCount = rows.length;
    result.coupon = rows;
    response.end(JSON.stringify(result));     
    logger.info('[6] COMPLETE');    
}