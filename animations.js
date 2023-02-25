export function sceneTransition(target, create = true) {

    if (create){
        let body = document.querySelector('body')
        body.innerHTML = '<div id="black"></div>' + body.innerHTML
    }
    let black = document.querySelector('#black')
    black.style.display = 'block'
    black.style.position = 'absolute'
    black.style.background = 'rgba(0, 0, 0, 0)'
    black.style.height = '101vh'
    black.style.width = '100vw'
    black.style.zIndex = '10'
    black.style.left = '0px'
    black.style.top = '0px'
    black.style.setProperty('transition', '1s')
    let i = 0.0
    const myInterval = setInterval(function(){
        i += 0.1
        document.querySelector('#black').style.background = `rgba(0, 0, 0, ${i})`
        if (i >= 2.5) {
            clearInterval(myInterval)
            document.location.href = target
        }
    }, 50)
}

/* display: none;
            position: absolute;
            background-color: rgba(0, 0, 0, 0);
            height: 101vh;
            z-index: 10;
            width: 100vw;
            left: 0px;
            top: 0px;
            transition: 1s;
            transition-timing-function: ease; 
*/