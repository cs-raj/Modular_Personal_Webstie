import { Academics } from "./data.js";
import Menu from "./menu.js";
export default class AcademicComponent{
    constructor(){
        this.menu = new Menu();
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style/academics.css';
        head.appendChild(link);
    }
    render(){
        const academicDiv = document.createElement('div');
        const academicIntro = document.createElement('div');
        const academicIntroText = document.createElement('h2');
        const academicCards = document.createElement('div');
        academicDiv.classList.add('academic')
        academicCards.classList.add('academic-cards');
        // academicDiv.classList.add('academic-cards');
        academicIntro.id = "academic-intro";
        academicIntroText.innerText = Academics.title;

        academicDiv.appendChild(academicIntro);
        academicIntro.appendChild(academicIntroText);
        console.log(Academics.academics);
        this.menu.MenuFunction2(academicCards,Academics.class.slice(2,5),Academics.academics);
        // console.log(academicCards)
        academicDiv.appendChild(academicCards);
        // document.body.appendChild(academicDiv);
        return academicDiv;
    }
}

const ac = new AcademicComponent();
ac.render();
 AcademicComponent;