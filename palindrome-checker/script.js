const but = document.querySelector("#button")
const clr = document.getElementById("clr")
function palindrome(str) {
    
   str = document.querySelector("input").value;
    console.log(str)
    const p = document.querySelector("p")

    const regexp = /[a-zA-Z0-9]/g;
    const string = str.match(regexp).join("").toLowerCase();
    let reverse = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reverse.push(string[i]);
    }
    if (reverse.join("") === string) {
        p.innerHTML = "Palindrom";
    } else { p.innerHTML = "Not A Palindrom" };
    document.querySelector("input").value = "";
}
function remove() {
    document.querySelector("p").innerHTML = ""
}
but.addEventListener("click", () => palindrome())
clr.addEventListener("click", () => { document.querySelector("input").value = "" })
clr.addEventListener("click", () => remove())