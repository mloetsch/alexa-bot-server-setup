import express from 'express';
const app = express();

app.post('/', (req, res) => {
    res.send({
        version: '1.0',
        response: {
            shouldEndSession: false,
            outputSpeech: {
                type: 'SSML',
                text: 'Hello World!',
                ssml: '<speak>Hello World!</speak>'
            }
        }
    });
    console.log("post is working");
});



// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(8080, () => console.log('Example app listening on port 8080! nodemon test'));

// nodemon auto update node

