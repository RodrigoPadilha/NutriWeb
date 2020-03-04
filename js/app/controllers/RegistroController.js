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

        let data = new Date(...             // Spread operator passa array como parametro sendo que
            this._currentDate.value         // o primerio item do array será o primeiro parametro,
            .split('-')                     // o segundo item do array será o segundo parametros, ...
            .map((item, indice) => {    
                return item - indice % 2;   // Converte data do formato 2020-03-29 para
            })                              // Sun Mar 29 2020 00:00:00 GMT-0300 (Horário Padrão de Brasília)
        );

        let registro = new Registro(
            data,
            "2",
            "3",
            "4",
            "5",
            "6"
        )

        console.log(registro.data)
        
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
    }


}