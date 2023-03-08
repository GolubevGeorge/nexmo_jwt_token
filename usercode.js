const Vonage = require('@vonage/server-sdk');
const VONAGE_API_KEY = '7df3009f';
const VONAGE_API_SECRET = 'c3yLSjEQTncIAHCE';
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = './private.key';

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: "cffcfca1-5401-4f5c-9d1d-343576478d9a",
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
});

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    vonage.calls.create({
      to: [{
        type: 'phone',
        number: "380665566337"
      }],
      from: {
        type: 'phone',
        number: "380665566337"
      },
      ncco: [{
        "action": "talk",
        "text": "Do you confirm registration in the weather chat bot press 1 and lattice?"
      },
      {
        action: 'input',
        type: ['dtmf'],
        eventUrl: ['https://www.corezoid.com/api/2/json/public/1180033/edc670350d2725e7c6eb700540d05d31162c665e'],
        dtmf: {
          'timeOut': '10',
          'submitOnHash': true
        }
      }
      ]
    }, (error, response) => {
      if (error) {
        data.answer = error;
        reject(data);
      }
      if (response) {
        data.answer = response;
        resolve(data);
      }
    })
  })
}
