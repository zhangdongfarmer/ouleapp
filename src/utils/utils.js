
function p(s) {
    return s < 10 ? '0' + s: s;
}
//时间戳转化成时间格式
export let timeFormat =  (timestamp)=>{
  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
    var time = new Date(timestamp);
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return year+'-'+p(month)+'-'+p(date)+' '+p(hours)+':'+p(minutes)+':'+p(seconds);
}