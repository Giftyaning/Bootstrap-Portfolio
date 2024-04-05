//Name typing 
const name = "Gifty Aning";
const role = "Front-end Developer";
let index = 0;
let typingInterval;

function type() {
  if (index <= name.length) {
    document.getElementById("typing").innerText = name.slice(0, index);
  } else if (index <= name.length + 2) {
    document.getElementById("typing").innerText = "";
  } else {
    document.getElementById("typing").innerText = role.slice(
      0,
      index - name.length - 3
    );
  }
  index++;

  if (index > name.length + role.length + 3) {
    clearInterval(typingInterval);
  }
}

typingInterval = setInterval(type, 100);

document.addEventListener("DOMContentLoaded", function () {
  var skills = document.querySelectorAll(".skill");

  skills.forEach(function (skill) {
    var skillIcon = skill.querySelector("i");
    var skillText = document.createElement("span");
    skillText.classList.add("skill-text");
    skill.appendChild(skillText);

    skill.addEventListener("mouseenter", function () {
      var skillId = skill.getAttribute("id");
      var skillName = getSkillName(skillId);
      if (skillName) {
        skillText.textContent = skillName;
        skillIcon.style.display = "none";
      }
    });

    skill.addEventListener("mouseleave", function () {
      skillText.textContent = "";
      skillIcon.style.display = "block";
    });
  });

  // Function to get the skill name based on the ID
  function getSkillName(skillId) {
    switch (skillId) {
      case "html":
        return "HTML";
      case "css":
        return "CSS";
      case "javascript":
        return "JavaScript";
      case "react":
        return "React.js";
      default:
        return null;
    }
  }
});
