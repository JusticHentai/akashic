module.exports = {
  extends: [
    '@justichentai/stylelint-config/basic',
    '@justichentai/stylelint-config/scss',
  ],
  rules: {
    // mask 不带前缀会有问题
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['mask-image'],
      },
    ],
  },
}
