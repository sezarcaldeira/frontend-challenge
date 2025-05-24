import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import pluginJest from 'eslint-plugin-jest'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['src/**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['src/**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['src/**/*.{js,mjs,cjs,jsx}'],
    extends: [pluginReact.configs.flat.recommended],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.test.{js,mjs,cjs,jsx}'],
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: globals.jest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
])
