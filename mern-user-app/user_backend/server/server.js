const { systemConfig } = require('../../config/config.js');
const { app } = require('./express.js');
const { mongoose } = require('mongoose');
require("dotenv").config();

app.listen(systemConfig.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Server started on port %s.', systemConfig.port)
})

mongoose.Promise = global.Promise;
let mongooseConnectOptions = {
    useNewUrlParser: true,
    /*  useCreateIndex: true, causes connection error when used */
    useUnifiedTopology: true
}
mongoose.connect(systemConfig.mongoUri, mongooseConnectOptions)
    .then(() => console.log('mongodbAtlas connected'))
    .catch(e => console.log(e))
