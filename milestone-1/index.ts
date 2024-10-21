//For skills toggle button
let skill = document.querySelector("#skills1") as HTMLBodyElement
let button  =document.querySelector("#toggleSkills")as HTMLButtonElement
// make variable 
let on_off  = 0
//add event listener in the btn
button.addEventListener("click",function(){
    if(on_off ==0){
     skill.style.display = 'block'; // Show the 'Skills' section
        on_off=1
    }else{
        skill.style.display = 'none'; // Show the 'Projects' section
        on_off=0
    }
})
//for project toogle button
let project = document.querySelector("#projects1") as HTMLBodyElement
let project_btn  =document.querySelector("#toggleProjects")as HTMLButtonElement
//make variable
let show_hide = 0
//add event listener to the project
project_btn.addEventListener("click",function(){
    if(show_hide == 0){
     project.style.display = 'block'; // Show the 'Projects' section
     show_hide=1
    }else{
     project.style.display = 'none'; // Show the 'Projects' section
     show_hide=0
    }
})