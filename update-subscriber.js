var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyEJTQQlKRGQCuab'}).base('appJlK7seVbzYDCnO');

exports.handler = (context, {name, digits, address, allergies}, done) =>
  base('subscribers').create([
      {
        fields: { name, digits, address, allergies }
      }
    ]).then(records => done(null, records), done)
