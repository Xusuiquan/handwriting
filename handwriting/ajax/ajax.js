/**
 * xhr 的属性
 * responseText：请求返回的数据内容
 * status：http状态码
 * readyStatus：请求/响应过程的当前活动阶段 
 */

function ajax(userOption) {
    // 默认配置
    const defaultOption = {
        url: location.href,
        type: 'GET',
        success: function() {},
        error: function() {},
        data: {},
        timeout: 0
    }

    let option = Object.assign({}, defaultOption, userOption)

    let xhr = new XMLHttpRequest()
    if (option.timeout > 0) {
        xhr.ontimeout = option.timeout
    }

    // 处理相应
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // 请求完成
            if ( xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 ) {
                option.success(xhr.responseText)
            } else {
                option.error(xhr.status, xhr.statusText)
            }
        }
    }

    // 处理超时
    xhr.ontimeout = function() {
        option.error(0, 'timeout')
    }

    // 处理错误
    xhr.onerror = function() {
        option.error(0, 'error')
    }

    const paramString = getStringParam(option.data)

    if (option.type.toUpperCase() === 'GET') {
        let url = option.url.indexOf('?') > -1 ?
            option.url + paramString :
            option.url + `?${paramString}`
        // 带上参数，第三个参数为是否异步，默认是
        xhr.open(option.type, url, true)
        xhr.send(null)
    } else {
        xhr.open(option.type, option.url, true)
        xhr.send(option.data)
    }

}

function getStringParam(param) {
    let dataString = ''
    for (const key in param) {
        dataString += `${key}=${param[key]}&`
    }
    return dataString
}