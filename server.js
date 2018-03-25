import express from 'express'
import { Nuxt } from 'nuxt'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
const config = require('./nuxt.config.js')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port + '...')