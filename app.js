



/////////////////////////////
//----- ex1-------

// const runCode = () => {
//     console.log('start')
//     getTime()
//     console.log('end')
// }

// const getTime = ()=> {
//     let now = new Date()
//     let currentTime = now.toLocaleTimeString()

//     console.log(currentTime)
// }

///////////////////////
// -------- ex 2 ----------

// const runCode = () => {
//     console.log('start')
//     getTime()
//     console.log('end')
// }

// const getTime = () => {
//     setTimeout(() => {
//         let now = new Date()
//         let currentTime = now.toLocaleTimeString()
//         console.log(currentTime)
//     }, 3000);

// }

///////////////////////
// --------- ex 3 ----------

// const runCode = () => {
//     console.log('start')
//     getTime()
//     console.log('end')
// }

// const getTime = () => {
//      let now = new Date()
//         let currentTime = now.toLocaleTimeString()
//     setTimeout(() => {
//         console.log(currentTime)
//     }, 3000);

// }

///////////////////////////
//--------- ex4 -------------

// const runCode = () => {
//     console.log('start')
//     setTimeout(getrandomNumber, 3000);
//     setTimeout(getrandomNumber, 5000);
//     setTimeout(getrandomNumber, 7000);
//     console.log('end')
// }

// const getrandomNumber = () => {
//     let randomNumber = Math.floor(Math.random() * 100 + 1)
//     console.log(randomNumber)
// }

//////////////////////////////
// --------- ex 5------

// let inputElement = document.getElementById('number-id')
// let divElement = document.getElementById('main-container')

// const loadCode = () => {
//     setInterval( getRandomNumber, 1000); 
// }

// const getRandomNumber = () => {
//     let randomNumber = Math.floor(Math.random() * inputElement.value)
//     console.log(randomNumber)
//     divElement.innerHTML = randomNumber
// }

///////////////////////////////////
//--------- ex6--------------

// const loadCode = () => {
//     setInterval( getRandomBackgroundColor, 1000); 
// }

// const getRandomBackgroundColor = () => {
//     let x = Math.floor(Math.random() * 256)
//     let y = Math.floor(Math.random() * 256)
//     let z = Math.floor(Math.random() * 256)
//     let backgroundColor = "rgb(" + x + "," + y + "," + z + ")"

//     document.body.style.background = backgroundColor
// }


//////////////////////////////////
// ---------- ex 8 ----------

const runCode = () => {
    getRandomNumberAfterDelay((result) => console.log(result))
}

const getRandomNumberAfterDelay = (callback) => {
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 100)
        callback(randomNumber)
    }, 5000);

}
