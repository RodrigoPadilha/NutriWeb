class RegistroController{

    constructor(){
        /*
        Captura o método querySelctor e mantém a associação com o contexto documento
        Sem o bind, o retorno é uma funão avulsa/solta/sem contexto e por isso não funciona, 
        pois não sabe onde buscar os elementos
        */
       let $ = document.querySelector.bind(document)
       this._currentDate = $("#inputCurrentDate")
       this._train = $('input[type="radio"]:checked')
       this._breakFast = $("#checkBreakfast")
       this._morningSnack = $("#checkMorningSnack")
       this._lunch = $("#checkLunch")
       this._afternoonSnack = $("#checkAfternoonSnack")
       this._dinner = $("#checkDinner")
       this._evenningSnack = $("#checkEvenningSnack")
       this._intestine = $("#inputIntestine")
       this._sleep = $("#inputSleep")
       this._water = $("#inputWater")
       this._exceptions = $("#inputExceptions")
    }

    adiciona(event){
        event.preventDefault(); // Evita que o comportamento padrão do Form seja executado                

        //ToDo Instanciar objeto Registro e pssar valores para o construtor
        //ToDo converter data de string para Date

        //Alura aula 3 - criando um objeto Date
        
        console.log(this._currentDate.value)
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
                                                        
    }


}