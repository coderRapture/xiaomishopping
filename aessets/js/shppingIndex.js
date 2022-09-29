import ajaxPromise from "../../utils/ajax.js"
import { localUrl } from "../../utils/url.js"
import { saleType } from "../../utils/utils.js"
const con2 = document.querySelector('.con2')
    // 页面渲染
const pageLoad = async(data) => {
    const shop = await ajaxPromise({
        url: localUrl(`/goods/list`),
        data
    })
    const shopList = shop.list
    console.log(shopList);
    let str = ''
    shopList.forEach(elem => {
        str += `<div  shop-name="${elem.goods_id}">
        <img src="${elem.img_big_logo}" shop-name="${elem.goods_id}">
        <h1 shop-name="${elem.goods_id}" >${elem.title}</h1>
        <h2 shop-name="${elem.goods_id}" >${elem.current_price}元&emsp;<del shop-name="${elem.goods_id}">${elem.price}</del></h2>
        <h3 shop-name="${elem.goods_id}" >${saleType(elem.sale_type)}</h3>
    </div>`
    })
    con2.innerHTML = str
}
pageLoad({
    current: 1,
    pagesize: 100
});
//搜索页
(() => {
    const search = document.getElementById('search')
    const inpSearch = document.getElementById('inpSearch')
    search.addEventListener('click', () => {
        pageLoad({
            current: 1,
            pagesize: 100,
            search: inpSearch.value
        })
    })
})();
//获取分类列表,并进行渲染
(() => {
    const ul = document.getElementById('classify')
    const classfiy = async() => {
        const cls = await ajaxPromise({
            url: localUrl(`/goods/category`)
        })
        let str = '<li>全部商品分类</li>'
        for (let i = 0; i <= 7; i++) {
            str += `<li><a href="javascript:;">${cls.list[i]}</a></li>`
        }
        str += '<table></table>'
        ul.innerHTML = str
    }
    classfiy()
    ul.addEventListener('click', (e) => {
        e = window.event || e
        if (e.target.nodeName == 'A') {
            pageLoad({
                current: 1,
                pagesize: 100,
                category: e.target.innerHTML
            })
        }
    })
})();
//点击商品跳转详情页面
(() => {
    con2.addEventListener('click', (e) => {
        e = window.event || e
        if (e.target.getAttribute('shop-name')) {
            window.open(`./detail.html?${e.target.getAttribute('shop-name')}`)
        }
    })
})();