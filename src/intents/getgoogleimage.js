import axios from 'axios';

export const GetGoogleImageHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GetGoogleImageIntent';
    },
    async handle(handlerInput) {
        let searchQuery = handlerInput.requestEnvelope.request.intent.slots.searchQuery.value;
        console.log(searchQuery);
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

//  https://www.googleapis.com/customsearch/v1?key=AIzaSyADdqCpiDM1UEgdq0fcNSxF8fExx5Qhi_E&cx=003811576608300304863:ojbt8aafuuq&defaultToImageSearch=true&q=limesoda
let customSearch = {
    apiKey : 'AIzaSyADdqCpiDM1UEgdq0fcNSxF8fExx5Qhi_E',
    seId : '003811576608300304863:ojbt8aafuuq',
    searchQuery: 'limesoda',
    url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyADdqCpiDM1UEgdq0fcNSxF8fExx5Qhi_E&cx=003811576608300304863:ojbt8aafuuq&defaultToImageSearch=true&q=limesoda',
    // getUrl : function(){
    //     return `https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&cx=${this.seId}&defaultToImageSearch=true&q=${this.searchQuery}`
    // }
};

// let setUrl = (Search) => {
//     Search.url = `https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&cx=${this.seId}&defaultToImageSearch=true&q=${this.searchQuery}`;
// };

let updateCustomSearch = (searchQuery) => {
        // customSearch.searchQuery = searchQuery;
        // customSearch.getUrl();
        customSearch.url = `https://www.googleapis.com/customsearch/v1?key=${customSearch.apiKey}&cx=${customSearch.seId}&defaultToImageSearch=true&q=${searchQuery}`;
};

let buildResponse = (response, image) => {
    response.card.image.smallImageUrl = image;
    response.card.image.largeImageUrl = image;
    console.log(image);
};

let getImage = async () => {
    try {
        await console.log(customSearch.url);
        const response = await axios.get(customSearch.url);
        if (response && response.data){
            let imageURL = response.data.items[0].pagemap.cse_image[0].src;
            console.log(imageURL);
            return imageURL;
        }
    } catch(error) {
        console.error(error);
    }
};

// getImage();

