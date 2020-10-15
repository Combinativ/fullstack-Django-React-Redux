module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      // {
      // 	test: /\.(png|jpg)$/,
      // 	exclude: /(node_modules)/,
      // 	loader: "file-loader",
      // },
      // {
      // 	test: /\.(png|jpg|gif|svg)$/,
      // 	loader: "file-loader",
      // 	options: {
      // 		publicPath: "static/",
      // 		outputPath: (url, resourcePath, context) => {
      // 			// `resourcePath` is original absolute path to asset
      // 			// `context` is directory where stored asset (`rootContext`) or `context` option

      // 			// To get relative path you can use
      // 			//const relativePath = path.relative(context, resourcePath);

      // 			if (/my-custom-image\.png/.test(resourcePath)) {
      // 				return `other_output_path/${url}`;
      // 			}

      // 			if (/images/.test(context)) {
      // 				return `image_output_path/${url}`;
      // 			}

      // 			return `${url}`;
      // 		},
      // 	},
      // },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
