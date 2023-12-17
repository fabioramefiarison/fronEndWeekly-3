const Get = (id) =>{
    return document.getElementById(id)
}

let HeroShape = Get("Hero-Shape")
let HeroShape2 = Get("Hero-Shape-2")

window.onscroll = () =>{
    if (window.scrollY > 0){
        HeroShape.classList.add("heroShapeScroll")
        HeroShape2.classList.add("heroShapeScroll-2")
    }
    if (window.scrollY > 50){
        let container2 = Get("container-2")
        container2.classList.add("container-2-anim")
    }
    if (window.scrollY > 7200){
        let imageHome = Get("image-home")
        imageHome.classList.add("heroShapeScroll-2")
    }
        if (window.scrollY > 6900){
        let imagePlay = Get("image-play")
        imagePlay.classList.add("heroShapeScroll")
    }
    if (window.scrollY > 3600){
        let RECENTEPISODEsanim = Get("RECENT-EPISODEs-anim")
        RECENTEPISODEsanim.classList.add("container-2-anim")
    }
    console.log(window.scrollY);
}

const faBars = Get("fa-bars")
 faBars.addEventListener("click", () =>{
    const myUlheader = Get("myUl-header")
    const myHeader = Get("header")
    console.log(myUlheader);
    myUlheader.classList.toggle("myUl-header-resp")
    myHeader.classList.toggle("headerDisplay")
 })

    const scrollprevnext = Get("scroll-prev-next")
    let faangleleft = Get("fa-angle-left")
    let faangleRight = Get("fa-angle-right")

    let scrollX = 0
    window.onload = () => {
        faangleRight.onmousedown = () =>{
            scrollX += 10
            scrollprevnext.scrollLeft = scrollX
         }
     
         faangleleft.onmousedown = () =>{
             scrollX -= 10
             scrollprevnext.scrollLeft = scrollX    
          }
         
    }
