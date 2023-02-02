import AboutComponent from "./About.js";
import SkillComponent from "./Skills.js";
import ProjectComponent from "./Projects.js";
import InternshipComponent from "./Internship.js";
import AcademicComponent from "./Academics.js";
import Mount from "./Mount.js";
export default class MainComponent{
    constructor(){
        this.menu = new Mount();
        this.childComponentOrder = []
        this.AboutComponent = new AboutComponent();
        this.SkillComponent = new SkillComponent();
        this.ProjectComponent = new ProjectComponent();
        this.InternshipComponent = new InternshipComponent();
        this.AcademicComponent = new AcademicComponent();
        this.childComponentOrder.push(this.AboutComponent.render());
        this.childComponentOrder.push(this.SkillComponent.render());
        this.childComponentOrder.push(this.ProjectComponent.render());
        this.childComponentOrder.push(this.InternshipComponent.render());
        this.childComponentOrder.push(this.AcademicComponent.render());
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style/style.css';
        head.appendChild(link);
    }
    render(){
        const menuComponent = document.createElement('main')
        for(let i = 0;i<this.childComponentOrder.length;i++){
            this.menu.mount(menuComponent,this.childComponentOrder[i]);
        }
        return menuComponent;
    }
}