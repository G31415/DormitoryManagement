// 跨域配置
module.exports = {
  publicPath: "./", // vue-cli3.3+新版本使用

  devServer: {
    //记住，别写错了devServer//设置本地默认端口  选填
    // port: 9876,
    proxy: {
      //设置代理，必须填
      "/api": {
        //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
        target: "http://localhost:9090", //代理的目标地址
        changeOrigin: true, //是否设置同源，输入是的
        pathRewrite: {
          //路径重写
          "^/api": "", //选择忽略拦截器里面的内容
        },
      },
    },
  },
  configureWebpack: config => {
		// 不是开发环境时生效
		if (process.env.NODE_ENV !== 'development') {
			config['performance'] = {
				// 警告 webpack 的性能提示
				hints: 'warning',
				// 入口起点的最大体积
				maxEntrypointSize: 50000000,
				// 生成文件的最大体积
				maxAssetSize: 30000000,
				// 只给出 js 文件的性能提示
				assetFilter: function (assetFilename) {
					return assetFilename.endsWith('.js')
				}
			}
		}
	},
};
