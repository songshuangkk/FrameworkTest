/**
 * Created by songshuang on 16/1/17.
 */

module.exports = function(){
    "use strict";
    var CONFIG = require("../../config");
    var redis = require("redis");
    var logger = require("log4js").getLogger();
    var redisClient = redis.createClient(CONFIG.redisConfig);

    redisClient.on("error", function (err) {
        logger.error(err);
    });

    redisClient.on("ready", function (err) {
        if (err) {
            logger.error(err);
            return err;
        }
        logger.info("redis ready ok!");
    });

    redisClient.on("connect", function (err) {
        if (err) {
            logger.error(err);
            return err;
        }

        logger.info("redis connect ok!");
    });

    redisClient.on("end", function (err) {
        if (err) {
            logger.error(err);
            return err;
        }
        logger.info("redis disconnect ok!");
    });



    return {

    }
}();