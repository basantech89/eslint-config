// eslint: recommended applies the bare minimum eslint rules
//  sourceType: module means we're gonna be using es-modules i.e imports and exports
//  ecmaVersion: 2018 is javascript es6
//  env, browser:true means there'll be setTimeout, document, window and things like that
// node:true means that we'll be writing node as well so things like http and require will be there
module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier'
	],
	rules: {
		'react/prop-types': 0,
		'no-console': 1,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,
		'prettier/prettier': 2,
		'react/jsx-props-no-spreading': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars-experimental': 'error',
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': ['error']
	},
	plugins: [
		'react',
		'import',
		'jsx-a11y',
		'react-hooks',
		'@typescript-eslint',
		'prettier'
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		es6: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}
