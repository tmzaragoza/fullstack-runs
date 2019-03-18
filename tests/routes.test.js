require('dotenv').config();
require('../lib/utils/connect')();

const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const { seedData } = require('./seedData');

describe('routes', () => {
  beforeEach(() => {
    return seedData(1000);
  });

  afterEach(() => {
    return mongoose.connection.dropDatabase();
  });

  it('can get 1 lorum ipsum', () => {
    return request(app)
      .get('/ipsums')
      .then(res => res.body)
      .then(ipsums => {
        expect(ipsums).toHaveLength(1000);
      });
  });
});
