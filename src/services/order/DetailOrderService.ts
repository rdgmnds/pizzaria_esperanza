import prismaClient from "../../prisma";

interface OrderDetailRequest {
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: OrderDetailRequest){

        const order = await prismaClient.item.findMany({
            where: {
                order_id: order_id,
            },
            // inclui dados desses models
            include: {
                product: true,
                order: true,
            }
        })

        return order;

    }
}

export { DetailOrderService };