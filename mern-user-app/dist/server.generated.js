/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || 'YOUR_secret_key',\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n}; //mongodb://localhost:27017\n\nmodule.exports = {\n  systemConfig: config\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./config/config.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst Template = () => {\n  return `<!doctype html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <title>MERN Skeleton</title>\n            <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n            <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n        </head>\n        <body>\n            <div id=\"root\"></div>\n            <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n    </html>`;\n};\n\nmodule.exports = Template;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Template, \"Template\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./template.js?");

/***/ }),

/***/ "./user_backend/server/controllers/auth.controller.js":
/*!************************************************************!*\
  !*** ./user_backend/server/controllers/auth.controller.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  User\n} = __webpack_require__(/*! ../models/user.model.js */ \"./user_backend/server/models/user.model.js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst {\n  systemConfig\n} = __webpack_require__(/*! ../../../config/config.js */ \"./config/config.js\");\n\nconst {\n  expressjwt\n} = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nconst signin = async (req, res) => {\n  try {\n    let user = await User.findOne({\n      \"email\": req.body.email\n    });\n    if (!user) return res.status('401').json({\n      error: 'User not found'\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: 'Email and password do not match'\n      });\n    }\n\n    const token = jwt.sign({\n      _id: user._id\n    }, systemConfig.jwtSecret);\n    res.cookie('t', token, {\n      expire: new Date() + 999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status('401').json({\n      error: 'Could not sign in'\n    });\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie('t');\n  return res.status('200').json({\n    message: 'signed out'\n  });\n};\n\nconst requireSignIn = expressjwt({\n  secret: systemConfig.jwtSecret,\n  userProperty: 'auth',\n  algorithms: [\"HS256\"]\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403'.json({\n      error: 'User is not authorized'\n    }));\n  }\n\n  next();\n};\n\nmodule.exports = {\n  signin,\n  signout,\n  requireSignIn,\n  hasAuthorization\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(requireSignIn, \"requireSignIn\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/controllers/auth.controller.js?");

/***/ }),

/***/ "./user_backend/server/controllers/user.controller.js":
/*!************************************************************!*\
  !*** ./user_backend/server/controllers/user.controller.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  User\n} = __webpack_require__(/*! ../models/user.model.js */ \"./user_backend/server/models/user.model.js\");\n\nconst errorHandler = __webpack_require__(/*! ../helpers/dbErrorHandler.js */ \"./user_backend/server/helpers/dbErrorHandler.js\");\n\nconst create = async (req, res) => {\n  const user = new User(req.body);\n\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: errorHandler.getErrorMessage(err)\n    });\n  }\n};\n\nconst list = async (req, res) => {\n  try {\n    let users = await User.find().select('name email created');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: errorHandler.getErrorMessage(err)\n    });\n  }\n};\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await User.findById(id);\n    if (!user) return res.status('400').json({\n      error: 'User not found'\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: 'Could not retrieve user'\n    });\n  }\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst update = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = Object.assign(user, req.body); //copy req.body contents to user in-order to be updated\n\n    user.updated = Date.now();\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: errorHandler.getErrorMessage(err)\n    });\n  }\n};\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: errorHandler.getErrorMessage(err)\n    });\n  }\n};\n\nmodule.exports = {\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/controllers/user.controller.js?");

/***/ }),

/***/ "./user_backend/server/devBundle.js":
/*!******************************************!*\
  !*** ./user_backend/server/devBundle.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  systemConfig\n} = __webpack_require__(/*! ../../config/config.js */ \"./config/config.js\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst webpackMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nconst WebpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nconst webpackConfig = __webpack_require__(/*! ../../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nconst compile = app => {\n  if (systemConfig.env === \"development\") {\n    const compiler = webpack(webpackConfig);\n    const middleware = webpackMiddleware(compiler, {\n      publicPath: webpackConfig.output.publicPath\n    });\n    app.use(middleware);\n    app.use(WebpackHotMiddleware(compiler));\n  }\n};\n\nmodule.exports = {\n  compile\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/devBundle.js?");

/***/ }),

/***/ "./user_backend/server/express.js":
/*!****************************************!*\
  !*** ./user_backend/server/express.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nconst compress = __webpack_require__(/*! compression */ \"compression\");\n\nconst cors = __webpack_require__(/*! cors */ \"cors\");\n\nconst helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nconst Template = __webpack_require__(/*! ../../template.js */ \"./template.js\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst oas3Tools = __webpack_require__(/*! oas3-tools */ \"oas3-tools\");\n\nconst userRoutes = __webpack_require__(/*! ./routes/user.routes.js */ \"./user_backend/server/routes/user.routes.js\");\n\nconst authRoutes = __webpack_require__(/*! ./routes/auth.routes.js */ \"./user_backend/server/routes/auth.routes.js\");\n\nconst devBundle = __webpack_require__(/*! ./devBundle.js */ \"./user_backend/server/devBundle.js\"); //only for development mode\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express();\ndevBundle.compile(app); //only for development mode (removed for production)\n\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: true\n}));\napp.use(cookieParser());\napp.use(compress()); //app.use(helmet())\n\napp.use(cors()); //serving static files in dist folder\n\napp.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist'))); //swaggerRouter configuration\n\nconst options = {\n  routing: {\n    controllers: path.join(__dirname, './controllers')\n  }\n}; //const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);\n//app.use(expressAppConfig.getApp())\n//routes\n\napp.use('/', userRoutes);\napp.use('/', authRoutes);\napp.get('/', (req, res) => {\n  res.status(200).send(Template());\n}); //handling any other errors thrown by express-jwt\n\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      'error': err.name + \" : \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      'error': err.name + \" : \" + err.message\n    });\n    console.log(err);\n  }\n});\nmodule.exports = {\n  app\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\express.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\express.js\");\n  reactHotLoader.register(options, \"options\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/express.js?");

/***/ }),

/***/ "./user_backend/server/helpers/dbErrorHandler.js":
/*!*******************************************************!*\
  !*** ./user_backend/server/helpers/dbErrorHandler.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output = '';\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf(_1));\n    output = fieldName.chartAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n\nmodule.exports = {\n  getErrorMessage\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./user_backend/server/models/user.model.js":
/*!**************************************************!*\
  !*** ./user_backend/server/models/user.model.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nconst UserSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: true,\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: Date,\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return 'not password';\n\n    try {\n      return crypto.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return 'encrypting password error';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n});\nmodule.exports = {\n  User: mongoose.model('Users', UserSchema)\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\models\\\\user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/models/user.model.js?");

/***/ }),

/***/ "./user_backend/server/routes/auth.routes.js":
/*!***************************************************!*\
  !*** ./user_backend/server/routes/auth.routes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst authController = __webpack_require__(/*! ../controllers/auth.controller.js */ \"./user_backend/server/controllers/auth.controller.js\");\n\nconst router = express.Router();\nrouter.route('/auth/signin').post(authController.signin);\nrouter.route('/auth/signout').get(authController.signout);\nmodule.exports = router;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\routes\\\\auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/routes/auth.routes.js?");

/***/ }),

/***/ "./user_backend/server/routes/user.routes.js":
/*!***************************************************!*\
  !*** ./user_backend/server/routes/user.routes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst userController = __webpack_require__(/*! ../controllers/user.controller.js */ \"./user_backend/server/controllers/user.controller.js\");\n\nconst authController = __webpack_require__(/*! ../controllers/auth.controller.js */ \"./user_backend/server/controllers/auth.controller.js\");\n\nconst router = express.Router();\nrouter.route('/api/users').get(userController.list).post(userController.create);\nrouter.route('/api/users/:userId').get(authController.requireSignIn, userController.read).put(authController.requireSignIn, authController.hasAuthorization, userController.update).delete(authController.requireSignIn, authController.hasAuthorization, userController.remove);\nrouter.param('userId', userController.userByID);\nmodule.exports = router;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/routes/user.routes.js?");

/***/ }),

/***/ "./user_backend/server/server.js":
/*!***************************************!*\
  !*** ./user_backend/server/server.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  systemConfig\n} = __webpack_require__(/*! ../../config/config.js */ \"./config/config.js\");\n\nconst {\n  app\n} = __webpack_require__(/*! ./express.js */ \"./user_backend/server/express.js\");\n\nconst {\n  mongoose\n} = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\napp.listen(systemConfig.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.log('Server started on port %s.', systemConfig.port);\n});\nmongoose.Promise = global.Promise;\nlet mongooseConnectOptions = {\n  useNewUrlParser: true,\n\n  /*  useCreateIndex: true, causes connection error when used */\n  useUnifiedTopology: true\n};\nmongoose.connect(systemConfig.mongoUri, mongooseConnectOptions).then(() => console.log('mongodbAtlas connected')).catch(e => console.log(e));\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(mongooseConnectOptions, \"mongooseConnectOptions\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\user_backend\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./user_backend/server/server.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'ui_client/main.js')],\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.css$/i,\n      use: [\"style-loader\", \"css-loader\"]\n    }, {\n      test: /\\.(png|svg|jpg|jpeg|gif)$/i,\n      type: 'asset/resource'\n    }, {\n      test: /\\.(woff|woff2|eot|ttf|otf)$/i,\n      type: 'asset/resource'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\nah\\\\Desktop\\\\Full stack mern Projects\\\\mern-user-app\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://usercrud_backend/./webpack.config.client.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-jwt");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "oas3-tools":
/*!*****************************!*\
  !*** external "oas3-tools" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("oas3-tools");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./user_backend/server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;