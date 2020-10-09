const functions = require('firebase-functions')
const express = require('express')
const requestIp = require('request-ip')
const ipRangeCheck = require('ip-range-check')
const is = require('is_js')
const basicAuth = require('basic-auth-connect')
 
const ALLOWIPS = [
  '127.0.0.1', // local
  '0/255.0/255.0/255.0/255'
]
const USERNAME = 'createp'
const PASSWORD = 'matsuge1000000bon' 
const app = express()
 
// IP Auth
app.all('/*', (req, res, next) => {
  var clientIp = is.ip(req.headers['fastly-client-ip'])
    ? req.headers['fastly-client-ip']
    : requestIp.getClientIp(req)
  ipRangeCheck(clientIp, ALLOWIPS)
    ? next()
    : res.send('Not Allowed')
})
 
// Basic Auth
app.use(basicAuth(USERNAME, PASSWORD))
 
app.use(express.static(__dirname + '/public/'))
exports.firebaseAuth = functions.https.onRequest(app)