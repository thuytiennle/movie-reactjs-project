// Use for fix error :Access to XMLHttpRequest at 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/CapNhatPhimUpload',
    createProxyMiddleware({
      target: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim',
      secure: false,
      changeOrigin: true,
    }),
  );
};
