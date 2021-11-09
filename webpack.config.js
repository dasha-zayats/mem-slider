const path= require('path');
const HTMLWebpackPlugin= require("html-webpack-plugin");
const {CleanWebpackPlugin}= require('clean-webpack-plugin');
const MiniCssExtractPlugin= require("mini-css-extract-plugin");

module.exports= {
	 mode: "development",
	entry: {                       
		main: "./src/index.js"
	},  
	output:{                                 
		filename: "index.js",
		path: path.resolve(__dirname,"dist")    
	},
	plugins: [
	    new HTMLWebpackPlugin({
	    	template: 'src/CSS Mem Slider.html'
	    }),
	    new CleanWebpackPlugin(),
	    new MiniCssExtractPlugin({
    	filename: "[name].css"
        })
	],
	module: {
  	    rules: [
		  	{
		        test: /\.css$/,
		        use:[
	          		{
	          			loader: MiniCssExtractPlugin.loader,
	          			options: {}
	         		},
	         		"css-loader"
	         		]
		    },
		    {
  	  	        test:/\.jpg$/,
  	  	        type: 'asset/resource',
  	  	        generator: {
         			filename: '[name][ext]'
       			}
  	        }
	    ]
	}    
}