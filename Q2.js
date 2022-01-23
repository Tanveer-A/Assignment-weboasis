var A = [1,0,1,0,1,0,1,0];
var B = [1,1,0,0,1,1,0,0];
var i = A.length - 1, j = B.length - 1;
var c = 0;
var R = [];
while(i >= 0 || j >= 0){
    var x = i >= 0 ? A[i] : 0;//using zero if one of arrays is shorter
    var y = j >= 0 ? B[j] : 0;
    var t = (x + y +c) % 2;//getting sum
    c = 1 < (x + y + c) ? 1 : 0;//getting carry
    R.push(t);
    i --; j --;
}
if(c)
R.push(c);
R.reverse();
console.log(R);