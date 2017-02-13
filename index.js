'use strict'

/**
* Modules Dependencies
*/
const	config			= require('./config'),
		restify			= require('restify'),
     	bunyan			= require('bunyan'),
     	winston			= require('winston'),
     	bunyanWinston	= require('bunyan-winston-adapter')



/**
 * Logging
 */
global.log = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            timestamp: () => {
                return new Date().toString()
            },
            json: true
        }),
    ]
})


/**
 * Initialize Server
 */
global.server = restify.createServer({
    name    : config.name,
    version : config.version,
    log     : bunyanWinston.createAdapter(log),
})