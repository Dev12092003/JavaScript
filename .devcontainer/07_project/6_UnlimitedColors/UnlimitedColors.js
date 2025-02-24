//generat a randoom color

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

 console.log(randomColor())
let bg=document.body // this setle the full background of the screen 
let intervalid // htis we declar out of the function becaus we need this to stop the inrval oin other function 
const startChangingColor=function(){
    if(!intervalid){
        intervalid=setInterval(changbg,100)
    }
    function changbg(){
        bg.style.backgroundColor=randomColor()
    }
}
const stopChangingColor=function(){
    clearInterval(intervalid)
    intervalid=null; // this is good practice to writ clean code
}

 const startbtn=document.querySelector('#start')
 startbtn.addEventListener('click',startChangingColor)

 const stopbtn=document.querySelector('#stop')
 stopbtn.addEventListener('click',stopChangingColor)
