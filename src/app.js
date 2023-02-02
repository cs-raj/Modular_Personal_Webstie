import Mount from "./Components/Mount.js";
import MainComponent from "./Components/Main.js";
import HeaderComponent from "./Components/Header.js";
import FooterComponent from "./Components/Footer.js";
class PersonalWebsite{
    constructor(){
        this.mount = new Mount();
        this.childElementOrder = [];
        this.header = new HeaderComponent();
        this.footer = new FooterComponent();
        this.main = new MainComponent();
        this.childElementOrder.push(this.header.render());
        this.childElementOrder.push(this.main.render());
        this.childElementOrder.push(this.footer.render());
        console.log(this.childElementOrder)
    }
    render(){
        // const root = document.createElement('div');
        // root.id = 'root';
        for(let i =0;i<this.childElementOrder.length;i++){
            document.getElementById('root').appendChild(this.childElementOrder[i]);
        }
        // document.body.appendChild(root);
    }
}

const pw = new PersonalWebsite();
pw.render();
