export default defineAppConfig({
  pages: [
  'pages/index/index',
  'pages/ai/index',
  'pages/mine/index',
  'pages/create/index', "pages/login/index"],

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
      pagePath: 'pages/create/index',
      text: '录题'
    }, {
      pagePath: 'pages/ai/index',
      text: 'ai小助手'
    }, {
      pagePath: 'pages/mine/index',
      text: '个人中心'
    }]


  }
});
