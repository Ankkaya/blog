module.exports = {
    title: 'Ankkaya Blog',
    description: 'Just play fun',
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '书籍',
                link: '/books/'
            },
            {
                text: '关于',
                link: '/about/'
            },
            {
                text: '联系我',
                link: '/contact'
            }
        ],
        sidebar: {
            '/about/': [
                {
                    text: '首页',
                    link: '/about/index'
                },
                {
                    text: '其他',
                    link: '/about/other'
                }
            ]
        }
    }
}

function getBooksSidebar() {
    return [
        {

        }
    ]
}