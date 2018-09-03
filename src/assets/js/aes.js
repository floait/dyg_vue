import CryptoJS from 'crypto-js'
function getAesString(data,key,iv){//加密
  key  = CryptoJS.enc.Utf8.parse(key);
  //alert(key）;
  iv   = CryptoJS.enc.Utf8.parse(iv);
  const encrypted =CryptoJS.AES.encrypt(data,key,
    {
      iv:iv,
      mode:CryptoJS.mode.CBC,
      padding:CryptoJS.pad.Pkcs7
    });
  return encrypted.toString();    //返回的是base64格式的密文
}
function getDAesString(encrypted,key,iv){//解密
  key  = CryptoJS.enc.Utf8.parse(key);
  iv   = CryptoJS.enc.Utf8.parse(iv);
  const decrypted =CryptoJS.AES.decrypt(encrypted,key,
    {
      iv:iv,
      mode:CryptoJS.mode.CBC,
      padding:CryptoJS.pad.Pkcs7
    });
  return decrypted.toString(CryptoJS.enc.Utf8);      //
}
export function getAES(data){ //加密
  "use strict";
  const key  = '***********';  //密钥
  const iv   = '************';
  const encrypted =getAesString(data,key,iv); //密文
  const encrypted1 =CryptoJS.enc.Utf8.parse(encrypted);
  return encrypted;
}

export function getDAes(data){//解密
  "use strict";
  const key  = '*************';  //密钥
  const iv   = '************';
  // console.log('getDAes(',data,")");
  if(data == null || data == "" || data == undefined) return;
  const decryptedStr =getDAesString(data,key,iv);
  return decryptedStr;
}
