// you can add more projects here
const projects = [
    {
      image: "../icons/example image.png",
      title: "Project 1",
      description: "This is the description for Project 1.",
    },
    {
      image: "../icons/example image.png",
      title: "Project 2",
      description: "This is the description for Project 2.",
    },
    {
      image: "../icons/example image.png",
      title: "Project 3",
      description: "BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA ",
    },
    {
      image: "../icons/example image.png",
      title: "Project 2",
      description: "This is the description for Project 2.",
    }
  ];
  
  function createProjectDiv(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
  
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
  
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("project-content");
  
    const title = document.createElement("h2");
    title.classList.add("project-title");
    title.textContent = project.title;
  
    const description = document.createElement("p");
    description.classList.add("project-description");
    description.textContent = project.description;
  
    contentDiv.appendChild(title);
    contentDiv.appendChild(description);
  
    projectDiv.appendChild(img);
    projectDiv.appendChild(contentDiv);
  
    return projectDiv;
  }
  
  function renderProjects() {
    const container = document.getElementById("project-container");
    projects.forEach((project) => {
      const projectDiv = createProjectDiv(project);
      container.appendChild(projectDiv);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderProjects);