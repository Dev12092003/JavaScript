const buttons=document.querySelectorAll('.button')
// console.log(buttons);
const body=document.querySelector("body")

buttons.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click',function(e){ //e is the event object
        console.log(e);
        console.log(e.target);

        //using if 
        // if(e.target.id==='grey'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id==='blue'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id==='white'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id==='yellow'){
        //     body.style.backgroundColor=e.target.id;
        // }
        
        //usinng switch case
        const color=e.target.id;
        switch (color) {
            case "grey":
                body.style.backgroundColor=e.target.id;
                break;
            case "white":
                body.style.backgroundColor=e.target.id;
                break;
            case "blue":
                body.style.backgroundColor=e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor=e.target.id;
                break;
        
            default:
                body.style.backgroundColor='white'
                break;
        }
    })
})