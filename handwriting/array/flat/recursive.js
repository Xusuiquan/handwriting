/**
 * 递归
 */
const flat = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(flat(array[i]));
        } else {
            result.push(array[i]);
        }
    }
    return result;
}

const arr = [1, 2, 3, [4, 5, 6]]
console.log(flat(arr))