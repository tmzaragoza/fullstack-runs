const Ipsum = require('../lib/models/Ipsum');
const chance = require('chance').Chance();

function seedData(count = 100) {
  const createIpsum = [...Array(count)].map(() => ({
    text: chance.sentence()
  }));

  return Ipsum.create(createIpsum);
}

module.exports = seedData;
