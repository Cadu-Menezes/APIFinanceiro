class CategoriaService{
   
    constructor(categoriaModel){
        this.categoria = categoriaModel
    }

    async lista(){
        const categorias = await this.categoria.findAll()
        return categorias
    }

    async cadastrar(categoriaDTO){

        try {
            await this.categoria.create(categoriaDTO)
        } catch (erro) {
            console.erro(erro.message)
            throw erro
        }
    
    }

}

module.exports = CategoriaService