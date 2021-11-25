

///////////////////////////////
// ----------- ex 1 ----------

// const runCode = () => {
//     let minNumber = +prompt('please enter min number')
//     let maxNumber = +prompt('please enter max number')

//     let myPromise = generate7BoomAfterDelayAsync(minNumber, maxNumber)
//     setTimeout(() => {
//         myPromise
//             .then((number) => console.log('success boom: ' + number))
//             .catch((number) => console.log('error boom: ' + number))
//     }, 1000)
// }

// const generate7BoomAfterDelayAsync = (min, max) => {

//     const myPromise = new Promise((resolve, reject) => {
//         let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

//         if (randomNumber % 7 === 0 || randomNumber % 10 === 7) {
//             resolve(randomNumber)
//         } else {
//             reject(randomNumber)
//         }

//     })
//     return myPromise
// }

////////////////////////////////
// --------- ex 2 -----------

//doesn't want to show error ???
const runCode = () => {
    alert("please enter two numbers from 1 to 100")
    let minNumber = +prompt("enter first number")
    let maxNumber = +prompt("enter second number")

    let myPromise = generatePrimeNumberAfterDelayAsync(minNumber, maxNumber)

    myPromise
        .then((number) => console.log('succeess prime: ' +number))
        .catch((number) => console.log('error! is not prime:' +number))
}

const generatePrimeNumberAfterDelayAsync = (min, max) => {
    let myPromise = new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        let isRandom = true
            for (let i = 2; i < randomNumber ; i++){
                
                if(randomNumber % i ===0) {
                    isRandom = false
                    break
                }

                if (isRandom === true){
                    resolve(randomNumber)
                } else {
                    reject(randomNumber)
                }
            }
    })
    return myPromise
}