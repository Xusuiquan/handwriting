// 利用对象的键值对map
const unique = (array) => {
    let map = {}
    return array.filter((item, index) => map.hasOwnProperty(item) ? false : (map[item] = true))
}

// 利用indexOf的索引值
const unique = (array) => array.filter((item, index) => array.indexOf(item) === index)

// Set
const unique = array => Array.from(new Set(arr))
const unique = array => [...new Set(arr)]


const arr = [1, 1, 2, 3, 4, 4, 4]
console.log(unique(arr)) 