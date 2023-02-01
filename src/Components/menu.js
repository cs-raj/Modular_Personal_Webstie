//This will be used for creating component in loop
class Menu{
    constructor(){}
    //Arguements
    /*
        * grandParent : component to which parent is attached
        * parentComponent : the component in which to attach the list
        * childComponent : this will contain elment of list itself
        * childClass : this will give class identifier
        * childData : array
    */
    MenuFunction(parentComponent,childClass,childData){
        for(let i = 0;i<childData.length;i++){
            const childDiv = document.createElement('div');
            childDiv.classList.add(childClass);
            childDiv.innerText = childData[i];
            parentComponent.appendChild(childDiv);
            console.log(parentComponent);
        }
        return parentComponent;
    }

    MenuFunction2(parentComponent,divArray,dataObject){
        console.log(divArray)
        for(let i = 0;i<dataObject.length;i++){
            const acadmeicCard = document.createElement('div');
            const d1 = document.createElement('div');
            const d2 = document.createElement('div');
            const d3 = document.createElement('div');
            
            d1.classList.add(divArray[0]);
            d2.classList.add(divArray[1]);
            d3.classList.add(divArray[2]);
            acadmeicCard.classList.add('academic-card');
            d1.innerText = dataObject[i].year;
            d2.innerText = dataObject[i].school;
            d3.innerText = dataObject[i].course;

            acadmeicCard.appendChild(d1);
            acadmeicCard.appendChild(d2);
            acadmeicCard.appendChild(d3);
            parentComponent.appendChild(acadmeicCard);
        }
    }

    MenuFunction3(parentElement,dataObject){

        for(let i = 0;i<dataObject.length;i++){
            console.log(dataObject[i]);
            const contactType = document.createElement('div');
            const contactTypeIcon = document.createElement('div');
            const contactTypeDetail = document.createElement('div');
            const iconSpan = document.createElement('span');
            contactType.classList.add(dataObject[i].grandParent);
            contactTypeIcon.classList.add(dataObject[i].parent);
            console.log(dataObject[i].spanClass);
            iconSpan.classList.add(dataObject[i].spanClass);
            contactTypeDetail.classList.add(dataObject[i].typeClass);

            iconSpan.innerText = dataObject[i].contactType;
            contactTypeDetail.innerText = dataObject[i].contactValue;

            parentElement.appendChild(contactType);
            contactType.appendChild(contactTypeIcon);
            contactTypeIcon.appendChild(iconSpan);
            contactType.appendChild(contactTypeDetail);
        }
    }

    MenuFunction4(parentElement,dataObject){
        for(let i = 0;i<dataObject.length;i++){
            console.log(dataObject[i]);
            const contactType = document.createElement('div');
            const contactTypeIcon = document.createElement('div');
            const contactTypeDetail = document.createElement('div');
            const iconSpan = document.createElement('i');
            contactType.classList.add(dataObject[i].grandParent);
            contactTypeIcon.classList.add(dataObject[i].parent);


            console.log(dataObject[i].spanClass);
            
            for(let j = 0;j<dataObject[i].spanClass.length;j++){
                iconSpan.classList.add(dataObject[i].spanClass[j]);
            }
            iconSpan.style = dataObject[i].style;

            
            contactTypeDetail.classList.add(dataObject[i].typeClass);

            // iconSpan.innerText = dataObject[i].contactType;
            contactTypeDetail.innerText = dataObject[i].contactValue;

            parentElement.appendChild(contactType);
            contactType.appendChild(contactTypeIcon);
            contactTypeIcon.appendChild(iconSpan);
            contactType.appendChild(contactTypeDetail);
        }
    }
}
export default Menu