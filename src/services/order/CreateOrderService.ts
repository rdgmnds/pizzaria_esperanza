import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name: string;
}

class CreateOrderService {
    async execute({ table, name }: OrderRequest){

        // valida preenchimento dos campos obrigatórios
        if (!table){
            throw new Error("Número da mesa é obrigatório");
        }

        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name,
            }
        })

        return order;
    }
}

export { CreateOrderService };