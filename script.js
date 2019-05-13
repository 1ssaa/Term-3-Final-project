var document = "calculator";

 "use strict";

 var el = function(element) {
   if (element.charAt(0) === "#") {
     return document.querySelector(element);
   }

   return document.querySelectorAll(element);
 };
 //changed code found from https://medium.freecodecamp.org/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98

 var screenDiv = el("#screen"),
   equals = el("#equals"),
   nums = el(".num"),
   ops = el(".ops"),
   theNum = "",
   oldNum = "",
   resultNum,
   operator;


 var setNum = function() {
   if (resultNum) {
     theNum = this.getAttribute("data-num");
     resultNum = "";
   } else {
     theNum += this.getAttribute("data-num");
   }

   screenDiv.innerHTML = theNum;

 };


 var moveNum = function() {
   oldNum = theNum;
   theNum = "";
   operator = this.getAttribute("data-ops");

   equals.setAttribute("data-result", "");
 };

 var displayNum = function() {


   oldNum = parseFloat(oldNum);
   theNum = parseFloat(theNum);


   switch (operator) {
     case "plus":
       resultNum = oldNum + theNum;
       break;

     case "minus":
       resultNum = oldNum - theNum;
       break;

     case "times":
       resultNum = oldNum * theNum;
       break;

     case "divided by":
       resultNum = oldNum / theNum;
       break;


     default:
       resultNum = theNum;
   }


   if (!isFinite(resultNum)) {
     if (isNaN(resultNum)) {
       resultNum = "Incorrect operation press AC";
     } else {
       resultNum = "oops try again";
       el('#calculator').classList.add("broken");
       el('#reset').classList.add("show");
     }
   }

   screenDiv.innerHTML = resultNum;
   equals.setAttribute("data-result", resultNum);

   oldNum = 0;
   theNum = resultNum;

 };

 var clearAll = function() {
   screenDiv.innerHTML = "0";
   equals.setAttribute("data-result", resultNum);
 };

 for (var i = 0, l = nums.length; i < l; i++) {
   nums[i].onclick = setNum;
 }

 for (var i = 0, l = ops.length; i < l; i++) {
   ops[i].onclick = moveNum;
 }
 // taken from https://www.javatpoint.com/calculator-in-java

 equals.onclick = displayNum;

 el("#clear").onclick = clearAll;

/*
 el("#reset").onclick = function() {
   window.location = window.location;
 };
*/