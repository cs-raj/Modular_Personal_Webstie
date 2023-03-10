//This file will contain the data from the website in the from of individual objects
export const Header = {
    "logo": "./assets/raj-logo.png",
    "navBar":[
        {
            "title":"About",
            "href":"#about-intro"
        },
        {
            "title":"Skills",
            "href":"#skills-link"
        },
        {
            "title":"Internships",
            "href":"#internship-intro"
        },
        {
            "title":"Projects",
            "href":"#project-intro"
        },
        {
            "title":"Academics",
            "href":""
        }
    ]
}

//About Section

export const About = {
    "title":"About",
    "profileImage":"./assets/profile-image-min.png",
    "text":"Hi ! Everyone I am RAJ PANDEY final Year UG in Computer Engineering from MITAOE. Currently I am working as ASE at Contentstack Final Year Computer Engineering Undergraduate, Interested in Machine Learning and Data Science along with aspirations of developing software that have a positive impact on people at large. Having knowledge about C++ and Python. I have completed few project in web development using MEAN Stack and also completed project using C# and SQL."
}

export const Skills = {
    "skills":[
        "Python",
        "DBMS",
        "Data Structures",
        "Algorithms",
        "Problem Solving"
    ]
}

export const Project = {
    "title":"Project",
    "projects":[
        {
            "title":"Youtube Comments Analysis",
            "skills":["NLP","EDA","Python","ML"],
            "description":" The Purpose of the project is to classify whether the video is watchable or not watchable based on likes, number of comments, number of views, number of dislikes and Sentimental Score Values."
        },
        {
            "title":"Tourism Management System",
            "skills":["Mongodb","ExpressJS","Angular","NodeJS","SE"],
            "description":"The Tourism Management Website was developed as our project for Software Engineering Course to understand practically the processes involved in software engineering. We begin from requirement gathering from users, to deciding functional and non-functional requirements, then selecting the model for ours we selected incremental model, UML Diagrams ,cost estimation, risk Management, Software Testing ."
        },
        {
            "title":"Real Estate Rental Web App",
            "skills":["Mongodb","ExpressJS","Angular","NodeJS"],
            "description":"The Project is Developed as part of Web Technologies Course. The Project is developed using MEAN stack for Real Estate Rental where the user can view all the properties for rent, and owner can list their properties for rent on the website by first creating an account on the application. The owner can create, update and delete property data. The user can view all the listed properties along with owners contact information"
        },
        {
            "title":"Hospital Management System",
            "skills":["C#","SQL"],
            "description":" The Project was developed as part of .NET course. The Application is used to add the Records of the Patients to the Database and the Doctor Assigned to the Patient. The Application Performs CRUD functionality. Add Patients, Update Patients, Delete Patients, Search Patients The Following are the Concepts Used SQL Connectivity, Windows Form, ListBox, CheckBox, DataGrid, Buttons and Labels"
        },
        {
            "title":"Interview Bot",
            "skills":["Computer Vision","Natural language Processing","Django","SQLite"],
            "description":"Interview bot where in the firstly the candidate resume would be scanned and skills would be extracted and candidate would be given appropriate Job role, and based on skills extracted candidate would be asked different questions that would be autogenerated from the paragraphs for the skills stored, based on the candidate???s response next questions would be asked and a score card would be generated based on interview and the candidate???s resume match with Job Description. During the QnA the camera would be used to proctor the interview and firstly candidate would be verified by matching with photo submitted during the resume submission."
        }
    ],
    "class":["projects-card","project-card","project-card-title","project-card-skills","project-card-skills-card","project-card-description"]
}

export const Internship = {
    "title":"Internship",
    "internship":[
        {
            "company":"Celebal Technologies",
            "title":"Data Science Intern",
            "skills":["Python","Machine Learning","EDA","CNN","RNN"],
            "duration":"June 1, 2022 - July 31, 2022",
            "description":" The Data Science Based internship require us to make different machine learning models for the given problem statements on appropriate datasets. The Process involves EDA, Data Visualization, and implementing machine learning models using both library and making the model from scratch."
        },
        {
            "company":"Codekul Pvt Ltd",
            "title":"Full Stack Java Development Inteern",
            "skills":["ReactJS","MYSQL","Java","HTML","Springboot","GIT"],
            "duration":"June 12, 2021 - Aug. 8, 2021",
            "description":"Developed an application for Service Management System using ReactJS, Springboot, and Mysql. I was appointed as a Team Leader for the same where my responsibilities were to check everyone work and help them wherever the need arose. The entire project was distributed in different masters During the Internship, was able to complete 2 Masters(components) ???country master and ???make Master??? both Frontend and Backend with API."
        }
    ],
    "class":["internship-cards","internship-card","internship-card-company","internship-card-title","internship-card-skills","internship-card-skill","internship-card-duration","internship-card-description"]
}

export const Academics = {
    "title":"Academics",
    "academics":[
        {
            "year":"2016",
            "school":"Smt Radhikabai Meghe Vidyalaya",
            "course":"SSC"
        },
        {
            "year":"2018",
            "school":"Shubham Junior College",
            "course":"HSC"
        },
        {
            "year":"2023",
            "school":"MIT Academy of Engineering",
            "course":"B. Tech Computer Engineering"
        }
    ],
    "class":["academic-cards","academic-card","academic-card-year","academic-card-school","academic-card-course"]
}

export const footer = {
    "contacts":[
        {
            "grandParent":"contact-type",
            "parent":"contact-type-icon",
            "spanClass":"material-symbols-rounded",
            "typeClass":"contact-type-detail",
            "contactType":"mail",
            "contactValue":"abc@gmail.com"
        },
        {
            "grandParent":"contact-type",
            "parent":"contact-type-icon",
            "spanClass":"material-symbols-rounded",
            "typeClass":"contact-type-detail",
            "contactType":"call",
            "contactValue":"1234567890"
        },
        {
            "grandParent":"contact-type",
            "parent":"contact-type-icon",
            "spanClass":["fa","fa-linkedin-square"],
            "style":"font-size:36px",
            "typeClass":"contact-type-detail",
            "contactType":"fa fa-linkedin-square",
            "contactValue":"abc@gmail.com"
        },
        {
            "grandParent":"contact-type",
            "parent":"contact-type-icon",
            "spanClass":["fa","fa-github"],
            "style":"font-size:36px",
            "typeClass":"contact-type-detail",
            "contactType":"fa fa-github",
            "contactValue":"abc@gmail.com"
        }
    ],
    "copyright":"&copy Copyright Raj Pandey"
}