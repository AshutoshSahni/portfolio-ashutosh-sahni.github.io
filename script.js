function showProfile() {
  document.getElementById("profile").style.display = "flex";
  document.getElementById("skills").style.display = "none";
  document.getElementById("b_about").style.fontWeight = "bold";
  document.getElementById("b_about").style.color = "#dee2e6";

}

function showSkills() {
  document.getElementById("profile").style.display = "none";
  document.getElementById("skills").style.display = "flex";
  document.getElementById("b_skills").style.fontWeight = "bold";
  document.getElementById("b_skills").style.color = "#dee2e6";
}

