



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

// const runCode = () => {
//     getRandomNumberAfterDelay((result) => console.log(result))
// }

// const getRandomNumberAfterDelay = (callback) => {
//     setTimeout(() => {
//         let randomNumber = Math.floor(Math.random() * 100)
//         callback(randomNumber)
//     }, 5000);

// }

////////////////////////////////
// ------- ex9------------

// const runCode = () => {
//     setTimeout(() => {
//         getRandomNumberAfterDelay( (result) => console.log(result), 100)
//     }, 5000);
// }

// const getRandomNumberAfterDelay =(callback, limit) => {
//   let randomNumber = Math.floor(Math.random () * limit)
//   callback (randomNumber)
// }

//////////////////////////////////
// --------- ex 10 -----------

// const runCode = () => {
//     setTimeout(() => {
//         getRandomNumberAfterDelay( (result) => console.log(result), 0,100)
//     }, 5000);
// }

// const getRandomNumberAfterDelay = (callback, first, last) => {
//  let randomNumber = Math.floor(Math.random() * (last- first)+first) 
//  callback(randomNumber)
// }

////////////////////////////////////
// --------- ex 11 -----------

// const runCode = () => {
//     setTimeout(() => {
//         getRandomNumberAfterDelay((result) => console.log(result), 10, 99)
//     }, 5000);
// }

// const getRandomNumberAfterDelay = (callback, first, last) => {
//     let randomNumber = Math.floor(Math.random() * (last - first) + first)

//     if (randomNumber % 2 === 0) {
//         callback(randomNumber)
//     } else {
//         console.log("error")
//     }
// }

////////////////////////////////////
// ----------- ex12 -----------

// const runCode = () => {
//     setTimeout(() => {
//         getUserFromServer((result) => console.log(result))
//     }, 4000);

// }

// const getUserFromServer = (callback) => {

//     const user = {
//         firstName: "Moshe",
//         lastName: "Ufnik"
//     }

//     return callback(user)

// }

/////////////////////////////////////////
// ---------- ex 13 ----------

// const runCode = () => {
//     setTimeout(() => {
//         getGradesFromServer((result) => console.log(result))
//     }, 7000);

// }

// const getGradesFromServer = (callback) => {

//     const grades = [100, 98, 75, 80, 100, 87]
//     for (let i = 0; i < grades.length; i++) {
//         return callback(grades)
//     }
// }

//////////////////////////////////////
// ----------- ex 14 ---------------

// let spanElement = document.getElementById('span-id')
// let isRandom = true
// let intervalId = 0

// const runCode = () => {

//     setInterval(displayClock, 1000);

//     intervalId = setInterval(() => {

//         if (isRandom) {
//             spanElement.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16)

//         }

//     }, 1000);
// }

// const displayClock = () => {
//     let now = new Date()
//     let time = now.toLocaleTimeString()
//     console.log(time)

//     spanElement.innerText = time
// }

