const request = require("request");

const apiURI = "https://api.openweathermap.org/data/2.5/weather?q=[City]&appid=[Token]";

request({
  url: apiURI,
  json: true
}, (erro, response, JSON) => {
  //JSON 데이터 확인 => console.log(JSON);
  const temp = Math.floor(JSON.main.temp / 10)+"°C";
  console.log(temp);
});
