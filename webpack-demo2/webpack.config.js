var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
	entry:'./src/app.js',
	output:{
		path:'./dist',
		filename:'js/[name].bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:path.resolve(__dirname,'node_module'),
				include:path.resolve(__dirname,'src'),
				query:{
					presets:['latest']
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader?importLoaders=1!postcss-loader'//处理顺序从右向左
			}
		]
	},
	postcss:[
		require("autoprefixer")({
			broswers:['last 5 versions']
		})
	],
	plugins: [
	  new htmlWebpackPlugin({
	  	  filename:'index.html',//文件名
	  	  template:'index.html',//模版
	  	  inject:'body'//指定引入js放在什么位置
	  	  // title:'this is a',
	  	  // chunks:['main','a'],//包含哪些chunks
	  	  // excludeChunks:['b','c']//排除哪些chunks
	  	  // date:new Date(),
	  	  // minify:{
	  	  // 	  removeComments:true,//删除注释
	  	  // 	  collapseWhitespace:true//删除空格
	  	  // }
	  })
	]
}