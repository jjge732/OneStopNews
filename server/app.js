import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import routes from './routes';

const app = express();

app.use(logger(process.env.NODE_ENV));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV == "prod") {
    app.use(express.static(path.join(__dirname, '../../ui/dist')));
}

app.use('/', routes);

export default app;