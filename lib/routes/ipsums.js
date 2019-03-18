const { Router } = require('express');
const Ipsum = require('../models/Ipsum');

module.exports = Router()
  .get('/', (req, res, next) => {
    Ipsum
      .find()
      .lean()
      .then(ipsums => res.send(ipsums))
      .catch(next);
  });
  