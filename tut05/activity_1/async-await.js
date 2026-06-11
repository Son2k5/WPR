"use strict";

(function () {

    window.addEventListener("load", init);

    async function init() {
        try{
            let value = await m3();
            value = m1(value);
            value = await m2(value);
            console.log(value);
        }catch(e){
            console.log(e);
        }
    }
    function m1(value){
        console.log("m1")
        return value + " lemon squeezy";
    }
    function m2(value){
        return new Promise((resolve, reject) =>{
            console.log("m2")
            setTimeout(function(){resolve(value + "hello")},5000)
        })
    }
    function m3(){
        return new Promise((resolve, reject) =>{
            setTimeout(function() {
                console.log("m3");
                resolve(" easy peasy");
            }, 2000)
        });
    };
})();