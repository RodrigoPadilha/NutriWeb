class ListRegisters{

    constructor(renderTableRegisters){
        this._registers = []
        this._renderTableRegisters = renderTableRegisters
    }

    insertRegister(register){
        this._registers.push(register)
        this._renderTableRegisters(this)        // essa função vai chamar o metodo update da View passando a ListRegisters._registers
    }

    removeAllRegisters(){        
        this._registers = []
        this._renderTableRegisters(this)        // essa função vai chamar o metodo update da View passando a ListRegisters._registers
    }

    get registers(){
        return [].concat(this._registers)   // Programação defensiva que devolve uma cópia da lista
    }                                       // armazenada no obje
    
}