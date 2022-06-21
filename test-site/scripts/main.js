let img = document.querySelector('img')

img.onclick = function () {
    let src = img.getAttribute('src','image/SS1.jpg')
    if (src==='image/SS1.jpg') {
        img.setAttribute('src','image/aa.jpg')
    } else {
        img.setAttribute('src','image/SS1.jpg')
    }
}

let heading = document.querySelector('h1')
let button = document.querySelector('button')

function setName() {
    let user = prompt('enter your name')
    localStorage.setItem('name','user')
    heading.textContent = 'welcome,'+user
}

if (!localStorage.getItem('name')) {
    setName()
}
else{
let storedName = localStorage.getItem('name')
heading.textContent = 'welcome,'+storedName
}

button.onclick = function () {
    setName()
}