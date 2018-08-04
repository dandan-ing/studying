import Mock from 'mockjs';
Mock.setup({timout:'1200-2600'});

Mock.mock('/api/homelist',{
    hasMore: true,
    data: [
        {
            id: 22,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
            title: '汉堡大大',
            subTitle: '叫我汉堡大大，还你多彩口味',
            price: '28',
            distance: '120m',
            mumber: '389'
        },
        {
            id: 23,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
            title: '北京开源饭店',
            subTitle: '[望京]自助晚餐',
            price: '98',
            distance: '140m',
            mumber: '689'
        },
        {
            id: 25,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201652952-1050532278.png',
            title: '服装定制',
            subTitle: '原价xx元，现价xx元，可修改一次',
            price: '1980',
            distance: '160',
            mumber: '106'
        },
        {
            id: 26,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201700186-1351787273.png',
            title: '婚纱摄影',
            subTitle: '免费试穿，拍照留念',
            price: '2899',
            distance: '160',
            mumber: '58'
        },
        {
            id: 28,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
            title: '麻辣串串烧',
            subTitle: '双人免费套餐等你抢购',
            price: '0',
            distance: '160',
            mumber: '1426'
        }
    ]
});

Mock.mock('/api/adlist',{
    data: [
        {
            title: '暑假5折',
            img: 'https://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png',
            link: 'http://www.imooc.com/wap/index'
        },
        {
            title: '特价出国',
            img: 'https://images2015.cnblogs.com/blog/138012/201610/138012-20161016191648124-298129318.png',
            link: 'http://www.imooc.com/wap/index'
        },
        {
            title: '亮亮车',
            img: 'https://images2015.cnblogs.com/blog/138012/201610/138012-20161016191653983-1962772127.png',
            link: 'http://www.imooc.com/wap/index'
        },
        {
            title: '学钢琴',
            img: 'https://images2015.cnblogs.com/blog/138012/201610/138012-20161016191700420-1584459466.png',
            link: 'http://www.imooc.com/wap/index'
        },
        {
            title: '电影',
            img: 'https://images2015.cnblogs.com/blog/138012/201610/138012-20161016191706733-367929553.png',
            link: 'http://www.imooc.com/wap/index'
        },
        {
            title: '旅游热线',
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191713186-495002222.png',
            link: 'http://www.imooc.com/wap/index'
        }]
})


Mock.mock('/api/cityList',{
    data:['上海','北京','南京','西安','沈阳','深圳','苏州','无锡','常州']
})

Mock.mock('/api/detail',{
    data:{
        title:'麻辣串串烧',
        star: 4,
        subTitle: '双人免费套餐等你抢购',
        price: "99",
        img: "https://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png",
        desc: "营业时间 11:00-22:00 <br> 电话预定时间 11:00 - 19:00 <br> 网络预定时间 12:00 - 15:00"
    }
})

Mock.mock('/api/commentList', {
    hasMore: true,
    data:[
    {
        id: 1,
        phone:"13****5555",
        star: 4,
        content: "非常好吃"
    },{
        id: 2,
        phone: "13****5555",
        star: 4,
        content: "非常好吃"
    },{
        id: 3,
        phone: "13****5555",
        star: 4,
        content: "非常好吃"
    },{
        id: 4,
        phone: "13****5555",
        star: 4,
        content: "非常好吃"
    },{
        id: 5,
        phone: "13****5555",
        star: 4,
        content: "非常好吃"
    }]
})


Mock.mock('/api/orderlist',{
    data:[{
            id: 22,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
            title: '汉堡大大',
            price: '28',
            mumber: '389',
            commentState: 0
        },
        {
            id: 22,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
            title: '汉堡大大',
            price: '28',
            mumber: '389',
            commentState: 2
        },
        {
            id: 22,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
            title: '汉堡大大',
            price: '28',
            mumber: '389',
            commentState: 0
        },
        {
            id: 22,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
            title: '汉堡大大',
            price: '28',
            mumber: '389',
            commentState:2
        },
        {
            id: 22,
            img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
            title: '汉堡大大',
            price: '28',
            mumber: '389',
            commentState:0
        }]
})

Mock.mock('/api/postcomment',{
    data:1
})
