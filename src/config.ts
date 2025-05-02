export default {
  // 网站标题
  Title: '話してみよう！',
  // 网站地址
  Site: 'https://github.com/AoiMatsu/Hanashi-vhAstro',
  // 网站副标题
  Subtitle: '日本語話しましょう！',
  // 网站描述
  Description: '这里还没有网站描述',
  // 网站作者 字体参考https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E5%AD%97%E6%AF%8D%E6%95%B0%E5%AD%97%E7%AC%A6%E5%8F%B7
  Author: '𝓢𝓮𝓲𝓼𝓱𝓸',
  // 作者头像
  Avatar: '/assets/images/avatar.gif',
  // 网站座右铭
  Motto: '人間到る処青山あり',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '',
  // 首页打字机文案列表
  TypeWriteList: [
    '不曾与你分享的时间,我在进步.',
    "I am making progress in the time I haven't shared with you.",
  ],
  // 网站创建时间
  CreateTime: '2025-05-02',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    // 首页高度
    HomeHeight: '38.88rem',
    // 其他页面高度
    PageHeight: '28.88rem',
    // 背景
    background: "url('/assets/images/banner.webp') no-repeat center 60%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--vh-main-color": "#01C4B6",
    // 字体颜色
    "--vh-font-color": "#34495e",
    // 侧边栏宽度
    "--vh-aside-width": "318px",
    // 全局圆角
    "--vh-main-radius": "0.88rem",
    // 主体内容宽度
    "--vh-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    // { text: '朋友', link: '/links', icon: 'Nav_friends' },
    // { text: '圈子', link: '/friends', icon: 'Nav_rss' },
    // { text: '动态', link: '/talking', icon: 'Nav_talking' },
    { text: 'アーカイブ', link: '/archives', icon: 'Nav_archives' },
    // { text: '留言', link: '/message', icon: 'Nav_message' },
    { text: 'について', link: '/about', icon: 'Nav_about' },
    // { text: 'API', link: 'https://api.vvhan.com/', target: true, icon: 'Nav_link' },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://fontawesome.com/search?q=Telegram&o=r 直接下载 SVG
    { text: 'Line', link: 'https://line.me/ti/p/hgerHNjLVl', icon: 'line-brands' },
    { text: 'Telegram', link: 'https://telegram.me/aoimatsu', icon: 'telegram-brands' },
    // { text: 'Github Pages2', link: 'https://uxiaohan.github.io/4ce.cn', icon: 'WebSite_github' },
    // { text: 'Github', link: 'https://github.com/uxiaohan', icon: 'WebSite_github' },
    // { text: '韩小韩API', link: 'https://api.vvhan.com', icon: 'WebSite_api' },
    // { text: '每日热榜', link: 'https://hot.vvhan.com', icon: 'WebSite_hot' },
    // { text: '骤雨重山图床', link: 'https://wp-cdn.4ce.cn', icon: 'WebSite_img' },
    // { text: 'HanAnalytics', link: 'https://analytics.vvhan.com', icon: 'WebSite_analytics' },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://cn.cravatar.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      envId: ''
    },
    // Waline 评论
    Waline: {
      enable: true,
      serverURL: 'https://waline-test-3yqn9ahby-aoimatsus-projects.vercel.app/'
    }
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: false, server: 'https://analytics.vvhan.com', siteId: 'Hello-HanHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: '', //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
  // 文章内赞赏码，注释后<div>还在。
  Reward: {
    // 支付宝收款码
    // AliPay: '/assets/images/alipay.webp',
    // 微信收款码
    // WeChat: '/assets/images/wechat.webp'
  },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url'
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 666
}