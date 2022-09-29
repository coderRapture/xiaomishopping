import ajaxPromise from "../../utils/ajax.js"
import { localUrl } from "../../utils/url.js"
import { saleType } from "../../utils/utils.js"
const details = async() => {
    const detail = await ajaxPromise({
        url: localUrl(`/goods/item/${location.search.slice(1)}`)
    })
    const info = detail.info
    console.log(info);
    document.getElementById('tittle').innerHTML = info.category
    document.querySelector('.section_left').innerHTML = `<img src="${info.img_big_logo}
    "></img>`
}
details()