let mainLeft = document.querySelector(".main-left");

mainLeft.addEventListener("mouseenter",()=>{
      mainLeft.style.overflowY = "scroll"
})
mainLeft.addEventListener("mouseleave",()=>{
      mainLeft.style.overflowY = "hidden"
})



let togglee = document.querySelector(".toggled")
let indicator = document.querySelector(".indicator")
let bodyy = document.querySelector("body")
let profileMenu = document.querySelector(".profile-menu")
let profileMenuItem = document.querySelector(".profile-menu-item")
let tiktokLogo = document.querySelector(".tiktok-logo")
let uploadVideo = document.querySelector(".upload-video")
let icon1 = document.querySelector(".icon1")
let icon2 = document.querySelector(".icon2")
let icon3 = document.querySelector(".icon3")
let icon4 = document.querySelector(".icon4")
let icon5 = document.querySelector(".icon5")
let icon6 = document.querySelector(".icon6")
let icon7 = document.querySelector(".icon7")
let icon8 = document.querySelector(".icon8")
let icon9 = document.querySelector(".icon9")
let icon10 = document.querySelector(".icon10")
let headerLeft = document.querySelector(".header-left")






indicator.addEventListener("click",darkMode);


function darkMode(){
      indicator.classList.toggle("indicator-js")
      bodyy.classList.toggle("body-js")
      profileMenu.classList.toggle("profile-menu-js")
      profileMenuItem.classList.toggle("profile-menu-item-js")
      
     
      uploadVideo.classList.toggle("upload-video-js")
      icon1.classList.toggle("icon1-js")
      icon2.classList.toggle("icon2-js")
      icon3.classList.toggle("icon3-js")
      icon4.classList.toggle("icon4-js")
      icon5.classList.toggle("icon5-js")
      icon6.classList.toggle("icon6-js")
      icon7.classList.toggle("icon7-js")
      icon8.classList.toggle("icon8-js")
      icon9.classList.toggle("icon9-js")
      icon10.classList.toggle("icon10-js")

     
      
      
      
}
let profileImage = document.querySelector(".profile-image")
profileImage.addEventListener("click",opacityChange)

function opacityChange(){
      profileMenu.classList.toggle("profile-menu-height")
}

    












