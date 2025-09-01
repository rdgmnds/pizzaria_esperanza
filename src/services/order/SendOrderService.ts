import prismaClient from "../../prisma";

interface SendOrderRequest {
    order_id: string;
}

class SendOrderService {
    async execute({ order_id }: SendOrderRequest){

        const SendOrder = await prismaClient.order.update({
            where: {
                id: order_id,
            },
            data: {
                draft: false,
            }
        })

        return SendOrder;

    }
}

export { SendOrderService };