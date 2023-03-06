module.exports = (data) => {
    return new Promise(function(resolve, reject, data){
    
     if (data == "x") {
        resolve("TEST" + data.in);
    } else {
        reject(new Error(data + "Error"));
    }
    
    
    });
};
