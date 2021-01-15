import { Meteor } from 'meteor/meteor';
import { Products, Parts } from '/imports/api/collections';

// initialization values
const COMPANY_COUNT = 5;
const PRODUCT_COUNT = 1000;
const PART_COUNT = 1000;

Meteor.startup(() => {

  const companyNames = Array(COMPANY_COUNT).fill().map(() => {
    return faker.company.companyName()
  });

  if (Products.find().count() === 0) {
    console.log('generating products');

    for (let i = 0; i < PRODUCT_COUNT; i++) {
      Products.insert({
        name: faker.commerce.product(),
        color: faker.internet.color(),
        price: faker.commerce.price(),
        image: faker.image.fashion(),
        country: faker.address.country(),
        company: companyNames[Math.floor(Math.random() * COMPANY_COUNT)],
        date: faker.date.past()
      });
    }
  }

  if (Parts.find().count() === 0) {
    console.log('generating parts');

    const partTypes = ['Shelf', 'Base', 'Back', 'Box', 'Holder'];

    for (let i = 0; i < PART_COUNT; i++){
      Parts.insert({
        name: faker.commerce.productName(),
        color: faker.internet.color(),
        price: faker.commerce.price(),
        type: partTypes[Math.floor(Math.random() * partTypes.length)],
        company: companyNames[Math.floor(Math.random() * COMPANY_COUNT)],
        date: faker.date.past()
      });
    }
  }
});
