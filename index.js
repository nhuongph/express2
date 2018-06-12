import config from './config';
import Express from 'express';
import Path from 'path';
import FileUpload from 'express-fileupload';
import BodyParser from 'body-parser';
import Api from './routes/api';

const app = Express();

app.use(FileUpload());

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/api', Api);

app.use(Express.static(Path.resolve(__dirname, '..', 'public'), {maxAge: 31557600000}));

module.exports = app;

const PORT = config.port || 8888;

app.listen(config.port, () => {
    console.log(`App listening on port ${PORT}!`);
});
