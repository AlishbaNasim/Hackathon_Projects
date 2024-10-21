//For skills toggle button
var skill = document.querySelector("#skills1");
var button = document.querySelector("#toggleSkills");
// make variable 
var on_off = 0;
//add event listener in the btn
button.addEventListener("click", function () {
    if (on_off == 0) {
        skill.style.display = 'block'; // Show the 'Skills' section
        on_off = 1;
    }
    else {
        skill.style.display = 'none'; // Show the 'Projects' section
        on_off = 0;
    }
});
//for project toogle button
var project = document.querySelector("#projects1");
var project_btn = document.querySelector("#toggleProjects");
//make variable
var show_hide = 0;
//add event listener to the project
project_btn.addEventListener("click", function () {
    if (show_hide == 0) {
        project.style.display = 'block'; // Show the 'Projects' section
        show_hide = 1;
    }
    else {
        project.style.display = 'none'; // Show the 'Projects' section
        show_hide = 0;
    }
});
