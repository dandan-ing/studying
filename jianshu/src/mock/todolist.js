import Mock from 'mockjs';

Mock.setup({timeout:20-100});

Mock.mock('/list.action',{
    success:true,
    msg:'',
    data:['hello','world']
})