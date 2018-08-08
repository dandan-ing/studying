import Mock from 'mockjs';
Mock.setup({timout:'1200-2600'});

Mock.mock('/api/login',{
    success: true,
    msg:'',
    data: {}
});

Mock.mock('/api/adlist',{
    data: []
        
})


Mock.mock('/api/cityList',{
    data:['上海','北京','南京','西安','沈阳','深圳','苏州','无锡','常州']
})