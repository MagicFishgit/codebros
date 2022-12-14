import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import all routes.
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

// mongodb.com/cloud/atlas  with temporary credentials.
const CONNECTION_URL = "";
const PORT = process.env.PORT || 5000;

// Connect to mongodb
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Server listening on port: ' + PORT)))
    .catch((error) => console.log(error.message));