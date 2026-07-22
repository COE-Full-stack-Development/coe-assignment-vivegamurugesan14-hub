(() => {
  let profileCard = document.getElementById("profile-card");
  let toggleBtn = document.getElementById("toggle-theme-btn");
  let addSkillBtn = document.getElementById("add-skill-btn");
  let skillInput = document.getElementById("skill-input");
  let skillsList = document.getElementById("skills-list");

  toggleBtn.addEventListener("click", function () {
    profileCard.classList.toggle("dark-theme");
  });

  addSkillBtn.addEventListener("click", function () {
    let skill = skillInput.value.trim();

    if (skill !== "") {
      let newSkill = document.createElement("li");

      newSkill.textContent = skill;

      skillsList.appendChild(newSkill);

      skillInput.value = "";
    }
  });
})();
