let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let btn = document.getElementById("btn");
let data = document.getElementById("data");

btn.onclick = function () {
    makeAbba(text1.value, text2.value);
    text1.value = "";
    text2.value = "";
}

function makeAbba(a, b) {
    return data.innerHTML = a + b + b + a
}





let name = document.getElementById("name");
let btn2 = document.getElementById("btn2");
let data2 = document.getElementById("data2");
btn2.onclick = function () {
    helloName(name.value);
    name.value = "";
}
function helloName(name){
    return data2.innerHTML = "Hello " + name + "!"
  }








let tag1 = document.getElementById("tag1");
let tag2 = document.getElementById("tag2");
let btn3 = document.getElementById("btn3");
let data3 = document.getElementById("data3");
btn3.onclick = function () {
    makeTags(tag1.value, tag2.value);
    tag1.value = "";
    tag2.value = "";
}
function makeTags(tag, word){
    return data3.innerHTML = `<${tag}>${word}</${tag}>`;
  }











let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btn4 = document.getElementById("btn4");
let data4 = document.getElementById("data4");
btn4.onclick = function () {
  makeOutWord(num1.value, num2.value);
  num1.value = "";
  num2.value = "";
}
function makeOutWord(out, word){
  return  data4.innerHTML = out.slice(0,2)+ word + out.slice(2,4)
}








let extra1 = document.getElementById("extra1");
let btn5 = document.getElementById("btn5");
let data5 = document.getElementById("data5");
btn5.onclick = function () {
  extraEnd(extra1.value);
  extra1.value = "";
}
function extraEnd(str){
    return data5.innerHTML = str.slice(-2).repeat(3)
  }









let num3 = document.getElementById("num3");
let btn6 = document.getElementById("btn6");
let data6 = document.getElementById("data6");
btn6.onclick = function () {
  extraEnd(num3.value);
  num3.value = "";
}
function extraEnd(str){
    return data6.innerHTML = str.slice(-2).repeat(3)
}








let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let btn7 = document.getElementById("btn7");
let data7 = document.getElementById("data7");
btn7.onclick = function () {
    comboString(num4.value, num5.value);
    num4.value = "";
    num5.value = "";
}
function comboString(a, b){
    return data7.innerHTML = a.length < b.length ? a + b + a : b + a + b;
}







let non1 = document.getElementById("non1");
let non2 = document.getElementById("non2");
let btn8 = document.getElementById("btn8");
let data8 = document.getElementById("data8");
btn8.onclick = function () {
    nonStart(non1.value, non2.value);
    non1.value = "";
    non2.value = "";
}
function nonStart(a, b){
  return data8.innerHTML = a.slice(1) + b.slice(1);
}






let left1 = document.getElementById("left1");
let btn9 = document.getElementById("btn9");
let data9 = document.getElementById("data9");

btn9.onclick = function () {
  left2(left1.value);
  left1.value = "";
}
function left2(str){
  return data9.innerHTML = str.slice(2) + str.slice(0, 2);
}









let right1 = document.getElementById("right1");
let btn10 = document.getElementById("btn10");
let data10 = document.getElementById("data10");

btn10.onclick = function () {
  right2(right1.value);
  right1.value = "";
}

function right2(str){
  return data10.innerHTML = str.slice(-2) + str.slice(0, -2);
}







let end1 = document.getElementById("end1");
let btn11 = document.getElementById("btn11");
let data11 = document.getElementById("data11");

btn11.onclick = function () {
  theEnd(end1.value);
  end1.value = "";
}

function theEnd(str, front){
  return data11.innerHTML = str.slice(-3) + str.slice(0, -3);
}







let withoutEnd1 = document.getElementById("withoutEnd1");
let btn12 = document.getElementById("btn12");
let data12 = document.getElementById("data12");

btn12.onclick = function () {  
  withoutEnd(withoutEnd1.value);
  withoutEnd1.value = "";
}

function withoutEnd2(str){
  return data12.innerHTML = str.slice(2, -2);
}







let ends1 = document.getElementById("ends1");
let btn13 = document.getElementById("btn13");
let data13 = document.getElementById("data13");

btn13.onclick = function () {
  endsLy(ends1.value);
  ends1.value = "";
}

function endsLy(str){
  return data13.innerHTML = str.slice(-2) === "ly";
}







let twoChar1 = document.getElementById("twoChar1");
let twoChar2 = document.getElementById("twoChar2");
let btn14 = document.getElementById("btn14");
let data14 = document.getElementById("data14");

btn14.onclick = function () {
  twoChar(twoChar1.value, twoChar2.value);
  twoChar1.value = "";
  twoChar2.value = "";
}

function twoChar(str, index){
  if (index < 0 || index + 1 >= str.length) {
   return str.slice(0, 2); 
 }
 return data14.innerHTML = str.slice(index, index + 2);
}










let middle1 = document.getElementById("middle1");
let btn15 = document.getElementById("btn15");
let data15 = document.getElementById("data15");

btn15.onclick = function () {
  middleThree(middle1.value);
  middle1.value = "";
}

function middleThree(str){
  const middle = Math.floor(str.length / 2);
return data15.innerHTML = str.slice(middle - 1, middle + 2);
}









let hasBad1 = document.getElementById("hasBad1");
let btn16 = document.getElementById("btn16");
let data16 = document.getElementById("data16");

btn16.onclick = function () {
  hasBad(hasBad1.value);
  hasBad1.value = "";
}

function hasBad(str){
  return data16.innerHTML = str.slice(0, 3) === "bad" || str.slice(1, 4) === "bad";
}









let atFirst1 = document.getElementById("atFirst1");
let btn17 = document.getElementById("btn17");
let data17 = document.getElementById("data17");

btn17.onclick = function () {
  atFirst(atFirst1.value);
  atFirst1.value = "";
}

function atFirst(str){
  if (str.length < 2) {
   return str + "@".repeat(2 - str.length);
 } 
 return data17.innerHTML = str.slice(0, 2);
}







let lastChars1 = document.getElementById("lastChars1");
let lastChars2 = document.getElementById("lastChars2");
let btn18 = document.getElementById("btn18");
let data18 = document.getElementById("data18");

btn18.onclick = function () {
  lastChars(lastChars1.value, lastChars2.value);
  lastChars1.value = "";
  lastChars2.value = "";
}

function lastChars(a, b){
  const firstA = a.length > 0 ? a[0] : '@'; 
  const lastB = b.length > 0 ? b[b.length - 1] : '@';
  return data18.innerHTML = firstA + lastB;
}
















let input19 = document.getElementById("firstLast6");
let btn19 = document.getElementById("btn19");
let data19 = document.getElementById("data19");

btn19.onclick = function () {
  let nums = input19.value.split(",").map(Number); 
  data19.innerHTML = firstLast6(nums); 
  input19.value = "";
}

function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}








let sameFirstLast1 = document.getElementById("sameFirstLast1");
let btn20 = document.getElementById("btn20");
let data20 = document.getElementById("data20");

btn20.onclick = function () {
  let nums = sameFirstLast1.value.split(",").map(Number); 
  data20.innerHTML = sameFirstLast(nums); 
  sameFirstLast1.value = "";
}

function sameFirstLast(nums){
  if (nums.length >= 1 && nums[0] === nums[nums.length - 1]) {
    return data20.innerHTML = true;
} else {
    return data20.innerHTML = false;
}
}




let btn21 = document.getElementById("btn21");
let data21 = document.getElementById("data21");

btn21.onclick = function () {
  data21.innerHTML = makePi();
}

function makePi(){
  return data21.innerHTML = [3, 1, 4];
}



let commonEnd1 = document.getElementById("commonEnd1");
let commonEnd2 = document.getElementById("commonEnd2");
let btn22 = document.getElementById("btn22");
let data22 = document.getElementById("data22");

btn22.onclick = function () {
  data22.innerHTML = commonEnd(commonEnd1.value, commonEnd2.value);
  commonEnd1.value = "";
  commonEnd2.value = "";
}

function commonEnd(a, b){
  if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
       return data22.innerHTML = true;
   } else {
       return data22.innerHTML = false;
   }
}






let nums3 = document.getElementById("sum3");
let btn23 = document.getElementById("btn23");
let data23 = document.getElementById("data23");

btn23.onclick = function () {
  let nums = nums3.value.split(",").map(Number); 
  data23.innerHTML = sum3(nums); 
  nums3.value = "";
}

function sum3(nums){
  return data23.innerHTML = nums[0] + nums[1] + nums[2];
}






let rotateNums = document.getElementById("rotateLeft1");
let btn24 = document.getElementById("btn24");
let data24 = document.getElementById("data24");

btn24.onclick = function () {
  let nums = rotateNums.value.split(",").map(Number); 
  data24.innerHTML = rotateLeft3(nums); 
  rotateNums.value = "";
}

function rotateLeft3(nums){
  return data24.innerHTML = [nums[1], nums[2], nums[0]];
}






let reverse3A = document.getElementById("reverse3");
let btn25 = document.getElementById("btn25");
let data25 = document.getElementById("data25");

btn25.onclick = function () {
  let nums = reverse3A.value.split(",").map(Number); 
  data25.innerHTML = reverse3(nums); 
  reverse3A.value = "";
}

function reverse3(nums){
  return [nums[2], nums[1], nums[0]];
}






let maxEndNum = document.getElementById("maxEnd");
let btn26 = document.getElementById("btn26");
let data26 = document.getElementById("data26");

btn26.onclick = function () {
  let nums = maxEndNum.value.split(",").map(Number); 
  data26.innerHTML = maxEnd3(nums); 
  maxEndNum.value = "";
}

function maxEnd3(nums){
  let max;
    if (nums[0] > nums[2]) {
        max = nums[0];
    } else {
        max = nums[2];
    }
    return data26.innerHTML = [max, max, max];
}






let sum2Num = document.getElementById("sum2");
let btn27 = document.getElementById("btn27");
let data27 = document.getElementById("data27");

btn27.onclick = function () {    
  let nums = sum2Num.value.split(",").map(Number); 
  data27.innerHTML = sum2(nums); 
  sum2Num.value = "";
}

function sum2(nums){
  if (nums.length === 0) {
       return 0;
   } else if (nums.length === 1) {
       return nums[0];
   } else {
       return nums[0] + nums[1];
   }
}

