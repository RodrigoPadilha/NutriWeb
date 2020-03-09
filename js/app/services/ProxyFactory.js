class ProxyFactory{

    /**
     * 
     * @param {*} object Objeto que será encapsulado pelo Proxy
     * @param {*} props Array de prorpiedades que será verificado
     * @param {*} action Comportamento que deve ser executado e devolverá um valor
     */
    static create(object, props, action){
        return new Proxy(object, {

            get(target, prop, receiver) {
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
                    return function() {
                        console.log(`a propriedade "${prop}" foi interceptada`);
                        Reflect.apply(target[prop], target, arguments);
                        return action(target);
                    }
                }
                return Reflect.get(target, prop, receiver);       
            },

            set(target, prop, value, receiver){                                 
                if(props.includes(prop)) {
                    target[prop] = value;
                    action(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        })
    }

    static _isFunction(func){
        return typeof(func) == typeof(Function)
    }
}