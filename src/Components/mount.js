class Mount{
    constructor(){}

    //Arguements : parent elment, elementToBeMountedName, elementToBeMounted
    mount(parent,elementName,element){
        if(parent.querySelector('.'+elementName)===null){
            parent.appendChild(element);
            return;
        }
        else{
            return;
        }
    }
}

export default Mount;