module.exports = (data) => {
    return new Promise(jwtGet(resolve, reject, data.in));
};

function jwtGet(secret) {
    if (secret == "x") {
        resolve("TEST" + secret);
    } else {
        reject(new Error(secret + "Error"));
    }
}
