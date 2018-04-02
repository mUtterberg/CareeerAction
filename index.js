/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/

// Include JSON data
/* Another failed attempt! "jQuery" and "$" both traced back undefined on deploy in Cloud Functions.
$.getJSON('github.com/mUtterberg/CareeerAction/blob/master/careers.json').done(function (data) {
  careers = data;
  careerToday = careers[Math.floor(Math.random() * careers.length)];
})
*/

/*// Pick random career title
function pickRandomCareer(){
        window.selectedCareer = window.careers[Math.floor(Math.random() * window.careers.length)];
        console.log(window.selectedCareer);
        console.log(window.careers);
    }

// Define a career of the day
var careerToday = pickRandomCareer()*/

var careerToday = "GOING TO BE AWESOME.";

exports.helloHttp = function helloHttp (req, res) {
  response = "Today's career spotlight is " + careerToday //Default response from the webhook to show it's working


  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};
