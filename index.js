document.getElementById("cv-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;
  const skills = document
    .getElementById("skills")
    .value.split(",")
    .map((skill) => skill.trim());
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const projects = document
    .getElementById("projects")
    .value.split(",")
    .map((project) => project.trim());
  const certifications = document
    .getElementById("certifications")
    .value.split(",")
    .map((cert) => cert.trim());

  const design = document.getElementById("design-select").value;

  const cvOutput = document.getElementById("cv-output");
  cvOutput.innerHTML = generateCV(
    name,
    email,
    phone,
    summary,
    skills,
    education,
    experience,
    projects,
    certifications,
    design
  );
});

function generateCV(
  name,
  email,
  phone,
  summary,
  skills,
  education,
  experience,
  projects,
  certifications,
  design
) {
  let cvTemplate = "";

  switch (design) {
    case "1":
      cvTemplate = `
          <div class="cv-design-1">
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Summary</h3>
            <p>${summary}</p>
            <h3>Skills</h3>
            <ul>${skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Projects</h3>
            <ul>${projects
              .map((project) => `<li>${project}</li>`)
              .join("")}</ul>
            <h3>Certifications</h3>
            <ul>${certifications
              .map((cert) => `<li>${cert}</li>`)
              .join("")}</ul>
          </div>
        `;
      break;

    case "2":
      cvTemplate = `
          <div class="cv-design-2">
            <h2>${name}</h2>
            <p><strong>Contact:</strong> ${email} | ${phone}</p>
            <h3>Professional Summary</h3>
            <p>${summary}</p>
            <h3>Skills</h3>
            <ul>${skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Projects</h3>
            <ul>${projects
              .map((project) => `<li>${project}</li>`)
              .join("")}</ul>
            <h3>Certifications</h3>
            <ul>${certifications
              .map((cert) => `<li>${cert}</li>`)
              .join("")}</ul>
          </div>
        `;
      break;

    default:
      cvTemplate = `<p>Invalid design selected.</p>`;
  }

  return cvTemplate;
}
