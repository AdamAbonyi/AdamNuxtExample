const express = require('express')
const Nuxt = require('nuxt').Nuxt

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
const config = require('./nuxt.config.js')

// Init Nuxt.js
const nuxt = new Nuxt(config)

function filterAllowedUrls(req, res, next) {
    console.log(req.url)
    if (req.url.startsWith('/_nuxt/') || 
        req.url.startsWith('/images/') || 
        req.url.startsWith('/favicon.ico') || 
        req.url.startsWith('/dsvbov') || 
        req.url.startsWith('/configurator')
        ) {
        next()
    } else {
        res.status(404).send('The requested URL was not found on the server.').end();
    }
}

// Give nuxt middleware to express
app.use(filterAllowedUrls)
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port + '...')