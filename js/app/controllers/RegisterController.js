class RegisterController{

    constructor(){
        /**
            Captura o método querySelctor e mantém a associação com o contexto documento
            Sem o bind, o retorno é uma funão avulsa/solta/sem contexto e por isso não funciona, 
            pois não sabe onde buscar os elementos
        */
       let $ = document.querySelector.bind(document)
       this._currentDate = $("#inputCurrentDate")
       this._train = $('input[type="radio"]:checked')
       this._food = document.querySelectorAll('input[name="food"]')
       this._intestine = $("#inputIntestine")
       this._sleep = $("#inputSleep")
       this._water = $("#inputWater")
       this._exceptions = $("#inputExceptions")

       this._registerView = new RegisterView($("#tableRegisters"))
       this._listRegisters = new BindHelper(            // Bind View => Model. Faz associação entre o Dado e View
           new ListRegisters(),           
           this._registerView,                          // atualiza essa view 
           'registers','insertRegister')                // quando esses métodos forem chamados 
       
       this._messageView = new MessageView($("#message"))
       this._message = new BindHelper(
           new Message(),            
           this._messageView,                           //Atualzia essa view
           'text')                                      // quando essta property for alterada
              
    }

    /**  
        Este método é o único ponto que pode ser incluído uma negociação. Quem garante isso é o objeto
        ListaNegociação que utiliza a técnica de programação defensiva para retornar um cópia da lista.
        Caso tente adicionar algum registro mesmo pelos atributos este será na cópia, blindando a lista original do objeto
    */
    adiciona(event){
        event.preventDefault(); // Evita que o comportamento padrão do Form seja executado                        
        
        let register = this._createRegister()
        this._listRegisters.insertRegister(register)

        this._message.text = "Registro incluído com Sucesso"

        this._clearForm()                                
    }

    _createRegister(){
        let date = DateHelper.convertTextToDate(this._currentDate.value)
        let foodChecks = this._getCheckedFoodsFromScreen(this._food)        
        return new Register(
            date,
            foodChecks,
            this._train.parentElement.textContent.trim(),
            this._intestine.value,
            this._sleep.value,
            this._water.value,
            this._exceptions.value
        )
    }

    _getCheckedFoodsFromScreen(foodList){
        return Object.keys(foodList).map((index) => {                         
            var key = foodList[index].value            
            var value = foodList[index].checked            
            return { key, value }
        })
    }

    _clearForm(){
        document.querySelector("#formRegister").reset()
        this._currentDate.focus()
    }

    download(){
        //ToDo Implementar request com Fetch
        //ToDo Implementar Parse do retorno com JSON.parse para object
        //ToDo Varrer array de Objects convertendo cada objeto para model Registro com map (gera novo array)
        //ToDo Para cada item desta lista chamar o método "adiciona" passando o item como parametro
        //ToDo Isolar código para busca em Services
        //ToDo Chamar método de requisição com lambda para pegar retorno de erro ou sucesso
        //ToDo Retornar o erro ou a lista de registros através de um callback (erro, null) ou (null, sucesso)
    }
}
