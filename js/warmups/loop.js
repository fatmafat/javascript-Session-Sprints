//1.Write a function called sumOfN that takes a number as a parameter and returns the sum of that number and all the numbers before it
function sumfn(n){
    let r=0
    let i=0
    while(i<=n){
        r=r+i
        i++
    }
    return r
}
//2.Write a function called factorialOfN that takes a whole number as a parameter and returns the factorial of that number
function factorialofn(n){
    let r=1
    let i=0
    while(i<=n){
        r=r*i
        i++
    }
    return r

}
function fact(n){
    let r=1
    for(let i=1;i<=n;i++){
        r=r*i
    }
    return r

}
//ex3 while


//ex 4 "while"
function countMinMax(min,max){
    let i=0
    while(min <max){
        i++
        min++
    }
    return min
}
//for
function countMinMax(min,max){
    let r=0
    for(i=min;i<=min;i++){
        r=r+1
    }
    return r
}
//ex5 for 
function sum(min,max){
    let s=0
    for(let i=min ;i<max;i++){
        s=s+i
    }
    return s
}
//ex5 while
function sum(min,max){
    let r=0
    let i=min
    while(i<max){
        r=r+i
    }

}
//ex6 for
function prod(min,max){
    let s=1
    for(let i=min ;i<max;i++){
        s=s*i
    }
    return s
}
//ex6 while
function prod(min,max){
    let r=1
    let i=min
    while(i<max){
        r=r*i
    }
    return r

}
//ex7 while
/*function multi(num,a){
    let i=1
    whihle(i<=a){
        num=num*10
        i++
    }
    return num
}*/
//ex7 for
function multi(num,a){
    for(let i=1;i<=a;i++){
        num=num*10
    }
    return num
}
//ex8  while
//ex1for
function countstring(a,ind,b){
    let i=0
    let count
}
/*function inverse(string){
    let string=""
    for(let i=string.length-1; i>=0;i--){
        string+=string[i]
    }
    return string
}*/
// ex1 while 
function countstring(a,ind,b){
    let i=0
    let count
}
function inverse(string){
    let x=""
    let i=string.length-1
    while(i>=0){
        string+=string[i]
    }
    return string
}
// ex 2 for 
function index(str,char){
    for(let i=0; i<str.length; i++){
        if(str[i]===char){
            return i
        }
    }
    return -1

}
// ex2 while 
function index(str,char){
    let i=0
    while(i<str.length){
        if(str[i]===char){
            return i
        }
        i++
    }
    return -1

}
//ex1 for 
function even(a,b){
    if (a%2!==0){
        a++
    }
    let s=0
    for(let i= a;i<b ;i+=2){
        s+=i
    }
    return s
}
// ex1 while
function even(a,b){
    if (a%2!==0){
        a++
    }
    let s=0
    while(i<b){
        s+=i
        i+=2
    }
    return s
}
//8.Write a function called countCharAtIndex that takes three parameters, a string, an index, and another string. This function should use the index to find the corresponding character in the first string and loop through the second string and count how many times that character occurs.
function index(str1,index,str2){
    let count=0
    for(let i=0;i<str2.length;i++){
        if(str2.charAt[i]===str1.charAt[index]){
            count++
        }
    }
    return count 
}
console.log("hello")
