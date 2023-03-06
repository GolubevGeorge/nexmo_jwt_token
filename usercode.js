module.exports = (data) => {
    
    return new Promise((resolve, reject) => {
    data.hello = "Hello World!" + data.in;
    resolve(data);
     }
};
