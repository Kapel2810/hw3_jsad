
let divElement = document.getElementById('main-container')


/////////////////////////////
//----- ex1-------

const runCode = () => {
    console.log('start')
    getTime()
    console.log('end')
}

const getTime = ()=> {
    let now = new Date()
    let currentTime = now.toLocaleTimeString()

    console.log(currentTime)
}