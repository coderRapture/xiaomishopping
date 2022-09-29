import ajaxPromise from "../../utils/ajax.js"
import { localUrl } from "../../utils/url.js"
import { usernameTest } from "../../utils/utils.js"
import { pwdTest } from "../../utils/utils.js"
//登陆页
const btnSubmit = document.getElementById('btnsubmit')
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const username = document.getElementById('username')
    const pwd = document.getElementById('pwd')
    let regboolean = usernameTest(username.value) === true ? pwdTest(pwd.value) === true ? true : false : false
    if (regboolean) {
        ajaxPromise({
            method: 'post',
            url: localUrl(`/users/login`),
            data: {
                username: username.value,
                password: pwd.value
            }
        }).then(res => {
            console.log(res);
            alert(res.message)
            localStorage.setItem('userToken', res.token)
            location.href = "../../views/shoppingIndex.html"
        }, err => alert(err))
    } else {
        alert(`请输入正确的格式- 用户名: /^[a-z0-9]\w{4,11}$/- 密码: /\w{6,12}/`)
    }
});
//注册选项卡
(() => {
    const regest = document.getElementById('regest')
    const login = document.getElementById('login')
    const onLogin = document.getElementById('onLogin')
    const onRegest = document.getElementById('onRegest')
    onLogin.addEventListener('click', () => {
        login.style.display = 'block'
        regest.style.display = 'none'
        onLogin.className = 'click'
        onRegest.className = ''
    })
    onRegest.addEventListener('click', () => {
        login.style.display = 'none'
        regest.style.display = 'block'
        onLogin.className = ''
        onRegest.className = 'click'
    })
})();
//注册页面
const btnsubmitre = document.getElementById('btnsubmitre')
const nickname = document.getElementById('nickname')
const usernamere = document.getElementById('usernamere')
const pwdre = document.getElementById('pwdre')
const repwd = document.getElementById('repwd')
btnsubmitre.addEventListener('click', (e) => {
    e.preventDefault()
    ajaxPromise({
        method: 'post',
        url: localUrl(`/users/register`),
        data: {
            username: usernamere.value,
            password: pwdre.value,
            nickname: nickname.value,
            rpassword: repwd.value
        }
    }).then(res => {
        console.log(res);
        alert(res.message)
        localStorage.setItem('userToken', res.token)
        history.go()
    }, err => alert(err))
})
console.log(btnsubmitre, nickname, usernamere, pwdre, repwd);