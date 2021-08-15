let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let api = "https://rickandmortyapi.com/api/character/";


const fetchData = (url_api) => {

  return new Promise((resolve, reject) => {

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
  
    xhttp.onreadystatechange =function(event) {
      if(xhttp.readyState === 4){
        if(xhttp.status === 200){
          resolve(JSON.parse(xhttp.responseText));
        } else {
          const error = new Error('Error' + url_api)
          reject(error);
        }
      }
    }
    xhttp.send();
  })
  
  
}

module.exports = fetchData;
