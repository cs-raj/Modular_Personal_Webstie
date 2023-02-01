import { About } from "./data.js";
import Menu from "./menu.js";

class AboutComponent{
    constructor(){
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style/about.css';
        head.appendChild(link);
    }
    render(){
        const aboutDiv = document.createElement('div');
        const aboutId = document.createElement('div');
        const aboutIntro = document.createElement('div');
        const about = document.createElement('div');
        const aboutImage = document.createElement('img');
        const aboutText = document.createElement('div')
        const heading = document.createElement('h2');

        aboutId.id = "about-intro";
        aboutIntro.classList.add('about-intro');
        about.id = "about";
        aboutImage.src = About.profileImage;
        aboutImage.id = "about-img";
        aboutText.classList.add("about-text");

        heading.innerText = About.title;
        aboutText.innerText = About.text;

        aboutDiv.appendChild(aboutId);
        aboutDiv.appendChild(aboutIntro);
        aboutDiv.appendChild(about);
        about.appendChild(aboutImage);
        about.appendChild(aboutText);
        return about;
        // console.log(aboutDiv);
        // document.body.appendChild(aboutDiv);

    }
    mount(){}
}

const hc = new AboutComponent();
hc.render();

export default AboutComponent;