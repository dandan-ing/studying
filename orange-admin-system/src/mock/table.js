import Mock from 'mockjs';

Mock.setup({timeout:20-100});

Mock.mock('/api/admin/data/table',{
    success:true,
    msg:'',
    data:{
        current:1,
        pageSize:2,
        total:10,
        page:1,
        'list|10':[
            {
                'id|+1':1,
                'username':'@cname',
                'sex': '1',
                'state': '1',
                'hobby': '1',
                'birth': '2000-01-01',
                'contactAdd': 'dadsa',
                'time': '09:00'
            }
        ]
    }
})