const express = require('express')
const IndexController = require('../app/IndexController')

const router = express.Router()

router.post('/message', IndexController.send)

module.exports = router
