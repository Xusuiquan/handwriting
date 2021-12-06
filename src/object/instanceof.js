/**
 * 实现 instanceof
 * 例子：a instanceof Object
 * 判断 Object 的 prototype 是否在 a 的原型链上
 */

function myInstanceof(target, origin) {
    const proto = target.__proto__
    if (proto) {
        if (origin.prototype === proto) {
            return true
        } else {
            return myInstanceof(proto, origin)
        }
    } else {
        return false
    }
}