var btns = document.querySelectorAll('.nav-btn');

var color_primary = "#f8f9fa";
var color_secondary = "#adb5bd";


var profile = document.getElementById("profile");
var skills = document.getElementById("skills");
var projects = document.getElementById("projects");
var blogs = document.querySelector("#blogs");

var btn_about = document.querySelector("#b_about");
var btn_skills = document.getElementById("b_skills");
var btn_projects = document.getElementById("b_projects");


function makeNormal() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.fontWeight = "normal";
    btns[i].style.color = color_secondary;
  }
}



function showProfile() {
  profile.style.display = "flex";
  skills.style.display = "none";
  projects.style.display = "none";
  blogs.style.display = "none";

  makeNormal();
  btn_about.style.fontWeight = "bold";
  btn_about.style.color = color_primary;
}

function showSkills() {
  profile.style.display = "none";
  profile.style.display = "none";
  skills.style.display = "flex";
  blogs.style.display = "flex";

  makeNormal();
  btn_skills.style.fontWeight = "bold"
  btn_skills.style.color = color_primary;

}

function showProjects() {
  projects.style.display = "flex";
  skills.style.display = "none";
  profile.style.display = "none";
  blogs.style.display = "none";

  makeNormal();
  btn_projects.style.fontWeight = "bold"
  btn_projects.style.color = color_primary;

}

function showBlogs() {
  blogs.style.display = "flex";
  projects.style.display = "none";
  skills.style.display = "none";
  profile.style.display = "none";

}
