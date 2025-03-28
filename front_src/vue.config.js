const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/v1/api": { // API 경로와 일치해야 함
        target: "http://localhost:8080", // 백엔드 주소
        changeOrigin: true, // 도메인 변경 허용
        secure: false, // HTTPS 사용 안 할 경우 false
        pathRewrite: { "^/v1/api": "/v1/api" } // 경로 재작성 (필요시)
      }
    }
  }
});