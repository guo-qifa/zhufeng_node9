//进制计算
//一个字节由八个位组成，每个位最大是1，
// 当前位大的值*进制^所在第几位
//00111111
//1*2^6-1 = 63
// 00000011是二进制 转化成10进制  1*2^1+1*2^0 = 3
//ff 16进制最大  16进制转换成10进制  15*16^1+15*16^0 = 255
var sum = 0;
for(var i = 0; i<8;i++){
    sum+= Math.pow(2,i);
}
console.log(sum);


