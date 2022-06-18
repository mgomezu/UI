const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'https://untutoringesoft.herokuapp.com/',
          changeOrigin:true,
        })
      );
};
