const express  = require('express')
const authController = require('../controllers/auth.controller.js')

const router = express.Router()

router.route('/auth/signin')
      .post(authController.signin)

router.route('/auth/signout')
      .get(authController.signout)

module.exports = router
