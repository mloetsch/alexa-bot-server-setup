import axios from 'axios';
import myApi from '../../api_keys/googleimageapi';

export const GetGoogleImageHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GetGoogleImageIntent';
    },
    async handle(handlerInput) {
        let searchQuery = handlerInput.requestEnvelope.request.intent.slots.searchQuery.value;
        updateCustomSearch(searchQuery);
        let image = await getImage();
        buildResponse(testResponse, image);
        return testResponse;
    },
};

let testResponse = {
    "outputSpeech": {
        "type": "PlainText",
        "text": "Google Image test!"
    },
    "card": {
        "type": "Standard",
        "title": "Google Image",
        "text": "Here is your image",
        "image": {
            "smallImageUrl": '',
            "largeImageUrl": ''
        }
    }
};

let customSearch = {
    // replace with your own google custom search api key and search engine ID
    apiKey : myApi.apiKey,
    seId : myApi.seId,
    searchQuery: 'limesoda',
    url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyADdqCpiDM1UEgdq0fcNSxF8fExx5Qhi_E&cx=003811576608300304863:ojbt8aafuuq&defaultToImageSearch=true&q=limesoda',

};

let updateCustomSearch = (searchQuery) => {
        customSearch.url = `https://www.googleapis.com/customsearch/v1?key=${customSearch.apiKey}&cx=${customSearch.seId}&defaultToImageSearch=true&q=${searchQuery}`;
};

let buildResponse = (response, image) => {
    response.card.image.smallImageUrl = image;
    response.card.image.largeImageUrl = image;
};

let getImage = async () => {
    try {
        const response = await axios.get(customSearch.url);
        if (response && response.data){
            let imageURL = response.data.items[0].pagemap.cse_image[0].src;
            return imageURL;
        }
    } catch(error) {
        console.error(error);
    }
};
