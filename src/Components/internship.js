import { Internship } from "./data.js";
import Menu from "./menu.js";
class InternshipComponent{
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

    }
}
const ic = new InternshipComponent();
ic.render();