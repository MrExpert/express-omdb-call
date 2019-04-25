const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();

const cache = new Map();




app.get('/:t', (req, res) => {
  let imdbTitle = (req.params.t);
  

  axios
    .get("http://www.omdbapi.com/?t=" + imdbTitle + "&apikey=8730e0e")
    .then(response => {
      res.json(response.data);
      cache.set(imdbTitle, response.data);
    })
    .catch(error => {
      console.log('this is an error:' + error);
    });

});

app.get('/:i', (req, res) => {
    let imdbID = (req.params.i);
  
    axios
      .get("http://www.omdbapi.com/?i=" + imdbID + "&apikey=8730e0e")
      .then(response => {
        res.json(response.data);
        cache.set(imdbID, response.data);
      })
      .catch(error => {
        console.log('this is an error:' + error);
      });
  });





app.listen(3000);