'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE_API_KEY: "'AIzaSyC4deZsicr434GP3RKjRt2mrAUh42Kck9Y'",
  FIREBASE_AUTH_DOMAIN: "'awesome-vue-forum.firebaseapp.com'",
  FIREBASE_DATABASE_URL: "'https://awesome-vue-forum.firebaseio.com'",
  FIREBASE_PROJECT_ID: "'awesome-vue-forum'",
  FIREBASE_STORAGE_BUCKET: "'awesome-vue-forum.appspot.com'",
  FIREBASE_MESSAGING_SENDER_ID: "'588423112979'",
  FIREBASE_APP_ID: "'1:588423112979:web:2a81ee8018a6f7d10712e6'",
  FIREBASE_MEASUREMENT_ID: "'G-YEJSVLWBN6'"
})
