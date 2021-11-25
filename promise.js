

///////////////////////////////
// ----------- ex 1 ----------

const runCode = () => {
    let minNumber = +prompt ('please enter min number')
    let maxNumber = +prompt('please enter max number')

    let myPromise = generate7BoomAfterDelayAsync(minNumber,maxNumber)
    setTimeout(() => {
        myPromise
            .then((number) => console.log('success boom: ' + number))
            .catch((number) => console.log('error boom: ' + number))
    }, 1000)}

    const generate7BoomAfterDelayAsync = (min, max) => {

        const myPromise = new Promise((resolve, reject) => {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

            if (randomNumber % 7 === 0 || randomNumber % 10 === 7) {
                resolve(randomNumber)
            } else {
                reject(randomNumber)
            }

        })
        return myPromise
    }

// const runCode = () => {

// }

// const generatePrimeNumberAfterDelayAsync =() => {

// }