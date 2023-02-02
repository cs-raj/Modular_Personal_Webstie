import { Project } from "./data.js";
import Menu from "./Menu.js";
export default class ProjectComponent{
    constructor(){
        this.menu = new Menu();
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style/projects.css';
        head.appendChild(link);
    }
    render(){
        const projectDiv = document.createElement('div');
        const projectIntro = document.createElement('div');
        const projectIntroText = document.createElement('h2');
        
        projectDiv.classList.add('projects');
        projectIntro.id = "project-intro";
        projectIntroText.innerText = "Project";
        
        /*
            * Create element for skills
            * Create element for title
            * create element for description
            * wrap in project-card
            * warp 2 project-card in one projects-card
        */
        const htmlObject = [];
        projectDiv.appendChild(projectIntro);
        projectIntro.appendChild(projectIntroText);
        for(let i = 0;i<Project.projects.length;i++){
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            this.menu.MenuFunction(projectCard,'project-card-title',[Project.projects[i].title]);
            const projectSkills = document.createElement('div'); 
            projectSkills.classList.add("project-card-skills");
            this.menu.MenuFunction(projectSkills,Project.class[4],Project.projects[i].skills);
            projectCard.appendChild(projectSkills);
            this.menu.MenuFunction(projectCard,'project-card-description',[Project.projects[i].description]);
            htmlObject.push(projectCard);
        }
        for(let i = 0;i<htmlObject.length;i=i+2){
            const projectsDiv = document.createElement('div');
            projectsDiv.classList.add('projects-card');
            const sliceArray = htmlObject.slice(i,i+2);
            for(let j = 0;j<sliceArray.length;j++)
            {
                projectsDiv.appendChild(sliceArray[j]);
            }
            projectDiv.appendChild(projectsDiv);

        }
        return projectDiv;
        // document.body.appendChild(projectDiv);
    }
}

const pc = new ProjectComponent();
pc.render();