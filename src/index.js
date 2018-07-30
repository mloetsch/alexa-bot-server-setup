import * as Alexa from 'ask-sdk';
import express from 'express';
import bodyParser from 'body-parser';
import {
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    ErrorHandler
} from './intents/default';
import {HelloWorldHandler} from './intents/helloworld';
import {GetLogoHandler} from './intents/getlogo';

const app = express();
let skill;

// local development endpoint setup:
app.use(bodyParser.json());
app.post('/', function (req, res) {

    if (!skill) {

        skill = Alexa.SkillBuilders.custom()
            .addRequestHandlers(
                HelloWorldHandler,
                GetLogoHandler,
                LaunchRequestHandler,
                HelpIntentHandler,
                CancelAndStopIntentHandler,
                SessionEndedRequestHandler,
                ErrorHandler
            )
            .create();
    }

    skill.invoke(req.body)
        .then(function (responseBody) {
            res.json(responseBody);
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).send('Error during the request');
        });

});

app.listen(8080, function () {
    console.log('Development endpoint listening on port 8080!');
});

