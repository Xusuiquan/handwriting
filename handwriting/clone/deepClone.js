/**
 * 简易版-深拷贝
 */
const deepClone = (target) => {
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = deepClone(target[prop])
            }
        }
        return cloneTarget
    } else {
        return target
    }
}

