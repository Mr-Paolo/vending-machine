let creditAmount = 0
let levelOfSugar = 3


const addCredit = (value) => {
    creditAmount = creditAmount + value

    const outputEl = document.querySelector('.credit-amount')
    outputEl.innerHTML = creditAmount.toFixed(2) + "€"
}

const retrieveCredit = () => {
    creditAmount = 0
    const outputEl = document.querySelector('.credit-amount')
    outputEl.innerHTML = creditAmount.toFixed(2) + "€"
}

const changeLevelSugar = ( value ) => {
    levelOfSugar = value

    const sugarElement = document.querySelector('.sugar-amount')
    sugarElement.innerHTML = levelOfSugar
}

const selectBevarage = ( price, imageName ) => {
    // check if the credit is enough 
    if ( creditAmount > price ){
        // takes out the value of the credit

        addCredit(  price * -1   )
        
        // 
        const imageEl = document.querySelector('img')
        imageEl.setAttribute('src','images/' + imageName)
        imageEl.style.top = '200px'
    }else {
        alert("You are poor")
    }

    // display the image of the bevarage
    
}