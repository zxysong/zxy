module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? '/' : "/",
  devServer: {
    proxy: {
      "/dev": {
        target: "http://47.96.139.20:8200/adult-exam/v2/api-docs",
        changeOrigin: true,
        pathRewrite: {
          "^/dev": ""
        }
      },
    }
  },
};