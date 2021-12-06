/**
 * bind
 */
Function.prototype.bind2 = function (context = window, ...args1) {
    const fn = this
    return function newFn(...args2) {
        // 判断是否用于构造函数
        if (this instanceof newFn) {
            return new fn(...args1, ...args2)
        }
        return fn.apply(context, [...args1, ...args2])
    }
}

/**
 * 实现 bind
 */
Function.prototype.myBind = function (context, ...args) {
    return (...newArgs) => this.apply(context, [...args, ...newArgs])
}

const test = {
    name: '默认名字',
    showName: function (value) {
        console.log(`${this.name} is ${value}`)
    }
}

test.showName('handsome')
test.showName.bind({ name: 'xsq' })('handsome')
test.showName.myBind({ name: 'xsq' })('handsome')

