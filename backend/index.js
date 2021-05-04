const express = require("express");
var request = require("request");
const app = express();
const port = 8080;

app.get("/getCurrencyConvert", (req, res) => {

  let apiKey = "512c164b2d84fb84515b";
  let fromCurrency = "SEK";
  let baseUrl = "http://free.currconv.com/api/v7/convert?q=";
  let toCurrency = req.query.toCurr;
  let query = fromCurrency + "_" + toCurrency;
  var url = baseUrl + query + "&compact=ultra&apiKey=" + apiKey;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var parseBody = JSON.parse(body);
      res.send(Object.values(parseBody));
    }
  });
});

app.get("/getCountry", (req, res) => {
  let users = [];
  const baseUrl = "http://restcountries.eu/rest/v2/name/";

  const userLocation = (url1, url2) => {
    let newUrl = url1 + url2;
    return newUrl;
  };

  const apiUrl = userLocation(baseUrl, req.query.cntry);

  request(apiUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var parseBody = JSON.parse(body);
      users.push(parseBody);
      res.send(parseBody);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
