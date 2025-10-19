const crypto = require('crypto');

function EncryptText(plainText, key) {
    if (key.length !== 16) throw new Error("Invalid key length");
    const cipher = crypto.createCipheriv("aes-128-ecb", Buffer.from(key), null);
    cipher.setAutoPadding(true); 
    let encrypted = cipher.update(plainText, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
}

function DecryptText(encryptedText, key) {
    if (key.length !== 16) throw new Error("Invalid key length");
    const decipher = crypto.createDecipheriv("aes-128-ecb", Buffer.from(key), null);
    decipher.setAutoPadding(true); // đảm bảo padding PKCS#7
    let decrypted = decipher.update(encryptedText, "base64", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}

module.exports = { EncryptText, DecryptText };
