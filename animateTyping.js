const text = document.querySelector('.second-text')

const textLoad = () => {
    setTimeout(()=>{
        text.textContent = "Front-End!"
    },0)
    setTimeout(()=>{
        text.textContent = "Back-End!"
    },4000)
    setTimeout(()=>{
        text.textContent = "Full-Stack!"
    },8000)
}
textLoad()
setInterval(textLoad,12000)