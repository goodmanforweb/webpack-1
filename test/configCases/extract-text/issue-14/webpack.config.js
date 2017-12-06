var ETP = require("extract-text-webpack-plugin");
module.exports = {
	node: {
		__dirname: false,
		__filename: false
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ETP.extract("css-loader")
			}
		]
	},
	plugins: [new ETP("style.css")]
};
