module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier',
    ],
    plugins: ['@typescript-eslint', 'react'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
        // TypeScript rules
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    
        // React rules
        'react/prop-types': 'off', // If using TypeScript, prop-types are not necessary
        'react/react-in-jsx-scope': 'off', // Vite automatically adds React import
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // Use .tsx for React components
        'react/jsx-uses-react': 'off', // Vite automatically adds React import
        'react/jsx-uses-vars': 'error',
        
        // Other recommended rules
        'no-console': 'error', // Disallow console.log and other console methods
        'no-unused-vars': 'warn', // Warn for unused variables
        'prettier/prettier': 'error', // Enforce Prettier formatting
      },
  };
  