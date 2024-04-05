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
    skill.addEventListener("mouseenter", function () {
      var skillId = skill.getAttribute("id");
      var skillName = getSkillName(skillId);
      if (skillName) {
        skill.innerHTML = "<span>" + skillName + "</span>";
      }
    });

    skill.addEventListener("mouseleave", function () {
      var skillId = skill.getAttribute("id");
      var skillIconClass = "bx bxl-" + skillId;
      skill.innerHTML = "<i class='" + skillIconClass + "'></i>";
    });
  });

  // Function to get the skill name based on the ID
  function getSkillName(skillId) {
    // Add your custom logic here to map skill IDs to their names
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
