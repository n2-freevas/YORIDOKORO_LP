var ua = window.navigator.userAgent.toLowerCase()


function device_judgement(){
    if((ua.indexOf("android") !== -1) || (ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1)) {
        console.log('This device is touch function')
        gloval_deviceis = 'touch';
    }
    else {
        console.log('This device is using mouse')
        gloval_deviceis = 'mouse';
    }
    //　各種デバイス動的対応が必要な関数の呼び出し
};

device_judgement();