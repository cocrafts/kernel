module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					components: './src/components',
					stacks: './src/stacks',
					screens: './src/screens',
					utils: './src/utils',
					build: './submodules/build/src',
				},
			},
		],
		'react-native-reanimated/plugin',
		// 'react-native-web',
	],
};
