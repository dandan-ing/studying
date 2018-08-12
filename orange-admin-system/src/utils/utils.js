export default {

    //格式化时间"2018-08-09
    formateDate(time) {
        if (!time) {
            return '';
        }
        let date = new Date(time);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-"+ date.getDay()
        + " " + date.getHours() + ":" +date.getMinutes()+":"+date.getSeconds();
    },
    pagination(data,callback){
        let page = {
            onChange:(current) => {
                callback(current);
            },
            current: data.current,
            pageSize: data.pageSize,
            total: data.total,
            showTotal: ()=>{
                return `共条数据`
            },
            showQuickJumper:true
        }

        return page;
    }
}