/**
 * reduce
 */

const flat = (array) => {
    return array.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
}

const arr = [1, 2, 3, [4, 5, 6]]
console.log(flat(arr))