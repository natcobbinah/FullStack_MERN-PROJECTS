const  { systemConfig } = require('../../config/config.js')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../webpack.config.client.js')

const compile = (app) => {
    if(systemConfig.env === "development"){
        const compiler = webpack(webpackConfig)
        const middleware = webpackMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath
        })
        app.use(middleware)
        app.use(WebpackHotMiddleware(compiler))
    }
}

module.exports = {
    compile
}