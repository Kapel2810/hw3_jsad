
let divElement = document.getElementById('main-container')


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

const runCode = () => {
    console.log('start')
    getTime()
    console.log('end')
}

const getTime = () => {
     let now = new Date()
        let currentTime = now.toLocaleTimeString()
    setTimeout(() => {
        console.log(currentTime)
    }, 3000);

}