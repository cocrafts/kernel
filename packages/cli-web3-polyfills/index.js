const web3Polyfills = (configs, { modules }) => {
	const { webpack } = modules;
	const fallback = Object.assign(configs.resolve.fallback || {}, {
		crypto: require.resolve('crypto-browserify'),
		stream: require.resolve('stream-browserify'),
		assert: require.resolve('assert'),
		http: require.resolve('stream-http'),
		https: require.resolve('https-browserify'),
		os: require.resolve('os-browserify'),
		url: require.resolve('url'),
		process: require.resolve('process/browser'),
		zlib: false,
		fs: false,
		path: false,
	});
	const plugins = {
		process: require.resolve('process/browser'),
		Buffer: ['buffer', 'Buffer'],
	};

	configs.ignoreWarnings = [/Failed to parse source map/];
	configs.plugins.push(new webpack.ProvidePlugin(plugins));
	configs.resolve.fallback = fallback;
	configs.module.rules.push({
		test: /\.(js|mjs|jsx)$/,
		enforce: 'pre',
		loader: require.resolve('source-map-loader'),
		resolve: {
			fullySpecified: false,
		},
	});

	return configs;
};

module.exports = {
	web3Polyfills,
};
