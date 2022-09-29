//正则判断用户名以及密码
const Test = reg => str => reg.test(str)
export const usernameTest = Test(/^[a-z0-9]\w{4,11}$/)
export const pwdTest = Test(/\w{6,12}/)
    //根据服务器返回的打折数据进行解析
export const saleType = (sale) => {
    return parseInt(sale) / 10 == 10 ? '原价' : parseInt(sale) / 10 + '折'
}