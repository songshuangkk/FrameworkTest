/**
 * Created by songshuang on 16/1/10.
 */

module.exports = {

    rabbitConfig: {
        host: '192.168.99.100',
        port: 5672,
        login: 'guest',
        password: 'guest',
        connectionTimeout: 10000,
        authMechanism: 'AMQPLAIN',
        vhost: '/',
        noDelay: true
    }
};