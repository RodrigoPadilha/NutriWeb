class Registro{

    constructor(data, alimentacao, exercicio, intestino, sono, agua, excecoes){
        this._data = new Date(data.getTime())
        this._alimentacao = alimentacao
        this._exercicio = exercicio
        this._intestino = intestino
        this._sono = sono
        this._agua = agua
        this._excecoes = excecoes
    }

    get data(){
        return this._data
    }

    get alimentacao(){
        return this._alimentacao
    }
    // set alimentacao(data){
    //     this._alimentacao = data
    // }

    get exercicio() {
        return this._exercicio
    }

    get intestino() {
        return this._intestino
    }

    get sono() {
        return this._sono
    }

    get agua() {
        return this._agua
    }

    get excecoes() {
        return this._excecoes
    }

}