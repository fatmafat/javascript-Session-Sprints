//1.Fix the syntax & style issues with the three objects below:fi
self={firstname:"Yan" , lastname:"Fan",animal:"dog",noise:"bark",age:3,type:"golde retrvier",color:"yellow"}
//2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
person={firstname:"fatma",lastname:"hssini",age:19,hometown:"medina"}
//3.Access the favorite food property in the object using dot notation, and reassign it to a different food.
food={
    myfood:["roast meat"],
    anotherfood:["salade"]
    }
//4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively
let object={
    name:{
        first:"fatma",
        last:"hssini",
        middle:"aandich"
    }
}
//5.Write a function called emptyObject that takes no parameters and returns an empty object
function emp(obj,key){
    obj={}
    return obj
}
//6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
function add(obj,key){
    obj[key]=true
}