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
