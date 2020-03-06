class ListRegisters{

    constructor(){
        this._registers = []
    }

    insertRegister(register){
        this._registers.push(register)
    }

    get registers(){
        return [].concat(this._registers)   // Programação defensiva que devolve uma cópia da lista
    }                                       // armazenada no obje
    
}