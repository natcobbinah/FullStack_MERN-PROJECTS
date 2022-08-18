const express = require('express');
const userController = require('../controllers/user.controller.js');
const authController = require('../controllers/auth.controller.js');

const router = express.Router();

router.route('/api/users')
      .get(userController.list)
      .post(userController.create)

router.route('/api/users/:userId')
      .get(authController.requireSignIn,userController.read)
      .put(authController.requireSignIn, authController.hasAuthorization,userController.update)
      .delete(authController.requireSignIn, authController.hasAuthorization,userController.remove)

router.param('userId', userController.userByID)

module.exports = router
