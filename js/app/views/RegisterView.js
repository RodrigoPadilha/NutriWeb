class RegisterView extends View{

    constructor(element){
        super(element)
    }

    template(model){
        return `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Data</th>
                        <th scope="col">Alimentação</th>
                        <th scope="col">Exercício</th>
                        <th scope="col">Intestino</th>
                        <th scope="col">Sono</th>
                        <th scope="col">Água</th>
                        <th scope="col">Exceções</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.registers.map(register => {
                        return `
                            <tr>
                                <th scope="row">1</th>
                                <td>${DateHelper.convertDateToText(register.date)}</td>
                                <td>${register.food.reduce((text, f) => text+=`${f.key}:${f.value} `,"")}</td> 
                                <td>${register.exercise}</td>
                                <td>${register.intestine}</td>
                                <td>${register.sleep}</td>
                                <td>${register.water}</td>
                                <td>${register.exceptions}</td>
                            </tr>
                        `    
                    }).join('')}                    
                </tbody>
            </table>
        `
    }

}