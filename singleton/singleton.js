"use strict";
/* created by lin
 * 2016-8-23
 * 单例实现类
 */

class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }

    getName(name) {
        console.log(this.name);
    }

    static getInstance(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}

// var Singleton = function(name) {
//     //name 属性
//     this.name = name;
//     //instance 实例
//     this.instance = null;
// }
//
// Singleton.prototype.getName = function(name) {
//     console.log(this.name);
// }
//
// Singleton.getInstance = function(name) {
//     if(!this.instance) {
//         this.instance = new Singleton(name);
//     }
//     return this.instance;
// }

let a = Singleton.getInstance('sven1');
let b = Singleton.getInstance('sven2');
a.getName();
b.getName();
console.log(a===b);
