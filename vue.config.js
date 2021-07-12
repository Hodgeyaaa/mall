module.exports = {
    configureWebpack: {
        resolve :{
            extensions: [],
            //配置路径别名
            alias: {
                // '@': 'src'(内部已配置的别名)
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                

            }
        }
    }
}