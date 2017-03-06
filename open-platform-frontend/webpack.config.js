var webpack = require('webpack');



module.exports = {
    context: __dirname,
    entry: [
        (process.env.NODE_ENV == 'prod')?"./src/entry_prod" : "./src/entry_dev"
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/",
        sourceMapFilename: "[file].map?hash=[hash]"
    },
    module: {
        loaders: [
		    {
		        test: /\.jsx?/,
		        exclude: /node_modules/,
		        loader: "babel"
		    },
            {
                test: /\.json$/,
                loader: 'json'
            }
		]
	}
};

