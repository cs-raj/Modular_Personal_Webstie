import { Header } from "./data.js";
import Menu from "./menu.js";

class HeaderComponent{
    constructor(){
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './style/header.css';
        head.appendChild(link);
    }
    render(){
       //Creating the components i.e. div or img or a or li or ul or ol

       const header = document.createElement("header");
       const headerOptions = document.createElement('div');
       const Image = document.createElement('img');
       const headerMenu = document.createElement('ul');
      
    
        //Assigning ID and classes
        headerOptions.classList.add('header-options');
        Image.id = "logo-img";
        Image.src = Header.logo;
        Image.alt = "this is logo";
        headerMenu.classList.add("header-menu");
        
        //Adding inner texts
        //When creating a component in loop need to create that component in loop itself 
        // Why??

        for(let i = 0;i<Header.navBar.length;i++){
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');

            listItem.classList.add('header-menu-text');
           
            anchor.href =  Header.navBar[i].href;
            anchor.innerText = Header.navBar[i].title;
            listItem.appendChild(anchor);
            headerMenu.appendChild(listItem);
        }
        
        //Attaching the components
        headerOptions.appendChild(Image);
        headerOptions.appendChild(headerMenu);
        header.appendChild(headerOptions);
        console.log(header);
        document.body.appendChild(header);
        console.log(headerMenu);

    }
    mount(){}
}

const hc = new HeaderComponent();
hc.render();

export default HeaderComponent;