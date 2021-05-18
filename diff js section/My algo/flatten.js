console.log("Working");

var arr = [[[1,2,3],[2,4,5],4,5,6,7],6,7,89,[30,45,[2,5,7]]];
var hash_arr = [4,2,1,2,1,1,6,7,7,7,2,0,0,4];
var String = "EBG13 rknzcyr.";
//console.log(typeof [2,3]);



function rot13(str) {
    var L_orig = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
               'o','p','q','r','s','t','u','v','w','x','y','z'];
    
    var U_orig = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
               'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
     
     var num = ['1','2','3','4','5','6','7','8','9','0'];
     var symbols = [",","/","'","*",".","!"];
     
     var arr = str.split('');
     var newarr = [];
     arr.forEach(item =>{
       if(L_orig.includes(item)){
         var d = L_orig.indexOf(item)+13;
         if (d>L_orig.length-1){
           d = d - L_orig.length;
         }
         newarr.push(L_orig[d]);
         
       }else if(U_orig.includes(item)){
        var d = U_orig.indexOf(item)+13;
         if (d>U_orig.length-1){
           d = d - U_orig.length;
         }
         newarr.push(U_orig[d]);
       }else if(num.includes(item)){
        var d = num.indexOf(item);
         newarr.push(num[d]);
       }else if(symbols.includes(item)){
         var d = symbols.indexOf(item);
         newarr.push(symbols[d]);
       }else{
         newarr.push(" ");
       }
     })
     
     return newarr.join('');
   }

console.log(rot13(String));

/*function hashed(array){
    var hash = {}; 
    var countArray=[];
    
    for(let i=0; i<array.length; i++){
        if(!hash[array[i]]){
            hash[array[i]] = 1;
        }else{
            hash[array[i]]++;
        }
    }

    for(var key in hash){
        for(let i =0; i<hash[key]; i++){
            countArray.push(parseInt(key));
        }
    }

    return countArray;
}*/

let categories = [
    {id:'animals','parents': null },
    {id:'mammals','parents':'animals'},
    {id:'cats','parents':'mammals'},
    {id:'dogs','parents':'mammals'},
    {id:'chihuahua','parents':'dogs'},
    {id:'labrador','parents':'dogs'},
    {id:"persian",'parents':"cats"}
]


let makeTree = (categories,parent)=>{
    let node  = {};
    categories.filter(x => x.parents === parent)
    .forEach(c => node[c.id]= makeTree(categories,c.id))
    return node
}

console.log(
    JSON.stringify(
        makeTree(categories,null),null,2
    )
    
)

let countDownFrom = (num)=>{
    if(num ===0){
        return
    }

    console.log(num);
    countDownFrom(num -1);
}

countDownFrom(10);



