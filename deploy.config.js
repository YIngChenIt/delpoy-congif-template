module.exports = {
    dev: {
        name: 'dev',
        script: "npm run build", // 测试环境打包脚本
        host: '', // 测试服务器地址
        port: 22, // ssh port，一般默认22
        username: '', // 登录服务器用户名
        password: '', // 登录服务器密码
        distPath: 'dist', // 本地打包dist目录
        webDir: '', // // 测试环境服务器地址
    },
    prod: { 
        name: 'prod',
        script: "npm run build", // 线上环境打包脚本
        host: '', // 线上服务器地址
        port: 22, // ssh port，一般默认22
        username: '', // 登录服务器用户名
        password: '', // 登录服务器密码
        distPath: 'dist', // 本地打包dist目录
        webDir: '' // 线上环境web目录
    }
}
