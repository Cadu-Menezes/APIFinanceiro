class CategoriaService{
    constructor(categoriaModel){
        this.categoria = categoriaModel
    }

    async lista(){
        const categorias = await this.categoria.findAll()
        return categorias
    }

    async cadastrar(cursoDTO){
        await this.categoria.create(cursoDTO)
    }

}

module.exports = CategoriaService