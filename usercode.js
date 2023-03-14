module.exports = (data) => {
    
    npm install node-fetch

// Require node-fetch in your code
const fetch = require('node-fetch');
    
    return new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzQ0NzE2MjAsImV4cCI6MTY4MzAyNTIyMCwianRpIjoiQUtVQ0RZMktKNXFrIiwiYXBwbGljYXRpb25faWQiOiJjZmZjZmNhMS01NDAxLTRmNWMtOWQxZC0zNDM1NzY0NzhkOWEifQ.FZUPxMUjoTe2n91jXSUlmyyATJuu48CF5BWKbL5TNobjBc7TMI6_Z1tmwX32yQy19IGM1Zvu0T8P9E9fbRy4BAvugCPw0y5KbTcha0Z3CtNmYAEBR554TTpXnjRzfjFogsvqCfwvwHV2qUIeF21fz7KTRnG_x3RYlwzpozpV2CZCoqge7VE_cJbr0x5xuwNnxwgRCSKGdmCnWtBU4sYKSiGyOq5zsCYjoQiYiB6Ktf9QmBUG_M3wDEP5XKhf-fTdGy-c3lHrpMLIK9MerkdLjxchy9Q5R9ilBx_Uw34hXtEGln-eRWKNi4ek5HnLlUiGXTBzjVRUUUMWAud1XmWHyg'
            },
            body: JSON.stringify({
                "to": [{
                    "type": "phone",
                    "number": "380665566337"
                }],
                "from": {
                    "type": "phone",
                    "number": "380665566337"
                },
                "ncco": [{
                        "action": "talk",
                        "text": "Hello, for subscribing, please, enter digit - 111 on your phone's keyboard",
                        "language": "en-US",
                        "bargeIn": true
                    },
                    {
                        "eventUrl": [
                            "https://www.corezoid.com/api/2/json/public/1166792/63fb38a98bc6d57e162cfa7fd3e1bae3e5853da6"
                        ],
                        "action": "input",
                        "type": ["dtmf"],
                        "dtmf": {
                            "maxDigits": 3,
                            "submitOnHash": false,
                            "timeOut": 10
                        }
                    }
                ]
            })
        };

        fetch('https://api.nexmo.com/v1/calls', requestOptions)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}
