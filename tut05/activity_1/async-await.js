"use strict";
(function () {

    window.addEventListener("load", init);

    async function init() {
        try{
            let value = await m3();
            value = m1(value);
            value = m2(value);
            console.log(value);

        }catch( e){
            console.log(e);
        }
    }

    function m1(value) {
        return value + " lemon squeezy!";
    }

    function m2(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value + " I'm gettin the hang of it now");
            }, 2000);
        });
    }

    function m3() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve("easy peasy");
            }, 1000);
        });
    }

})();