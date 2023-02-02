import { Internship } from "./data.js";
import Menu from "./Menu.js";
export default class InternshipComponent{
    constructor(){
        this.menu = new Menu();
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style/internship.css';
        head.appendChild(link);
    }
    render(){
        const internshipDiv = document.createElement('div');
        const internshipIntro = document.createElement('div');
        const internshipIntroText = document.createElement('h2');

        internshipDiv.classList.add("internship");
        internshipIntro.id = "internship-intro";

        internshipIntroText.innerText = Internship.title;
        const htmlObject = [];
        internshipDiv.appendChild(internshipIntro);
        internshipIntro.appendChild(internshipIntroText);

        for(let i = 0;i<Internship.internship.length;i++){
            const internshipCard = document.createElement('div');
            internshipCard.classList.add('internship-card');
            this.menu.MenuFunction(internshipCard,'internship-card-company',[Internship.internship[i].company]);
            this.menu.MenuFunction(internshipCard,'internship-card-title',[Internship.internship[i].title]);
            const internshipskills = document.createElement('div');
            internshipskills.classList.add('internship-card-skills');
            this.menu.MenuFunction(internshipskills,Internship.class[4],Internship.internship[i].skills);
            internshipCard.appendChild(internshipskills);
            this.menu.MenuFunction(internshipCard,'internship-card-description',[Internship.internship[i].description]);
            htmlObject.push(internshipCard);
        }
        for(let i = 0;i<htmlObject.length;i=i+2){
            const internshipCards = document.createElement('div');
            internshipCards.classList.add('internship-cards');
            const sliceArray = htmlObject.slice(i,i+2);
            for(let j = 0;j<sliceArray.length;j++)
            {
                internshipCards.appendChild(sliceArray[j]);
            }
            internshipDiv.appendChild(internshipCards);
        }
        return internshipDiv;
    }
}