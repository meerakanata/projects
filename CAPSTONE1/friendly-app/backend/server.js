const express = require('express'), 
axios = require('axios'),
app = express(),
Sequelize = require('sequelize'),
db = require('./models'),
cors = require('cors')

const my_key = require('./Key-backend')

app.use(cors())

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
  next();
});

const sequelize = new Sequelize('friendly-app', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
  });

app.get('/search/:string/:homeLat/:homeLng', (req, res) => {
  let lat = req.params.homeLat; 
  let lng = req.params.homeLng; 
  let keyword = req.params.string;

  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lng+'&radius=2000&keyword='+keyword+'&key='+my_key)
  .then(function (response) {
    const googleLocations = response.data.results; 
    const dbQueries = googleLocations.map(locationObj => findBusiness(locationObj.name))
    Promise.all(dbQueries).then((dbResults)=>{
      for(let i=0; i<googleLocations.length; i++) {
        googleLocations[i].friendlyResult = {
          friendlyDetails: dbResults[i]
        }
      }
      return res.json(googleLocations);
    })

  })
  .catch(function (error) {
    console.log(error);
  });

});




app.listen(8080, () =>{
    console.log('WOOHOO server is running on 8080');
})



/** REPOSITORY */

function findBusiness(inputBizName) { 
  return db.Businesses.findOne({ 
    where: {
      name: inputBizName
    }
  })  
}

