class RegisterView{

    constructor(elemento){
        this._elemento = elemento
    }

    _template(model){
        return `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Data</th>
                        <th scope="col">Exercício</th>
                        <th scope="col">Intestino</th>
                    </tr>
                </thead>
                <tbody>

                    ${model.registers.map(register => {
                        return `
                            <tr>
                                <th scope="row">1</th>
                                <td>${DateHelper.convertDateToText(register.date)}</td>
                                <td>${register.exercise}</td>
                                <td>${register.intestine}</td>
                            </tr>
                        `    
                    }).join('')}

                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        `
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}