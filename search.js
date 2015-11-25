/**
 * Created by YANG on 15/9/21.
 */

function sort(){
    var arr = ["a","x","b","d","m","a","k","m","p","j","a"];
    var temp = 0;//出现最多的字母首次出现下标
    var tempnum =1;//出现最多字母出现次数
    var num = 1;
    var i;
    //遍历数组找出出现最多的字母首次出现下标temp和出现次数tempnum
    for(i = 0;i<arr.length;i++){
        for(var j = i+1;j<arr.length;j++){
            if(arr[j]==arr[i]){
                num++;
            }
        }
        if(num>tempnum)
        {
            tempnum = num;
            temp = i;
        }
        num = 1;
    }
    //找出出现最多次数字母的所有下标
    var res = new Array(tempnum);
    j=0;
    for(i = 0;i<arr.length;i++){
        if(arr[i]==arr[temp]){
            res[j]=i;
            j++;
        }
    }
    //结果打印在div上面
    document.getElementById('result').innerHTML= "出现最多的字母为：["+arr[temp]+"]"+"所在位置分别为：";
    for(i = 0;i<tempnum;i++){
        document.getElementById('result').insertAdjacentHTML("beforeEnd","arr["+res[i]+"]"+";");
    }
}