/**权限数据 */
let root = {
    islogin: {
        name: 'islogin', //是否去登录
        trueVlue: 'islogintrue', //如果登录就赋值为这个
        falseValue: null //退出就赋值为这个值
    },
    isRoot: {
        name: 'isRoot', //是否是管理员
        trueVlue: 'true',
        falseValue: 'false'
    },
    rootNum: {
        rootArr:[
       
        ]
    }
}
root.rootNum.rootArr[0] = '所有页面都可以访问，管理员';
root.rootNum.rootArr[1] = '';


module.exports = root;