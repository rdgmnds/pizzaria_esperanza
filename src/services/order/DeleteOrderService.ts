import prismaClient from "../../prisma";

interface OrderDeleteRequest {
    order_id: string;
}

class DeleteOrderService {
    async execute({ order_id }: OrderDeleteRequest){

        // valida preenchimento do order_id
        if (!order_id){
            throw new Error("Request failed");
        }
        /////////

        // valida se a order_id informada existe
        const orderExists = await prismaClient.order.findFirst({
            where: {
                id: order_id,
            }
        })

        if (!orderExists){
            throw new Error("Order not found");
        }
        /////////

        const orderDelete = await prismaClient.order.delete({
            where: {
                id: order_id,
            }
        })
        
        return orderDelete;
    }
}

export { DeleteOrderService };