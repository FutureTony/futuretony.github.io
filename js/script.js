// you can add more projects here
const projects = [
    {
      image: "../icons/fleshboundlogo.jpg",
      title: "Fleshbound",
      description: "The Swedish Game Award winning Fleshbound. Fleshbound is a fast paced parkour Game made with a team of students from Futuregames. Bolstering a unique artstyle we call splatterpunk. Availible on steam for free!",
      link: "project1.html" 
    },
    {
      image: "../icons/Project_Assembly.png",
      title: "Project Assembly",
      description: "Project Assembly, My passion project made with two friends of mine, is a calm story driven game made in unity, with insperation from A Short Hike & the Nordic enviorment of Sweden. Currently a Work in Progress!",
      link: "project2.html"
    },
    {
      image: "../icons/SourSecurity/SourSecurityLogo.png",
      title: "Sour Security",
      description: "The Fourth game project durring my time at futuregames. Sour Security is a chaotic assasination game where you recently got fired from work and are in turn trying to get revenge on former coworkers. The game is done in unreal engine 5 and took around 4 weeks to do.",
      link: "project3.html"
    },
    {
      image: "../icons/exampleimage.png",
      title: "Project 4",
      description: "This is the description for Project 4.",
      link: "project4.html"
    }
  ];
  
  function createProjectDiv(project) {
    const projectDiv = document.createElement("a");
    projectDiv.classList.add("project");
    projectDiv.href = project.link; 
  
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