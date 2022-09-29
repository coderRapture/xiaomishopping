//接口调用函数
//使用函数柯里化
const url = mainUrl => Interface => mainUrl + Interface
export const localUrl = url('http://localhost:8888')
    //表单传参类型的数据优化
let urlcode = (data) => {
        let str = ''
        for (let key in data) {
            str += `${key}=${data[key]}&`
        }
        str = str.replace(/&$/, '')
        return str
    }
    //将传参的数据进行优化，可以在调用接口时直接使用
export const getdata = (ajaxObj) => {
    let newData = {}
    newData.method = ajaxObj.method ? ajaxObj.method : 'get'
    newData.boolean = ajaxObj.boolean !== undefined ? ajaxObj.boolean === true ? true : false : true
    if (ajaxObj.request) {
        newData.request = ['content-type', ajaxObj.request]
    } else {
        newData.request = ['content-type', 'application/x-www-form-urlencoded']
    }
    if (ajaxObj.data) {
        if (newData.method == 'get') {
            newData.url = ajaxObj.url + '?' + urlcode(ajaxObj.data)
        } else {
            newData.url = ajaxObj.url
            newData.request[1] == 'application/x-www-form-urlencoded' ? newData.data = urlcode(ajaxObj.data) : newData.data = JSON.stringify(ajaxObj.data)
        }
    } else {
        newData.url = ajaxObj.url
    }
    return newData
}