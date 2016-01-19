/**
 * Created by songshuang on 16/1/17.
 */

/**
 * redis client 的本地实现
 */
module.exports = function () {
    "use strict";
    var CONFIG = require('../../config');
    var redisListener = require('./redisListener');
    var logger = require('log4js').getLogger();
    var net = require('net');

    // 连接Redis Server
    var client = net.createConnection(CONFIG.redisConfig);

    // 监听事件方法
    redisListener(client);

    function CreateClient() {
        return client;
    }

    CreateClient.prototype.sendCommand = function (command) {
        client.write('auth Ss6474629', 'utf8', function (err, data){
            if (err) {
                logger.error(err);
                return;
            }
            logger.info('data = ' + data);
        });
    };

    return new CreateClient();
} ();