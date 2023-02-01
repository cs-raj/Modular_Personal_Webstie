import AboutComponent from "./about.js";
import SkillComponent from "./skills.js";
import ProjectComponent from "./projects.js";
import InternshipComponent from "./internship.js";
import AcademicComponent from "./academics.js";
import Mount from "./mount.js";
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
        console.log("$$$$$$$$$$ ",this.childComponentOrder);
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
            // console.log(this.menu);
        }
        // console.log(menuComponent);
        return menuComponent;
        // document.body.appendChild(menuComponent);
    }
}
 MainComponent;
const mc = new MainComponent();
mc.render();