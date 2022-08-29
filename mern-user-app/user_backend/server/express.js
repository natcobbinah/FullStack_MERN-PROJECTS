const express = require("express");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression');
const cors = require('cors')
const helmet = require("helmet");
const Template = require('../../template.js');
const path = require('path');
const oas3Tools = require('oas3-tools');

const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js')
const devBundle = require('./devBundle.js'); //only for development mode

//modules for server-side rendering
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var { StaticRouter } = require("react-router-dom/server");
const { MainRouter } = require("../../ui_client/MainRouter.js");
const { theme } = require("../../ui_client/theme.js");
const { ServerStyleSheets, ThemeProvider } = require("@material-ui/core/styles");


const CURRENT_WORKING_DIR = process.cwd()
const app = express();
//devBundle.compile(app); //only for development mode (removed for production)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
//app.use(helmet())
app.use(cors())

//serving static files in dist folder
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    }
};

//const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
//app.use(expressAppConfig.getApp())

//routes
app.use('/', userRoutes);
app.use('/', authRoutes);

/* app.get('/',(req,res) => {
    res.status(200).send(Template());
}) */
app.get("*", (req, res) => {
    const sheets = new ServerStyleSheets();
    const context = {};
    const markup = ReactDOMServer.renderToString(
        sheets.collect(
            <StaticRouter location={req.url} context={context}>
                    <ThemeProvider theme={theme}>
                        <MainRouter />
                    </ThemeProvider>
            </StaticRouter>
        )
    );

    if (context.url) {
        return res.redirect(303, context.url);
    }

    const css = sheets.toString();
    res.status(200).send(Template({
        markup: markup,
        css: css
    }))

});


//handling any other errors thrown by express-jwt
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            'error': err.name + " : " + err.message
        })
    } else if (err) {
        res.status(400).json({
            'error': err.name + " : " + err.message
        })
        console.log(err)
    }
})

module.exports = {
    app
}