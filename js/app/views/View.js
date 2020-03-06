class View {

    constructor(element){
        this._element = element
    }

    template(){
        throw new Error('O método template deve ser implementado!!!')
    }
    
    update(model){
        /** 
         * Qualquer texto HTML válido inserido para o atributo innerHTML é convertido para elementos 
         * do DOM e renderizados na página
         *  */ 
        this._element.innerHTML = this.template(model)
        console.log("Update View")       
    }

}