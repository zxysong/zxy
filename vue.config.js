module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? '/' : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.96.139.20:8200",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  },
};