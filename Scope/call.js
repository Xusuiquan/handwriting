/**
 * 实现 call
 * 1.上下文对象 context 默认是 window 全局对象
 * 2.this 是调用函数方法，可以判断
 * 3.将函数作为上下文对象的一个属性
 * 4.使用上下文对象来调用这个方法，并保存返回结果
 * 5.删除刚才新增的属性
 * 6.返回结果
 */
 Function.prototype.myCall = function(context = window, ...args) {

    // if (typeof this !== 'function') console.log('type error')

    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}

let obj = { value: 1 }

function test(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

test.myCall(obj, 'xsq', '18') // xsq 18 1