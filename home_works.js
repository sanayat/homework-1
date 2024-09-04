const gmailInput =document.querySelector('#gmail_input')
const gmailButton =document.querySelector('#gmail_button')
const gmailSpan =document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = "OK"
        gmailSpan.style.color = "green"
    }else {
        gmailSpan.innerHTML = "NOT OK"
        gmailSpan.style.color = "red"
    }

}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < 449){
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()