nodeRSA = require("node-rsa");


// 有私钥可以生成公钥
const key = new nodeRSA('-----BEGIN RSA PRIVATE KEY-----\n'+
    'MIIBOQIBAAJAVY6quuzCwyOWzymJ7C4zXjeV/232wt2ZgJZ1kHzjI73wnhQ3WQcL\n'+
    'DFCSoi2lPUW8/zspk0qWvPdtp6Jg5Lu7hwIDAQABAkBEws9mQahZ6r1mq2zEm3D/\n'+
    'VM9BpV//xtd6p/G+eRCYBT2qshGx42ucdgZCYJptFoW+HEx/jtzWe74yK6jGIkWJ\n'+
    'AiEAoNAMsPqwWwTyjDZCo9iKvfIQvd3MWnmtFmjiHoPtjx0CIQCIMypAEEkZuQUi\n'+
    'pMoreJrOlLJWdc0bfhzNAJjxsTv/8wIgQG0ZqI3GubBxu9rBOAM5EoA4VNjXVigJ\n'+
    'QEEk1jTkp8ECIQCHhsoq90mWM/p9L5cQzLDWkTYoPI49Ji+Iemi2T5MRqwIgQl07\n'+
    'Es+KCn25OKXR/FJ5fu6A6A+MptABL3r8SEjlpLc=\n'+
    '-----END RSA PRIVATE KEY-----');

// encrypt方法是公钥加密
console.log(key.encrypt("Hello, world!").toJSON());
// 公钥和私钥加密出来的数据是不一样的
console.log(key.encryptPrivate("Hello, world!").toJSON());


const pubKey = new nodeRSA('-----BEGIN PUBLIC KEY-----\n' +
    'MIIBYjANBgkqhkiG9w0BAQEFAAOCAU8AMIIBSgKCAUEAsE1edyfToZRv6cFOkB0t\n' +
    'AJ5qJor4YF5CccJAL0fS/o1Yk10VSXH4Xx4peSJgYQKkO0HqO1hAz6k9dFQB4U1C\n' +
    'nWtRjtNEcIfycqrZrhu6you5syb6ScV3Zu/9bm7/DyaLlx/gJhUPR1OxOzaqsEvl\n' +
    'u7hbDhNLIYo1zKFb/aUBbD6+UcaGxH2BfFNdzVAtVSVpc/s2Y3sboMN7rByUj793\n' +
    '7iQlaMINvVjyasynYuzHNw6ZRP9JP9fwxrCyaxnTPWxVl0qvVaQO2+TtFMtDXH2O\n' +
    'VZtWWeLHAL8cildw0G+u2qVqTqIGEwNyJlsAHykaPFAMW0xLueumrSlB+JUJPrRv\n' +
    'vw4nBCd4GOrNSlPCE/xlk1Cb8JaICTLvDUcYc3ZqL3jqAueBhkpw2uCz8xVJeOA1\n' +
    'KY4kQIIx8JEBsAYzgyP2iy0CAwEAAQ==\n' +
    '-----END PUBLIC KEY-----');

console.log(pubKey.encrypt("Hello, world"));
// 公钥没法做私钥加密
// 但是私钥可以既做公钥加密也可以做私钥加密
console.log(pubKey.encryptPrivate("Hello, world"));


