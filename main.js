var last_position_of_x,last_position_of_y;
color="black";
widthofline=
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
canvas.addEventListener("touch",my_touch)

function my_touch(e){
    color=document.getElementById("color").value 
    widthofline=document.getElementById("widthofline").value
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove",mytouchmove)

function mytouchmove(e){
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.linewidth=widthofline
    ctx.moveTo(last_position_of_x,last_position_of_y)
    ctx.lineTo(current_position_of_x,current_position_of_y)
    ctx.stroke()
    last_position_of_x=current_position_of_x
    last_position_of_y=current_position_of_y
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}