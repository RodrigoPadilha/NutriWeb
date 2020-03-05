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

       this._listRegisters = new ListRegisters()

       this._registerView = new RegisterView($("#tableRegisters"))
       this._registerView.update(this._listRegisters)
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
        console.log(this._listRegisters)

        this._registerView.update(this._listRegisters)

        this._clearForm()
                                
    }

    _getCheckedFoodsFromScreen(foodList){
        return Object.keys(foodList).map((index) => {                         
            var key = foodList[index].value            
            var value = foodList[index].checked            
            return { key, value }
        })
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

    _clearForm(){
        document.querySelector("#formRegister").reset()
        this._currentDate.focus()
    }
}

    //console.log(register.data)
    
    /*
    console.log(typeof(this._currentDate.value))
    console.log(this._train.parentElement.textContent)
    console.log('---------------')
    console.log(this._breakFast.checked)
    console.log(this._morningSnack.checked)
    console.log(this._lunch.checked)
    console.log(this._afternoonSnack.checked)
    console.log(this._dinner.checked)
    console.log(this._evenningSnack.checked)
    console.log('---------------')
    console.log(this._intestine.value)
    console.log(this._sleep.value)
    console.log(this._water.value)
    console.log(this._exceptions.value)
    */ 