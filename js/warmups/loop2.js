/*function index(str1,index,str2){
    let count=0
    for(let i=0;i<str2.length;i++){
        if(str2.charAt(i)===str1.charAt(index)){
            console.log(str2.charAt(i))
            count++
        }
    }
    return count 
}
console.log("hello")*/
function index(str1,index,str2){
    let car=str1[index]
    console.log(car,"caaaar")
    let result=0
    for(let i=0;i<str2.length;i++){
        console.log(str2[i],"loop 3ala str2")
        if(car===str2[i]){
            result++
        }

    }
    return result 
}
