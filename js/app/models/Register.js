class Register{

    constructor(date, food, exercise, intestine, sleep, water, exceptions){
        this._date = new Date(date.getTime())
        this._food = food
        this._exercise = exercise
        this._intestine = intestine
        this._sleep = sleep
        this._water = water
        this._exceptions = exceptions
    }

    get date(){
        return this._date
    }

    get food(){
        return this._food
    }
    // set food(data){
    //     this._food = data
    // }

    get exercise() {
        return this._exercise
    }

    get intestine() {
        return this._intestine
    }

    get sleep() {
        return this._sleep
    }

    get water() {
        return this._water
    }

    get exceptions() {
        return this._exceptions
    }

}