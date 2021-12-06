/**
 * 排列字符串的所有字符排列
 */
function Permutation(str) {
    const result = []
    if (str) {
        queue = str.split('')
        PermutationCore(queue, result)
    } 
    result.sort()
    return [... new Set(result)]  
}

function PermutationCore(queue, result, temp = '', current = '') {

}