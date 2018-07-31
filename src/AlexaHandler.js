import * as Alexa from 'ask-sdk';

import {
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    ErrorHandler
} from './intents/default';
import {HelloWorldHandler} from './intents/helloworld';
import {GetLogoHandler} from './intents/getlogo';
import {GetGoogleImageHandler} from './intents/getgoogleimage';

let skill = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        HelloWorldHandler,
        GetLogoHandler,
        GetGoogleImageHandler,
        LaunchRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        ErrorHandler
    )
    .create();

export default async function AlexaHandler (req, res){
    try {
        let responseBody = await skill.invoke(req.body);
        res.json(responseBody);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error during the request');
    }
};
