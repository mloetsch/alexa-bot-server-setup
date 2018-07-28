# Alexa Bot setup with node.js
simple development server setup for amazon skills without using aws lambda. sends back "Hello World" to Alexa.
## Installation
clone this repository:

`$ git clone https://github.com/xhaldos/node-alexa-skill-demo.git`

build package:

`$ yarn`

set up a custom alexa skill at the [alexa console](https://developer.amazon.com/alexa), make sure to define at least one Intent.

[optional] download and setup [ngrok.io](https://dashboard.ngrok.com/get-started).

`$ ./ngrok authtoken INSERT_AUTHTOKEN`


## Usage
start your dev server:

`$ yarn start`

start ngrok

`$ ./ngrok http 8080`

copy tunnel address either from terminal output or [ngrok dashbord](https://dashboard.ngrok.com/status)

go to your [amazon console](https://developer.amazon.com), select your select your skill, go to "Build" > "Endpoint" and set "Service Endpoint Type" to HTTPS. In "Default Region" enter your public ngrok address and select using subdomain that has a wildcard as SSL certificate type.

Click "Save Endpoints", then "Build Model" (if this option doesnt show up next to save endpoints, go to "Invocation" for example, and click Build Model there).

now go to the "Test" tab at the amazon console and send a test message to the bot

`open <intent name>`

## Scripts
fire up dev server:

`$ yarn start`


more scripts:

`$ yarn clean`

`$ yarn build`

`$ yarn produce`

`$ yarn serve`

## License

[GNU](./LICENSE)
