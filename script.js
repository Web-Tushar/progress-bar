let bar = document.querySelector(".bar")
let round = document.querySelector(".round")
let span = document.querySelector(".round span")

function handleScroll(){
     const scrollY = window.scrollY
     const windowHeight = window.innerHeight

     const documentheight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
     )
     const scrollParcentage = (scrollY / (documentheight - windowHeight)) * 100   
     const finalvalue = scrollParcentage.toFixed(2)
     console.log(finalvalue);
     bar.style.width = `${finalvalue}%`
     span.innerHTML = finalvalue;
}
handleScroll()
window.addEventListener("scroll",handleScroll)