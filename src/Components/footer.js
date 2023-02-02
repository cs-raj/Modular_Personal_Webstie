import { footer } from "./data.js";
import Menu from "./Menu.js";
export default class FooterComponent{
    constructor(){
        this.menu = new Menu();
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style/footer.css';
        head.appendChild(link);
        var link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
        head.appendChild(link2);
        var link3 = document.createElement('link');
        link3.rel = 'stylesheet';
        link3.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
        head.appendChild(link3);
    }
    render(){
        const footerDiv = document.createElement('footer');
        const contacts = document.createElement('div');
        const footerText = document.createElement('div');
        const footerText2 = document.createElement('div');
        footerText.classList.add('footer-text');
        footerText2.classList.add('footer-text');
        contacts.classList.add("contacts");
        footerText2.innerHTML = "&copy Copyright Raj Pandey";
        this.menu.MenuFunction3(contacts,footer.contacts.slice(0,2));
        this.menu.MenuFunction4(contacts,footer.contacts.slice(2,4));
        footerDiv.appendChild(footerText);
        footerText.appendChild(contacts);
        footerDiv.appendChild(footerText2);
        return footerDiv;
    }
}