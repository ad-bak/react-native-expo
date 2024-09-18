// eslint.config.js
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')

module.exports = [
	{
		ignores: [
			'**/node_modules/**',
			'**/.expo/**',
			'**/.next/**',
			'**/__generated__/**',
			'**/build/**',
			'/react-native-lab/react-native/**',
			'/docs/react-native-website/**',
			'**/android/**',
			'**/assets/**',
			'**/bin/**',
			'**/fastlane/**',
			'**/ios/**',
			'**/kotlin/providers/**',
			'**/vendored/**',
			'/docs/public/static/**',
		],

		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},

		rules: {
			'import/order': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
]
