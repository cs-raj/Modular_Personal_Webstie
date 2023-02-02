import { Academics } from "./data.js";
import Menu from "./Menu.js";
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
        academicIntro.id = "academic-intro";
        academicIntroText.innerText = Academics.title;

        academicDiv.appendChild(academicIntro);
        academicIntro.appendChild(academicIntroText);
        this.menu.MenuFunction2(academicCards,Academics.class.slice(2,5),Academics.academics);
        academicDiv.appendChild(academicCards);
        return academicDiv;
    }
}