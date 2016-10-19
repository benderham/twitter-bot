'use strict'
console.log('bot is running...')

const Twit = require('twit')

const t = new Twit({
  consumer_key:         'uFjbrFHbN1dVxNS9l9hrOLGKe',
  consumer_secret:      'eB4Avj211VEsiLI7Aetc5Nq0Urm3vdugihA0YSeuaFaptWLfdY',
  access_token:         '738303551684804608-P5cJ7P9cQw6QMQm70MlqSRF6PcUMggu',
  access_token_secret:  'zbYvdwsvtfVT2mMDBMXWrhPv4LSTKEJwrR6DiOsJlkrmS'
})

const logError = function(err) {
  if (err) {
    return console.log(err)
  }
}

const replyTweet = function(tweet) {
  return t.post('statuses/update', tweet, logError)
}

const composeTweet = function(user) {
  return {
    status: 'hello @' + user + '!'
  }
}

const handleTweet = function(tweet) {
  let user = tweet.user.screen_name
  replyTweet(composeTweet(user))
}

const query = {
  track: '#apptestben'
}
const stream = t.stream('statuses/filter', query)

stream.on('tweet', handleTweet)
