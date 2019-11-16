module.exports = {
  plugins: {
    autoprefixer: {},
    // 配置计算rem值的插件
    'postcss-pxtorem': {
      // 安照37.7的基准值来换算rem单位
      // vant默认最佳显示状态在ipone6 宽度375px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
