import { Skills } from "./data.js";
import Menu from "./Menu.js";
class SkillComponent{
    constructor(){
        this.menu = new Menu();
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style/skills.css';
        head.appendChild(link);
    }
    render(){
        const skillDiv = document.createElement('div');
        const skillLink = document.createElement('div');

        skillDiv.classList.add("skills");
        skillLink.id = "skills-link";
        skillDiv.appendChild(skillLink);
        this.menu.MenuFunction(skillDiv,"skill",Skills.skills);

        return skillDiv;
    }

}
export default SkillComponent;