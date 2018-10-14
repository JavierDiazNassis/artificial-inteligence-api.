import express from 'express';
import bodyParser from 'body-parser';
import indexRoutes from './routes/index';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',indexRoutes);

export default app;

