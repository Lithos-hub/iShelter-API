module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['standard', 'eslint-config-prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {},
};
