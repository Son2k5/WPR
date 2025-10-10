const { error } = require('console');
const crypto = require('crypto');

const key = '1234567890abcdef';
function EncryptText(plainText, key) {
    if(key.length != 16) throw new Error("Invalid key");
    const cipher = crypto.createCipheriv("aes-128-ecb", key, null);
    let encrypt = cipher.update(plainText,"utf8","base64");
    encrypt += cipher.final("base64");
    return encrypt;
}
function DecryptText(EncryptText, key){
    if(key.length != 16) throw new Error("Invalid key");
    const decipher = crypto.createDecipheriv("aes-128-ecb",key, null);
    let decrypt = decipher.update(EncryptText,"base64","utf8");
    decrypt += decipher.final("utf8");
    return decrypt
}
module.exports = {EncryptText, DecryptText}

