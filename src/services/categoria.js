class CategoriaService{
   
    constructor(categoriaModel){
        this.categoria = categoriaModel
    }

    async lista(){
        const categorias = await this.categoria.findAll()
        return categorias
    }

    async cadastrar(categoriaDTO){

        // const descricao = await this.categoria.findOne({
        //     where: {
        //         descricao: categoriaDTO.descricao
        //     }
        // })
        
        // if(descricao != null){
        //     throw new Error("Descrição já existente.")
        // }

        try {
            await this.categoria.create(categoriaDTO)
        } catch (erro) {
            console.error(erro.message)
            throw erro
        }
    
    }

}

module.exports = CategoriaService