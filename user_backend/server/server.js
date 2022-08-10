import config from '../config/config.js';
import app from './express.js';
import mongoose from 'mongoose';
import 'dotenv/config' 

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Server started on port %s.', config.port)
})

mongoose.Promise = global.Promise;
let mongooseConnectOptions = {
    useNewUrlParser: true,
   /*  useCreateIndex: true, causes connection error when used */
    useUnifiedTopology: true
}
mongoose.connect(config.mongoUri, mongooseConnectOptions)
        .then(() => console.log('mongodbAtlas connected'))
        .catch(e => console.log(e))