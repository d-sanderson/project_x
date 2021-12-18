module.exports = {
    globals: {
      __PATH_PREFIX__: true,
    },
    parser: '@typescript-eslint/parser',
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    settings: {
      ecmascript: 6,
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaVersion: 2019,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        experimentalDecorators: true,
        jsx: true,
      },
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    extends: [
      'plugin:@typescript-eslint/recommended', 'prettier', 'airbnb',
    ],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 2,
      'no-undef': 'off', // i don't love this, but it's not seeing our global types
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
      'react-hooks/rules-of-hooks': 'error',
      'react/no-danger': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-fragments': 'off',
      'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
      'react/no-arrow-function-lifecycle': 'error',
      'react/no-invalid-html-attribute': 'error',
      'react/no-unused-class-component-methods': 'error',
      semi: ['error', 'never'],
      'max-len': ['warn', 120],
      'max-lines': ['error'],
      'max-depth': ['error'],
      indent: ['error', 2, { SwitchCase: 0 }],
  
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/label-has-for': [
        2,
        {
          components: ['Label'],
          required: {
            some: ['nesting', 'id'],
          },
          allowChildren: false,
        },
      ],
      'no-underscore-dangle': ['off', { enforceInMethodNames: true }],
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-absolute-path': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
    },
  }