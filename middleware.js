/**
 * Created by songshuang on 16/1/10.
 */
module.exports = function () {
    "use strict";
    /**
     * RabbitMQ
     */
    require('./middleware/RabbitMQ/rabbitLocal');
    require('./middleware/Redis/redisLocal');
    require('./middleware/Redis/redisClient');
}();