var maxTop = window.innerHeight
var maxLeft = window.innerWidth

stars()
setInterval(function(){
    if (Math.random() < 0.1)
        shootingStar("shootingStar")
}, 3000)

async function shootingStar(id) {
    document.getElementById(id).style.top = 0 + "px"
    document.getElementById(id).style.left = Math.floor( Math.random() * maxLeft )/2 + "px"

    document.getElementById(id).style.visibility = "visible"

    while (parseInt(document.getElementById(id).style.top.valueOf()) < maxTop) {
        document.getElementById(id).style.top = (parseInt(document.getElementById(id).style.top.valueOf()) + 5) + "px"
        document.getElementById(id).style.left = (parseInt(document.getElementById(id).style.left.valueOf()) + 5) + "px"
        await sleep(10)
    }

    document.getElementById(id).style.visibility = "hidden"
}

async function stars() {
    await sleep(1000)

    while (true) {
        if (Math.random() < 0.1) {
            var star = document.createElement("h6")
            star.innerText = "★"
            star.style.top = Math.floor( Math.random() * maxTop ) + "px"
            star.style.left = Math.floor( Math.random() * maxLeft ) + "px"
            star.className = "star shimmer"
            document.getElementById("stars").appendChild(star)
        }
        await sleep(100)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}