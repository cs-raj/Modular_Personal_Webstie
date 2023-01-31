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
}
export default Menu