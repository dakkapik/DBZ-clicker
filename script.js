const renderGameBaseBorders = (borderWidth) => {
    const body = document.getElementById("body")
    
    const game = document.createElement("div")
    game.style.height = "100vh"
    game.style.margin = 0
    
    const margin = document.createElement("div")
    if(borderWidth){
        margin.style.borderStyle = "solid"
        margin.style.borderWidth = `${borderWidth}px`
    }
    
    game.append(margin)
    body.append(game)

    if(borderWidth){
        margin.style.height = `${game.clientHeight - (borderWidth*2)}px`
    }

    return {game, margin}
}

const {game, margin} = renderGameBaseBorders(20)

game.style.backgroundImage = "url('./images/dbz2.jpg')"
game.style.backgroundSize = "cover"

margin.style.display = "flex"
margin.style.flexDirection = "column"
margin.style.justifyContent = "space-between"
margin.style.alignItems = "center"

const topUI = document.createElement("div")
topUI.style.display = "flex"
topUI.style.backgroundColor = "red"
topUI.innerHTML = "TOP UI"

const ball = document.createElement("img")
ball.src = "./images/dragonball.png"
ball.height = 50
ball.width = 50


const bottomUI = document.createElement("div")
bottomUI.style.display = "flex"
bottomUI.innerHTML = "BOTTOM UI"
bottomUI.style.backgroundColor = "red"

margin.append(topUI)
margin.append(ball)
margin.append(bottomUI)
