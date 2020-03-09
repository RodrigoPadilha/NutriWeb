class BindHelper{

    /**
     * Essa classe faz a ligação entre om model e a View, desta forma quando o model for alterado a View será renderizada
     * @param {*} model 
     * @param {*} view 
     * @param {*} props Rest operator com as properties/metodos que serão observados
     */
    constructor(model, view, ...props){
        /**
         * Cria um proxy com o model, proxy e cada vez que as props forem acessadas executa a lambda function do terceiro argumento
         */
        let proxy = ProxyFactory.create(model, props, (model) => view.update(model))
        view.update(model)
        return proxy
    }
}