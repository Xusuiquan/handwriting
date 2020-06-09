/**
 * 冒泡排序 
 */
function bubbleSort(array) {
    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            // 比较相邻数
            if (array[i] > array[i + 1]) {
                let temp = array[i] // 利用中间值
                array[i] = array[i + 1]
                array[i + 1] = temp
                // 或者es6写法
                // [array[i], array[i + 1]] = [array[i + 1], array[i]]
            }
        }
    }
    return array
}

console.log(bubbleSort([5, 3, 4, 1, 2]))