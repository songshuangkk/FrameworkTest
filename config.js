/**
 * Created by songshuang on 16/1/10.
 */

module.exports = {

    serverConfig: {
        port: 5555
    },

    rabbitConfig: {
        host: '192.168.99.100',
        port: 5672,
        login: 'guest',
        password: 'guest',
        connectionTimeout: 10000,
        authMechanism: 'AMQPLAIN',
        vhost: '/',
        noDelay: true
    },

    redisConfig: {
        host: '',
        port: '',
        auth_pass: '',
        select_db: ''
    }
};