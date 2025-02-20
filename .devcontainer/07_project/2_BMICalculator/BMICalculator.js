const form=document.querySelector('form')

//** this give us empty value 
// const height=parseInt(document.querySelector('#height').value)
// const weight=parseInt(document.querySelector('#weight').value)

//**form alwasy submit with post type or get type adn when submit its value go to the url or server so we have to stop it 
form.addEventListener('submit',function(e){
    e.preventDefault() // here we stop 

    //**note this down variable we can decalre othe side of eventlistener but if we declater is then whene ever the page load it taks the empty value and we need that when the user enter on submit then we get the value so we decalre it insed the evenlistener
    const height=parseInt(document.querySelector('#height').value) // here we parse into int because we get the value in string
    const weight=parseInt(document.querySelector('#weight').value) // here we parse into int because we get the value in string
    const result=document.querySelector('#results')
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`Pleas give a valid height ${height}`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`Pleas give a valid weight ${weight}`
    }
    else{
        const BMI=(weight/((height*height)/10000)).toFixed(2)
        let category;
        if(BMI<=18.6){
            category="Under weight"
        }
        else if(18.6<BMI && BMI<=24.9){
            category="Normal Range"
        }
        else{
            category="Overweight"
        }
        //show result
        result.innerHTML=`<span>${BMI} you are ${category}</span>`
    }
    
    
})