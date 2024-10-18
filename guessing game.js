let random = Math.floor(Math.random()*10) 
console.log(random)
function checkNum(){
    let num = document.getElementById("num").value
    let result = document.getElementById("result")
    console.log(num)
    if(num ==random){
        result.textContent = 'you guessed the number correctly'
        console.log('you guessed the number correctly')
    } else if(random<num){
        result.textContent = 'the number you entered is less than the correct number' 
        console.log('the number you entered is less than the correct number')
    } else{
        result.textContent = 'the number you entered is not correct'
        console.log('the number you entered is not correct')
    }
}
