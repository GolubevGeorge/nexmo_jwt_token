'use strict';

module.exports.Get_JWT = function(secret, defaults) {
    if (secret == "x") {
        return secret + " !!!!";
    } else {
        return "Error";
    }
}
