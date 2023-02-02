# Modular Personal Website

The Website is writing the whole personal website using JavaScript by breaking the website into different components and seperating code and data.

## Link for the Website 
[https://cs-raj.github.io/Modular_Personal_Webstie/](https://cs-raj.github.io/Modular_Personal_Webstie/)

## Folder Structure

* assets -- contain all the images used in the site
* src -- House all the componenets
    * About.js
    * Academics.js
    * data.js 
    * Footer.js
    * Header.js
    * Internship.js
    * Main.js
    * Menu.js 
    * Mount.js 
    * Projects.js
    * Skills.js
* app.js -- combined all the components
* style
    * about.css
    * academics.css
    * footer.css
    * header.css
    * internship.css
    * projects.css
    * skills.css
    * style.css
*index.html 


## File and Their Role

* app.js -- This is the main file of the project. It adds the components given from the following files into the `root` of the page. The following files are 
    1. Header.js
    2. Main.js
    3. Footer.js
    
* Main.js -- This file combines the component given from the following file.
    1. About.js
    2. Projects.js
    3. Academics.js
    4. Internship.js
    5. Skills.js

* Menu -- This file is used for building the Navbar. And adding the cardComponents and data to the card components.