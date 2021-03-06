module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    `react-app`
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __PATH_PREFIX__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn',
      {
       extensions: ['.jsx','.js']
      }

    ],
    'import/prefer-default-export':'off',
    'react/prefer-stateless-function':'off',
    'react/state-in-constructor': 'off',
    'react/sort-comp':'off',
    'react/static-property-placement':'off',
    'no-param-reassign':'off',
    'no-console':['error',{allow:['tron']}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps':'warn'
  },
};
