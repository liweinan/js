const nodeRSA  = require('node-rsa');
const key = new nodeRSA({b: 512});

const text = "Hello, world!";
const encText = key.encrypt(text, 'base64');
console.log(encText);
const decText = key.decrypt(encText);
console.log(decText);
