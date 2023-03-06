function jwtGet(secret) {

  return new Promise(function(resolve, reject) {

   if(secret == "x"){
        resolve("TEST" + secret);
   }
      else{
        reject(new Error(secret + "Error"));
      }
  
  });
}
