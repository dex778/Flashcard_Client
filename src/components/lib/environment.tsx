let APIURL = "";
switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http://localhost:8000";
    break;
case "flashcards.herokuapp.com": 
APIURL = "https://flashcards-api.herokuapp.com"
}
export default APIURL;