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
    return info.goods_id
}
const goodsId = details();
(() => {
    //加入购物车
    goodsId.then(res => { console.log(res) })
    const setCar = document.getElementById('setCar')
    setCar.addEventListener('click', () => {
        if (localStorage.getItem('userId')) {
            console.log(localStorage.getItem('userId'));
        } else {
            alert(`您未登陆帐户，请重新登陆`)
            location.href = `../../views/login.html`
        }
    })
})();