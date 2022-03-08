module.exports = {
  title: "Ankkaya Blog",
  description: "Just play fun",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "书籍",
        link: "/books/",
      },
      {
        text: "其他",
        link: "/other/",
      },
      {
        text: "联系我",
        link: "/contact",
      },
    ],
    sidebar: {
      "/other": [
        {
          text: "其他",
          children: [
            {
              text: "资源",
              link: "/other/",
            }
          ],
        },
      ],
    },
  },
};

function getBooksSidebar() {
  return [{}];
}
