var btns = document.querySelectorAll('.nav-btn');

function makeNormal() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.fontWeight = "normal";
    btns[i].style.color = "#adb5bd";
  }
}

function showProfile() {
  document.getElementById("profile").style.display = "flex";
  document.getElementById("skills").style.display = "none";

  makeNormal();
  document.getElementById("b_about").style.fontWeight = "bold";
  document.getElementById("b_about").style.color = "#f8f9fa";


}

function showSkills() {
  document.getElementById("profile").style.display = "none";
  document.getElementById("skills").style.display = "flex";

  makeNormal();
  document.getElementById("b_skills").style.fontWeight = "bold"
  document.getElementById("b_skills").style.color = "#f8f9fa";

}

