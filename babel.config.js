module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          _components: './src/components',
          _navigation: './src/navigation',
          _assets: './src/assets',
          _services: './src/services',
          _screens: './src/screens',
          _styles: './src/styles',
          _utils: './src/utils',
          _store: './src/store',
          _constants: './src/constants',
        },
      },
    ],
  ],
};
