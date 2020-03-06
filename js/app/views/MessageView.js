class MessageView extends View{

    constructor(element){
        super(element)
    }

    template(model){
        console.log("Chamou template Message", model.text)
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : ``
    }
}