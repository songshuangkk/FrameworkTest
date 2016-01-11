/**
 * Created by songshuang on 16/1/10.
 */

/**
 *
 * RabbitMQ
 */
module.exports = function () {
    "use strict";

    var rabbit = require('rabbit.js');
    var CONFIG = require('../../config');

    var context = rabbit.createContext(CONFIG.rabbitHost);
    context.on('error', function (error) {
        console.log(error);
    });

    context.on('ready', function () {
        console.log('ready');
    });

    function getMessage() {

    }



    return {
      getMessage: getMessage
    };
}();
