import Mount from "./Components/mount.js";
import MainComponent from "./Components/main.js";
import HeaderComponent from "./Components/header.js";
import FooterComponent from "./Components/footer.js";
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
        for(let i =0;i<this.childElementOrder.length;i++){
            // console.log(body);
            document.body.appendChild(this.childElementOrder[i]);
        }
    }
}

// const mount = new Mount();
const pw = new PersonalWebsite();
pw.render();
// mount(document.getElementById('root'));