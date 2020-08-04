const express = require('express')
const router = express.Router()
const IndexController = require('../app/IndexController')

router.post('/message', IndexController.send)

module.exports = router
