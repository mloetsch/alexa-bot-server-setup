import express from 'express';
import bodyParser from 'body-parser';
import AlexaHandler from './AlexaHandler';

const app = express();

app.use(bodyParser.json());

app.post('/', AlexaHandler);

app.listen(8080, function () {
    console.log('Development endpoint listening on port 8080!');
});

