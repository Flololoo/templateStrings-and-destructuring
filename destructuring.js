'use strict'

//array destructuring

var a;
var b;
var c;

function foo() {
    return [1,2,3,4,5,6,7,8,9]
}

//old
var tmp = foo();
a = tmp[0],
b = tmp[1],
c = tmp[2];

//new
[a, b, c] = foo();

//you can also write it like this
// var[a, b, c] = foo();

//switch variable values
[a,b] = [b,a];

//you can use default values
[   a = 0,
    b = 0,
    c = 0
] = foo();

//how can i use all values?

var args;

[   a = 0,
    b = 0,
    c = 0,
    ...args
] = foo();

//you can use any valid left hand side assignment
const o = {};
[
    o.a = 0,
    o.b = 0,
    o.c = 0,
    ...o.args
] = foo();
// console.log(o)

//better be save than sorry
//would be a type error
function bar() {
    return null;
}

[   a = 0,
    b = 0,
    c = 0
] = bar() || [];


//now it's getting tricky
function baz() {
    return [1, 2 ,3, [4, 5, 6]]
}

[   a = 0,
    b = 0,
    c = 0,
    ...args
] = baz() || [];
console.log(args);



[   a = 0,
    b = 0,
    c = 0,
    [...args]
] = baz() || [];
console.log(args);



//let's keep it tricky
var x = [a, b] = foo();
console.log(a,b);
console.log(x);











//object destructuring
function oFoo() {
    return { oa:1, ob:2, oc:3 }
}


var{
    oa: oa,
    ob: ob,
    oc: oc
} = oFoo();

var{
    oa,
    ob: X,
    oc
} = oFoo();

//default values
var{
    oa = 0,
    ob: X = 0,
    oc
} = oFoo();


//just to be sure again
var{
    oa = 0,
    ob: X = 0,
    oc
} = oFoo() || {};

//nested object destructuring
function oBar() {
    return { oa:1, ob:2, oc:3,
        od: {
            oe: 4
        }
    }
}

var{
    oa = 0,
    ob: X = 0,
    oc,
    od: {
        oe
    }
} = oBar() || {};

//what if od doesn't exist?
var{
    oa = 0,
    ob: X = 0,
    oc,
    od: {
        oe
    } = {}
} = oBar() || {};






//now it's getting cool
//we can mimic named arguments

function oBaz( {a,b,c} = {} ) {
    oBaz( {
        a: 1,
        b: 2,
        c: 3
    } )
}





//enhanced object literals

let firstname = 'Flo',
    pin = 1234,
    role = 'dev';

const user = {
    firstname: firstname,
    pin: pin,
    role: role,
    authentification: function (pinEntered) {
        return this.pin === pinEntered
    }
}
//{firstname: "Flo", pin: 1234, role: "dev", authentification: ƒ}

const user = {
    firstname,
    pin,
    role,
    authentification: function (pinEntered) {
        return this.pin === pinEntered
    }
}
//{firstname: "Flo", pin: 1234, role: "dev", authentification: ƒ}

const user = {
    firstname,
    pin,
    role,
    authentification (pinEntered) {
        return this.pin === pinEntered
    }
}
//{firstname: "Flo", pin: 1234, role: "dev", authentification: ƒ}

const user = {
    firstname,
    pin,
    [role]: true,
    authentification (pinEntered) {
        return this.pin === pinEntered
    }
}
//{firstname: "Flo", pin: 1234, dev: true, authentification: ƒ}