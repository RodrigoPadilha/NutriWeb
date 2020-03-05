class DateHelper{


    static convertTextToDate(dateText){
        let isDateValid = this._testDateFormatYYYYMMDD(dateText)
        if(isDateValid){
            return new Date(
                ...                             // Spread operator passa array como parametro sendo que
                dateText                        // o primerio item do array será o primeiro parametro,
                .split('-')                     // o segundo item do array será o segundo parametros, ...
                .map((item, index) => {    
                    return item - index % 2;    // Converte data do formato 2020-03-29 para
                })                              // Sun Mar 29 2020 00:00:00 GMT-0300 (Horário Padrão de Brasília)
            );        
        }
        throw new Error("Formato de data deve ser aaaa-mm-dd")        
    }

    static convertDateToText(date){        
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    static _testDateFormatYYYYMMDD(dateText){
        return /\d{4}-\d{2}-\d{2}/.test(dateText)
    }
    

}