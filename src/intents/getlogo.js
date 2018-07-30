let url = 'https://www.limesoda.com/typo3conf/ext/ls_template/Resources/Public/Images/LimeSoda-Logo-Facebook.jpg';

export const GetLogoHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GetLogoIntent';
    },
    handle(handlerInput) {
        const speechText = 'Here is your logo!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withStandardCard('Logo', 'Here is the Limesoda Logo:', url, url)
            .getResponse();
    },
};


/* alternatively return a JSON object like the "testResponse" below directly from the handle function above inside the Handler
    see https://developer.amazon.com/de/docs/custom-skills/include-a-card-in-your-skills-response.html
    and https://ask-sdk-for-nodejs.readthedocs.io/en/latest/Response-Building.html?highlight=withStandardCard for help about building responses
*/
let testResponse = {
    "outputSpeech": {
        "type": "PlainText",
        "text": "Subtext test test test!"
    },
    "card": {
        "type": "Standard",
        "title": "Title of the Card",
        "text": "Here is your Logo",
        "image": {
            "smallImageUrl": url,
            "largeImageUrl": url
        }
    }
};

