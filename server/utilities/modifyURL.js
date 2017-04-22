import validate from 'validate.js';
import Url from '../models';


// User Story 1:
// I can pass a URL as a parameter and I will receive a shortened
//  URL in the JSON response.


// User Story 2:
// If I pass an invalid URL that doesn't follow the invalid
//  http://www.example.com
//  format, the JSON response will contain an error instead.


// User Story 3:
// When I visit the shortened URL, it will redirect me to
//  my original link.


function isValidUrlQueryString(urlQueryString) {
  const checkedUrl = validate({
    website: urlQueryString,
  }, {
    website: {
      url: true,
    },
  });
  // Check if the checkedUrl is in valid URL format (http and https)
  if (checkedUrl === undefined) {
    return true;
  }
  return false;
}


function generateRandomNumber() {
  // will use this when creating a shortened URL
  const randomNumberBetween0and999 = Math.floor(Math.random() * 1000)
  return randomNumberBetween0and999;
}


function createFinalUrls() {
    const url = new Url();
    console.log(url);
    return true;
}


// function saveFinalUrlsToDatabase(jsonToSave) {

//     // If it is valid save the original URL to the db
//     return true;
// }


// function notValidUrl(){
//     // If it is not valid URL, send back JSON with error.
// }


// function makeShortUrl() {
//     //  Calculate and create a short URL and save it to that same document
// }


// function createJsonResponse() {
//     //  Return JSON with the short and original URLs
// }


//    Must be able to navigate to the short URL and be redirected to original

export {
  isValidUrlQueryString,
  generateRandomNumber,
  createFinalUrls,
  // saveFinalUrlsToDatabase,
  // notValidUrl,
  // makeShortUrl,
  // createJsonResponse
};
