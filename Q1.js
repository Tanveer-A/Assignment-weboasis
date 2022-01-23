const jsonData = require('./ecom.json');
const query = 'Mik';
const qlen = query.length;
var res = [];
jsonData.forEach(element => {
    var name = element['name'];
    var type = element['typeofproduct'];
    var nlen = name.length;
    var tlen = type.length;
    var len1 = qlen > nlen ?nlen : qlen;
    var len2 = qlen > tlen ?tlen : qlen;
    //matchcount stores number of same characters
    var matchcount = 0;
    for(let i = 0; i < len1; i++){
        if(query[i] == name[i]){
            matchcount ++;
        }
    }
    const nsimilarity = (matchcount*100)/qlen;//similarity percentage
    if(nsimilarity >= 50)
        res.push(element);
    //for query by type of product    
    matchcount = 0;
    for(let i = 0; i < len2; i++){
        if(query[i] == type[i]){
            matchcount ++;
        }
    }
    const tsimilarity = (matchcount*100)/qlen;
    if(tsimilarity >= 50)
        res.push(element);
});
console.log(res);