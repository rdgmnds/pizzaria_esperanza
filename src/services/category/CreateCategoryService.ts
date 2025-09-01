import prismaClient from "../../prisma";


interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: CategoryRequest){
        
        // verifica se digitou o nome da categoria
        if (!name){
            throw new Error("Digite o nome da categoria");
        }
        ////////

        // verifica se a categoria já existe
        const userAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if (userAlreadyExists){
            throw new Error("Essa categoria já existe");
        }
        ////////

        const category = prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                name: true
            }
        })

        return category;
    }
}

export { CreateCategoryService };