export default defineAppConfig({
  pages: [
  'pages/index/index',
  'pages/ai/index',
  'pages/mine/index',
  'pages/create/index', "pages/login/index", "pages/articles/index", "pages/rankings/index"],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "red",
    selectedColor: 'green',
    backgroundColor: "pink",
    list: [
    {
      pagePath: 'pages/index/index',
      text: '刷题'
    }, {
      pagePath: 'pages/articles/index',
      text: '文章'
    },
      {
        pagePath: 'pages/rankings/index',
        text: '排行榜'
      },
      {
      pagePath: 'pages/ai/index',
      text: 'ai小助手'
    },

    {
      pagePath: 'pages/mine/index',
      text: '个人中心'
    }]


  }
});
