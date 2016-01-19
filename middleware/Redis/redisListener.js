/**
 * Created by songshuang on 16/1/19.
 */
module.exports = function (client) {
    "use strict";
    var logger = require('log4js').getLogger();

    client.on('connect', function (err, data) {
        if (err) {
            logger.error(err);
            return;
        }
        logger.info('connected ok!');
    });

    client.on('data', function (err, data) {
        if (err) {
            logger.error(err);
            return;
        }
    });

    client.on('error', function (err) {
        logger.error(err);
    });

    client.on('end', function (err) {
        if (err) {
            logger.error(err);
            return;
        }
        logger.info('end ok');
    });
};