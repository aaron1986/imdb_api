const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const PORT = 8080;

const app = express();
app.use(cors());

app.get("/", (request, response) => {
    response.json("The server is now working!");
  });


  app.get("/data", async (request, response) => {
    const { search } = request.query;
    try {
      const sploosh_api = {
        method: 'GET',
        url: 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB',
        params: { query: 'London' },
        headers: {
          'X-RapidAPI-Key': 'b02a747d18mshe2d139c32d81ce8p1674edjsnd1557879389b',
          'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        }
      };

      //retrieve data
      const answer = await axios(sploosh_api);

      //get data
      const wrangledData = {

        //fetch image url for first section of data
         image: answer.data.data[0].title, 
      };

      response.json(wrangledData);

      //errors
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' });
    }
    
  });



//don't forget to include this code!!!
  app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));