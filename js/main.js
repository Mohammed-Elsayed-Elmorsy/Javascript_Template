let images = ["url(../images/9.jpg)", "url(../images/10.jpg)", "url(../images/8.jpg)", "url(../images/13.jpg)", "url(../images/5.jpg)"]
let images2 = ["../images/9.jpg", "../images/10.jpg", "../images/8.jpg", "../images/13.jpg", "../images/5.jpg"]
let land = document.querySelector(".land")
let divImg = document.querySelector(".images")

let mo
for (let i = 0; i < images2.length; i++) {
    divImg.innerHTML += `<img src= ${images2[i]}>`
}



let changeImg = localStorage.getItem("backimg")

if (changeImg !== null) {
    land.style.backgroundImage = changeImg

    document.querySelectorAll(".images img").forEach(img => {
        if ('url(' + img.src + ')' == changeImg) {
            img.classList.add("active")
        }

    })
}

document.querySelectorAll(".images img").forEach(img => {
    img.addEventListener("click", (e) => {
        land.style.backgroundImage = 'url(' + e.target.src + ')'
        document.querySelectorAll(".images img").forEach(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")

        localStorage.setItem("backimg", 'url(' + e.target.src + ')')
        clearInterval(mo)
        document.querySelectorAll(".ran-back div span").forEach(item => {
            item.classList.remove("active")
        })

    })
})

function randomise() {
    mo = setInterval(function () {
        let random = Math.trunc(Math.random() * images.length)
        land.style.backgroundImage = images[random]
    }, 1500)

}

// randomise()



document.querySelector(".settings .cog-container").addEventListener("click", () => {
    document.querySelector(".fa-cog").classList.toggle("fa-spin")
    document.querySelector(".settings").classList.toggle("show")
})


document.querySelectorAll(".settings-box ul li").forEach(li => {
    li.addEventListener("click", (e) => {
        document.querySelectorAll(".settings-box ul li").forEach(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        localStorage.setItem("colorback", e.target.dataset.color)
    })
})

let local = localStorage.getItem("colorback")
if (local !== null) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("colorback"))

    document.querySelectorAll(".settings-box ul li").forEach(li => {
        li.classList.remove("active")
        if (li.dataset.color == localStorage.getItem("colorback")) {
            li.classList.add("active")
        }
    })
}

window.onload = function () {
    if (localStorage.getItem("back") == "no") {
        clearInterval(mo)
        document.querySelector(".no").classList.add("active")
    } else {
        randomise()
        document.querySelector(".yes").classList.add("active")
    }
    if (localStorage.getItem('use_bullet')) {
        if (localStorage.getItem('use_bullet') === 'no') {
            document.querySelector('.bullets').style.display = 'none'
            document.querySelector('.bullet_use span.no').classList.add('active')
            document.querySelector('.bullet_use span.yes').classList.remove('active')
        } else {
            document.querySelector('.bullets').style.display = 'block'
        }
    }
}


document.querySelectorAll(".ran-back div span").forEach(sapn => {
    sapn.addEventListener("click", (e) => {
        document.querySelectorAll(".ran-back div span").forEach(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
        if (e.target.dataset.what == "no") {
            clearInterval(mo)
            localStorage.setItem("back", e.target.dataset.what)
        } else {
            randomise()
            localStorage.setItem("back", e.target.dataset.what)
        }
    })
})




///////////////////skills//////
let skills = document.querySelector(".skills")
window.onscroll = function () {

    let skillsOffsetTop = skills.offsetTop

    let skillsHeight = skills.offsetHeight

    let windowHeight = this.innerHeight

    let windowScroll = this.pageYOffset

    if (windowScroll > (skillsHeight + skillsOffsetTop - windowHeight)) {

        document.querySelectorAll(".progress span").forEach(span => {
            span.style.width = span.dataset.progress
        })

    }

}

////gallery//////

document.querySelectorAll("#gallery img").forEach(img => {
    img.addEventListener("click", (e) => {
        let newDiv = document.createElement("div")
        newDiv.className = "newdiv"
        let close = document.createElement("span")
        close.appendChild(document.createTextNode("X"))
        close.className = "close"
        let Image = document.createElement("img")
        Image.src = img.src

        newDiv.appendChild(close)
        newDiv.appendChild(Image)

        document.getElementById("gallery").appendChild(newDiv)

        document.querySelector(".overlay").classList.add("show")

    })
})


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
        e.target.parentElement.remove()
        document.querySelector(".overlay").classList.remove("show")
    }
})


// 

document.querySelectorAll('.bullets .bullet').forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

document.querySelector(".icon").addEventListener("click", () => {
    {
        document.querySelector('header nav').classList.toggle('show')
        document.querySelector('.icon').classList.toggle('show')
    }
})



// bullets use  

console.log(document.querySelectorAll(' .bullet_use span'))
document.querySelectorAll('.bullet_use span').forEach(span => {
    span.addEventListener('click', (e) => {
        document.querySelectorAll('.bullet_use span').forEach(span => {
            span.classList.remove('active')
        })
        e.target.classList.add('active')
        if (e.target.classList.contains('no')) {
            document.querySelector('.bullets').style.display = 'none'
            localStorage.setItem('use_bullet', e.target.dataset.use)
        } else {
            document.querySelector('.bullets').style.display = 'block'
            localStorage.setItem('use_bullet', e.target.dataset.use)
        }
    })
})