function maxEtMin (string){
   var numbers = string.split(" ")
    var max = Math.max(...numbers);// ... = destructuring
    var min = Math.min(...numbers);
    console.log(max, min);
  return max +" " +min;
}
if (maxEtMin ("1 2 3 4 5")=="5 1"){
    console.log("green");
}
else{
    console.log("red");
}
if (maxEtMin ("1 2 -3 4 5")=="5 -3"){
    console.log("green");
}
else{
    console.log("red");
}
if (maxEtMin ("1 9 3 4 -5")=="9 -5"){
    console.log("green");
}
else{
    console.log("red");
}
