const button = document.getElementById("button");
const clr = document.getElementById("clr")
const ul = document.querySelector("ul");
const input  = document.querySelector("input").value;

function convertToRoman(num) {
    const input  = document.querySelector("input").value;
    num = input
    let li = document.createElement("li");
    let roman = {  "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1  }
    if(!isNaN(num)){
    li.setAttribute('id', num);
    for (let key in roman) {
        while (num >= roman[key]) {
            li.innerHTML  += key;
            num -= roman[key];
            ul.appendChild(li);
        }}
    } 
// document.querySelector("input").value=""
}
 function removeItem(){
 
    // Declaring a variable to get select element
    let a = document.querySelector("ul");
    let candidate = document.querySelector("input");
    let item = document.getElementById(candidate.value)
    a.removeChild(item);
    removeItem(item);
   
}
   button.addEventListener("click",() => convertToRoman());
   clr.addEventListener("click",()=>removeItem())
   clr.addEventListener("click",()=> {document.querySelector("input").value=""})
   