/**
 * 实现 promise.all
 * 入参是有多个 promise 实例组成的数组
 * 如果全部成功，状态变为 resolved，并且返回值组成一个数组传给回调
 * 如果有一个失败，状态变为 rejected，并且返回 error 给回调
 */

function PromiseAll(promises) {
    return new Promise((resolve, reject) => {
        // 参数判断
        if (!Array.isArray(promises)) {
            throw new TypeError('promises must be an array')
        }
        let result = [] // 存放结果
        let count = 0 // 记录有几个 resolved
        promises.forEach((promise, index) => {
           promise.then(res => {
               result[index] = res
               count++
               count === promises.length && resolve(result) // 判断是否已完成
           }, err => {
               reject(err)
           }) 
        })
    })
}

let p1 = Promise.reject(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)

PromiseAll([p1, p2, p3]).then(res => {
    console.log('res: ', res);
}, err => {
    console.log('err: ', err);
})