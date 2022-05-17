(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var module_1 = require("./module");
console.log(module_1["default"]);

},{"./module":2}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var a = 1;
var b = 'hello';
var c = true;
var d = 1;
d = 'hey';
var d1;
d1 = 1;
var e = 1;
e = '123';
var arr = [1, 2, 3];
var arr1 = [1, 2, 'hey'];
// arr1.push(true)
var arr2 = [1, 2.5, 'hey'];
var arr3 = [];
arr2.forEach(function (item, index, array) {
    if (typeof item === 'number') {
        array[index] = Math.floor(item);
        arr3.push(Math.floor(item));
    }
    else {
        array[index] = parseInt(item);
        // arr3.push(item)
        arr3.push(parseInt(item));
    }
});
var tuple = [255, 255, 255];
var f;
// f += 5
var g = 1;
g += 1;
var user = {
    id: 1,
    first: 'wes',
    last: undefined
};
var myuser = {
    id: 1,
    first: 'name',
    tel: '+7123'
};
var ResponseTypes;
(function (ResponseTypes) {
    ResponseTypes["SUCCESS"] = "ok";
    ResponseTypes["ERROR"] = "error";
})(ResponseTypes || (ResponseTypes = {}));
var res = { status: 'ok', data: 1 };
var res1 = { status: 'error' };
if (res.status === ResponseTypes.SUCCESS) {
    console.log('data', res.data);
}
function add(a, b, c, d) {
    if (c === void 0) { c = 1; }
    // return a + b + c + (d || 1) // 5 7 7
    return a + b + c + (d === undefined ? 1 : d); // 5 7 6
}
var i = 1, j = 2;
var sum = add(i, j);
var sum1 = add(1, 2, 3);
var sum2 = add(1, 2, 3, 0);
console.log(sum, sum1, sum2);
function print(text) {
    console.log(text);
}
function rest() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
}
function rest1() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
}
function rest2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
}
rest('hey', 2, 1);
// rest2('hey', 2, 1)
rest2(1, 2, 'hey');
var Animal = /** @class */ (function () {
    function Animal(name) {
        // private name: string = 'Friend'
        // protected name: string = 'Friend'
        this.name = 'Friend'; // public
        if (name) {
            this.name = name;
        }
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("My name is " + this.name);
    };
    return Dog;
}(Animal));
var dog = new Dog('Rex');
dog.bark(); // My name is Rex
var dog1 = new Dog();
dog1.bark(); // My name is Friend
dog1.name = 'New name';
dog1.bark(); // My name is New name
var AnimalWithAge = /** @class */ (function () {
    function AnimalWithAge(name, age) {
        if (age === void 0) { age = 5; }
        this.name = name;
        this.age = age;
    }
    return AnimalWithAge;
}());
var DogWithAge = /** @class */ (function (_super) {
    __extends(DogWithAge, _super);
    function DogWithAge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogWithAge.prototype.bark = function (text) {
        console.log(text + " - My name is " + this.name + " and age is " + this.age);
    };
    return DogWithAge;
}(AnimalWithAge));
var dog2 = new DogWithAge();
dog2.bark(); // undefined - My name is undefined and age is 5
function makeState() {
    var state;
    var getState = function () { return state; };
    var setState = function (newState) {
        state = newState;
    };
    return {
        getState: getState,
        setState: setState
    };
}
var myState = makeState();
myState.setState(1);
console.log(myState.getState());
exports["default"] = [arr2, arr3, user];

},{}]},{},[1]);
