/**
 * 寄生式继承
 */
function createEnhanceObj(o) {
    // 代替原型式继承的createObj
    let clone = Object.create(o)
    clone.getName = function() {
        console.log('xsq')
    }
    return clone
}

/**
 * 缺点：
 * 无法复用父类函数，每次创建对象都会创建一遍方法
 */