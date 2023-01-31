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
}
export default Menu