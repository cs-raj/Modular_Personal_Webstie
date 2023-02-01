class Mount{
    constructor(){}

    //Arguements : parent elment, elementToBeMountedName, elementToBeMounted
    mount(parent,element){
        if(parent){
            parent.appendChild(element);
            return;
        }
        else{
            return;
        }
    }
}

export default Mount;