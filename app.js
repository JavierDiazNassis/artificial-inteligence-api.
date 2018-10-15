import express from 'express';
import bodyParser from 'body-parser';
import indexRoutes from './routes/index';
import cors from 'cors';
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/',indexRoutes);

export default app;

