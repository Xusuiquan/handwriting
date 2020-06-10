/**
 * bind
 */
Function.prototype.bind2 = function(context = window, ...args1) {
    const fn = this
    return function newFn(...args2) {
        // 判断是否用于构造函数
        if (this instanceof newFn) {
            return new fn(...args1, ...args2)
        } 
        return fn.apply(context, [...args1, ...args2])
    }
}


