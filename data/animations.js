export function sceneTransition(target, create = true) {

    if (create){
        let body = document.querySelector('body')
        body.innerHTML = '<div id="blackScreen"></div>' + body.innerHTML
    }
    let blackScreen = document.querySelector('#blackScreen')
    blackScreen.style.display = 'block'
    blackScreen.style.position = 'absolute'
    blackScreen.style.background = 'rgba(0, 0, 0, 0)'
    blackScreen.style.height = '100vh'
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