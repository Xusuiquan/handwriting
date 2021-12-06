/**
 * 实现 bind
 * bind 方法返回一个函数，需要有新的参数结合原有的参数
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

