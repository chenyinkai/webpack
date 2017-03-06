var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	},
	output:{
		path:'./dist',
		filename:'js/[name]-[chunkhash].js',
		publicPath:'http://baidu.com'
	},
	plugins: [
	  new htmlWebpackPlugin({
	  	  filename:'a.html',//文件名
	  	  template:'index.html',//模版
	  	  inject:false,//指定引入js放在什么位置
	  	  title:'this is a',
	  	  chunks:['main','a'],//包含哪些chunks
	  	  excludeChunks:['b','c']//排除哪些chunks
	  	  // date:new Date(),
	  	  // minify:{
	  	  // 	  removeComments:true,//删除注释
	  	  // 	  collapseWhitespace:true//删除空格
	  	  // }
	  }),
	  new htmlWebpackPlugin({
	  	  filename:'b.html',//文件名
	  	  template:'index.html',//模版
	  	  inject:false,
	  	  title:'this is b',
	  	  chunks:['main','b'],
	  	  excludeChunks:['a','c']
	  }),
	  new htmlWebpackPlugin({
	  	  filename:'c.html',//文件名
	  	  template:'index.html',//模版
	  	  inject:false,
	  	  title:'this is c',
	  	  chunks:['main','c'],
	  	  excludeChunks:['b','a']
	  })
	]
}