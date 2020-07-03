/**
 * 插入排序
 */
function insertSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        if (array[i] < array[j]) {
            let temp = array[i]
            while (j > 0 && temp < array[j]) {
                array[j + 1] = array[j]
                j--   // 从后往前插入
            }
            array[j + 1] = temp // 赋值
        }
    }
    return array
}

let arr = [1, 4, 6, 2, 3]
console.log(insertSort(arr))