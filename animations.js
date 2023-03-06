export function sceneTransition(target, create = true) {

    if (create){
        let body = document.querySelector('body')
        body.innerHTML = '<div id="blackScreen"></div>' + body.innerHTML
    }
    let blackScreen = document.querySelector('#blackScreen')
    blackScreen.style.display = 'block'
    blackScreen.style.position = 'absolute'
    blackScreen.style.background = 'rgba(0, 0, 0, 0)'
    blackScreen.style.height = '190vh'
    blackScreen.style.width = '100vw'
    blackScreen.style.zIndex = '11'
    blackScreen.style.left = '0px'
    blackScreen.style.top = '0px'
    blackScreen.style.setProperty('transition', '1s')
    let i = 0.0
    const myInterval = setInterval(function(){
        i += 0.1
        document.querySelector('#blackScreen').style.background = `rgba(0, 0, 0, ${i})`
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