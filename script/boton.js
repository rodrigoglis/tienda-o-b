
addEventListener("DOMContentLoaded",()=> {


    const btn_menu =document.querySelector(".btn")

    if (btn_menu) {
        

        btn_menu.addEventListener("click",() =>{

            btn_iten = document.querySelector("nav")

            btn_iten.classList.toggle("windows")


        })
    }





})