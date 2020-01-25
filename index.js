const bgBtn =  document.querySelector('button')
const displayColor = document.querySelector('.displayColor')
const colorbox1 = document.querySelector('.colorbox1')
const colorbox2 = document.querySelector('.colorbox2')
const colorbox3 = document.querySelector('.colorbox3')
const getBody = document.querySelector('.getBody')


const changeBgColor = () => {
getBody.style.backgroundImage= "linear-gradient(to right, " + colorbox1.value + ","  
+ colorbox2.value + "," + colorbox3.value + ")"
displayColor.innerHTML = getBody.style.backgroundImage
}

bgBtn.addEventListener('click',changeBgColor)

