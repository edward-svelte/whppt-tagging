module.exports = {
  displayName: 'nuxt',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue2-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/packages/nuxt',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'packages/nuxt/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'packages/nuxt/tsconfig.spec.json',
    },
  },
};
