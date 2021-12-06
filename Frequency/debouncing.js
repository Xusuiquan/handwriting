/** 
 * 当一次事件发生后，事件处理器要等一定阙值的时间，
 * 如果这段时间过去后再也没有事件发生，就处理最后一次发生的事件
 * 假设还差0.1秒就达到指定时间，这时又来了一个事件，那么之前的等待作废，需要重新在等待指定时间
*/

// 防抖动函数
function debounce(fn, wait = 50, immediate) {
    let timer
    return function() {
        if(immediate) {
            fn.apply(this, arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, wait)       
    }
}

// 结合实例：滚动防抖
function realFunc(a) {
    console.log('Success')
}

// 采用了防抖动函数
window.addEventListener('scroll', debounce(realFunc, 500))