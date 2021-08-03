let APIURL = "";
switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http://localhost:8000";
    break;
case "flashcardsjavascript.herokuapp.com": 
APIURL = "https://flashcardsjavascript-api.herokuapp.com"
}
export default APIURL;