var express = require('express');
var router = express.Router();
var moment = require('moment');

const fetch = require('node-fetch');
const Trip = require('../models/trips');

router.get("/", (req, res) => {
    Trip.find().then(data => {
        res.json({data})
    })
  });

  router.get('/:departure/:arrival/:date', (req,res) => {
    const {departure,arrival,date} = req.params
    Trip.find({departure,arrival,date: { $gte: moment(date).startOf('day'), $lte: moment(date).endOf('day') } 
    }).then(data => {
        res.json({data})
    });
  });


  module.exports = router;