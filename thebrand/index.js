let button = document.querySelector('button')
let button2 = document.getElementById('jay4')
let button3 = document.getElementById('jay3')
let button4 = document.getElementById('jay1')
 
let h1 = document.querySelector('h1')

function readyCart() {
    let myText = prompt('enter your name')
    if (!myText) {
        readyCart()
    }else{
     localStorage.setItem('name','myText')
     h1.textContent ='woohoo!'+ myText +', item added to Your Cart'
    }
}

if (!localStorage.getItem('name')) {
    readyCart()
}else{
    let storedData = localStorage.getItem('name')
    // h1.textContent = 'woohoo!'+ storedData + 'item added to Your Cart'
}

button.onclick = function () {
    readyCart()
}
button2.onclick = function () {
    readyCart()
}
button3.onclick = function () {
    readyCart()
}
button4.onclick = function () {
    readyCart()
}
let img = document.getElementById('1')
let img2 = document.getElementById('2')
let img3 = document.getElementById('3')
let img4 = document.getElementById('4')


img.onclick = function () {
    let src = img.getAttribute('src','images/Screenshot_20181201-133039.png')
    if (src==='images/Screenshot_20181201-133039.png') {
        img.setAttribute('src','images/Screenshot_20181201-133101.png')
    } else {
        img.setAttribute('src','images/Screenshot_20181201-133039.png')
    }
}
img2.onclick = function () {
    let src2 = img2.getAttribute('src','images/Screenshot_20181201-133050.png')
    if (src2==='images/Screenshot_20181201-133050.png') {
        img2.setAttribute('src','images/Screenshot_20181201-133116.png')
    } else {
        img2.setAttribute('src','images/Screenshot_20181201-133050.png')
    }
}
img3.onclick = function () {
    let src3 = img3.getAttribute('src','images/Screenshot_20181201-133055.png')
    if (src3==='images/Screenshot_20181201-133055.png') {
        img3.setAttribute('src','images/Screenshot_20181201-133126.png')
    } else {
        img3.setAttribute('src','images/Screenshot_20181201-133055.png')
    }
}
img4.onclick = function () {
    let src4 = img4.getAttribute('src','images/Screenshot_20181201-133107.png')
    if (src4==='images/Screenshot_20181201-133107.png') {
        img4.setAttribute('src','images/Screenshot_20181201-133131.png')
    } else {
        img4.setAttribute('src','images/Screenshot_20181201-133107.png')
    }
}