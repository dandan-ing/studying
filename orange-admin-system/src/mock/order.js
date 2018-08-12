import Mock from 'mockjs';

Mock.setup({timeout:20-100});

Mock.mock('/api/order/orderlist',{
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
                'orderId':'@id',
                'username': '@cname',
                'phone': '1',
                'status': '1',
                'orderTime': '2000-01-01',
                'amount': '1111',
                'staf': '@cname',
                'money':'22'
            }
        ]
    }
})

Mock.mock('/api/order/detail',{
    success:true,
    msg:'',
    data: {
        'id':1,
        'orderId':'@id',
        'username': '@cname',
        'phone': '1',
        'status': '1',
        'orderTime': '2000-01-01',
        'amount': '1111',
        'staf': '@cname',
        'money':'22',
        'productname':'产品名称',
        'startDate':'2018-09-01',
        'endDate':'2018-09-09',
        'position_list':[
            233,4677
        ],
        'area':'2133'
        
    }
})
