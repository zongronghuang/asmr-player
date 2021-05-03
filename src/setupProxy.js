const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    "/oauth",
    createProxyMiddleware({
      target: process.env.REACT_APP_TWITTER_BASE_URL,
      changeOrigin: true,
    })
  )
}