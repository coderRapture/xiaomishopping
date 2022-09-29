import { getdata } from "./url.js"
const ajaxPromise = (ajaxObj) => {
    const getData = getdata(ajaxObj)
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(getData.method, getData.url)
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const userData = JSON.parse(xhr.responseText)
                if (userData.code === 1) {
                    resolve(userData)
                } else {
                    reject(userData.message)
                }
            }
        })
        if (getData.method == 'post') {
            xhr.setRequestHeader(getData.request[0], getData.request[1])
            xhr.send(getData.data)
        } else {
            xhr.send()
        }
    })
    return promise
}
export default ajaxPromise