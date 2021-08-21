module.exports = {
  reactStrictMode: true,
  plugins: [
    'module-resolver',
    {
      alias: {
        '~/*': '.',
      },
    },
  ],
}
