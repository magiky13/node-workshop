//e1
console.log('hello world');
setTimeout(function(){
    console.log('hello world again');
}, 10000);
//e2

var sayHiEveryTenSeconds = function(){
    setTimeout(function(){
        console.log('hello world again');
    }, 10000);
    sayHiEveryTenSeconds();
};

console.log(sayHiEveryTenSeconds());

//e3