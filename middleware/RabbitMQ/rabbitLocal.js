/**
 * Created by songshuang on 16/1/10.
 */

/**
 *
 * RabbitMQ
 */
module.exports = function () {
    "use strict";

    var log4js = require("log4js");
    var logger = log4js.getLogger();

    var amqp = require('amqp');
    var CONFIG = require('../../config');
    var connection = amqp.createConnection(CONFIG.rabbitConfig);

    connection.on('ready', function (error) {
        if (error) {
            logger.error(error);
            return error;
        }

        var queue = connection.queue("test-queue", function (queue) {
            //logger.info("queue success");
        });

        queue.bind("test-exchange", "test-routingKing");
        queue.subscribe(getMessage)
    });

    function getMessage (msg) {
        logger.info(msg);
    }
}();
