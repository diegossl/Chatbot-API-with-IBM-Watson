const express = require('express')
const router = express.Router()
const Gateway = require('../api/Gateway')

router.post('/message', Gateway.send)

module.exports = router
