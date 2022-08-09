import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'


const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://testing:testing1234@cluster0.xuhccms.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;


// Was getting an error when running line 22 as the port = 5000 is reserverve by airplay in macbooks, turned off the airplay and all workking now
mongoose.connect(CONNECTION_URL,).then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}'))).catch((error) => console.log(error.message));