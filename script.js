//function 1
//creating a function that accepts only 2 parameters and throw exception if 
//number of parameters eithers less than or exceeds 2 parameters.
function checkNumOfParam(){
if(arguments.length<2 || arguments.length>2){
    throw "Error -> invalid number of arguments!";
}
return true;
}

console.log(checkNumOfParam(2,3));


//function 2
//creating a function that can add n values ensures that all passing parameters
// are numerical values only.
function checkAndSum(){
    var sum=0;

for(var i=0;i<arguments.length;i++){
    if(isNaN(arguments[i])){
        throw "Error -> inappropriate datatype :(";
        }
    }
    for(var j=0;j<arguments.length;j++){
        sum+=arguments[j];
    }
    return sum;
}


console.log(checkAndSum(2,6,3,4));

//function 3
//creatinga function that takes any number of parameters and returns them reversed using
//array's reverse function. 
function reverseArr(...arr){
arr.reverse();
}

console.log(reverseArr(2,3,4,5,8));

//point 4
//swap the values of 2 variables using destructuring.
var [x,y]=[2,3];
[y,x]=[x,y];

console.log(x,y);

//function 5
//returning max and min value from any array using rest parameter and spread operator
//and display each of them separately after function call
//noting that array length isn't fixed.
function max(...arr){
var max=arr[0];
for(var i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
return max;
}

function min(...arr){
    var min=arr[0];
    for(var i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
    }


console.log(max(2,8,1,4));
console.log(min(2,8,1,4));

//function 6
function f1(x,y){
    if(x>3){
        var z=3;
    }else{
        var zz=3;
    }
    console.log(z,zz);  //undefined 3
    zzz=300;
}

f1(1,3);
alert(zzz); //alert with 300


