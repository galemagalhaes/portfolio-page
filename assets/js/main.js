function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerHTML = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;

  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softskills = document.getElementById("profile.skills.softskills");
  softskills.innerHTML = profileData.skills.softskills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardskills = document.getElementById("profile.skills.hardskills");
  hardskills.innerHTML = profileData.skills.hardskills
    .map(
      (skill) =>
        `<li> <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"> </li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.language");
  languages.innerHTML = profileData.language
    .map((langs) => `<li>${langs}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `
    <li>
      <h3 ${project.github ? 'class="github"' : ""}>${project.name} </h3>
      <a href="${project.url}" target="_blank">${project.url}</a>
    </li>
    `;
    }).join("");
}

function updateProfessionalExperience(profileData){
  const professionalExperience = document.getElementById('profile.professionalExperience')
  professionalExperience.innerHTML = profileData.professionalExperience.map((experience) => {
    return `
      <li>
        <h3 class="title">${experience.name}</h3>
        <p class="period">${experience.period}</p>
        <p class="tasks">${experience.description-l1}</p>
        <p class="tasks">${experience.description-l2}</p>
        <p class="tasks">${experience.description-l3}</p>
      </li>
    `
  }).join("")
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updatePortfolio(profileData);
  updateProfessionalExperience(profileData)
})();
