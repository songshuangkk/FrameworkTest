/**
 * Created by songshuang on 16/1/15.
 */
var amqp = require('amqp');
var logger = require('log4js').getLogger();
var amqp = require('amqp');
var CONFIG = require('../../config');

var connection = amqp.createConnection(CONFIG.rabbitConfig);

connection.on('ready', function (err) {
    if (err) {
        logger.error(err);
        return err;
    }

    var exchange = connection.exchange("test-exchange", function (exchange) {
        logger.info('exchange '+ exchange.name +'success');
    });

    var queue = connection.queue("test-queue", function (queue) {
        logger.info("queue success");
    });

    queue.bind(exchange, 'test-routingKing');

    /*
     '#' all queue
     */
    // queue.bind(exchange, '#');
    exchange.publish('test-routingKing', {message: 'test-message'});
});
