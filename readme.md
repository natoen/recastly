# Recastly [![Build Status](https://travis-ci.org/natoen/recastly.svg?branch=master)](https://travis-ci.org/natoen/recastly)
Youtube's front-end implemented with [React][react].

![screenshot][screenshot]

## Instructions:
- Before starting our semi app do first an `npm install --only=production` from our root folder. Copy `src/config/youtube.example.js` change the API key with yours and save it as `src/config/youtube.js`. 
- To start our app open `index.html` with a [web browser][webbrowser]
- To see our front-end files just go to `src/`
- To run the tests do an `npm install` and open `SpecRunner.html` or replace line 10 of `package.json` to `"test": "live-server --open=./SpecRunner.html --port=8081"` and just do an `npm test` afterwards which open the spec runner automatically in the [browser][webbrowser].
- To see our test files just go to `spec/`


[react]: https://facebook.github.io/react/
[webbrowser]: https://www.google.com/chrome/
[screenshot]: https://raw.githubusercontent.com/natoen/recastly/master/screenshot.png