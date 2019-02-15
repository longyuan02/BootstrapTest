module.exports = { //模块导出
    //配置入口文件
    entry: './main.js',
    output: {
        path: __dirname, //项目根路径
        filename: 'build.js'
    },
    //配置模块加载器
    module: {
        rules: [{
            test: /\.vue$/, //匹配文件所有以.vue结尾的文件都是用vue-loader加载编译
            loader: 'vue-loader',
        }, {
            test: /\.js$/, //所有以.js结尾的文件都是用babel-loader来加载 除了node_moudle以外
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }

}