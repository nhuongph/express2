import config from './config';
import Express from 'express';
import Path from 'path';
import Api from './routes/api';
import FileUpload from 'express-fileupload';

const app = Express();

app.use('/api', Api);
app.use(FileUpload());

app.use(Express.static(Path.resolve(__dirname, '..', 'public'), {maxAge: 31557600000}));
module.exports = app;
const PORT = config.port || 8888;
app.listen(config.port, () => {
    console.log(`App listening on port ${PORT}!`);
});
