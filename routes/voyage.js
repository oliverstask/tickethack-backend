var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Trip = require('../models/trips');

router.get("/", (req, res) => {
    Trip.findMany({
   departure: req.params.departure,
   arrival: req.params.arrival, 
   date: req.params.date,
    }).then(data => {
        res.json({data})
    })
  });