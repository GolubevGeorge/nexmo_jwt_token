module.exports = (data) => {
    return new Promise(function(resolve, reject, data.in){
    
     if (data.in == "x") {
        resolve("TEST" + data.in);
    } else {
        reject(new Error(data.in + "Error"));
    }
    
    
    });
};
