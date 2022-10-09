const container = document.getElementById("fullScreen")
let isFullScreen = false
let index = 0
const arr = ["#ffffff", "#000000","#ff0000", "#00ff00", "#0000ff"] //storing colours in this variables
document.getElementById("startTest").addEventListener("click", () => {
    container.style.backgroundColor = arr[index++]
    if (container.requestFullscreen) {
        container.requestFullscreen();
        isFullScreen = true
      } else if (container.webkitRequestFullscreen) { /* Safari */
        container.webkitRequestFullscreen();
        isFullScreen = true
      } else if (container.msRequestFullscreen) { /* IE11 */
        container.msRequestFullscreen();
        isFullScreen = true  
     }
})
// look for key down event listener
window.addEventListener("keydown", function(e) {
    
    if(isFullScreen){

        // if right arrow or space is pressed go to next colour and if left arrow is pressed go to previous colour.
        if(e.key === "ArrowRight" || e.key === " "){
          container.style.backgroundColor = arr[index++]
        }else if(e.key === "ArrowLeft"){
          container.style.backgroundColor = arr[index--]
        }
        // if end of array then start from index 0 and if index is less then 0 go back to array length.
        if(index === arr.length){
            index = 0
        } else if(index === 0){
            index = arr.length -1
        }
    }
});