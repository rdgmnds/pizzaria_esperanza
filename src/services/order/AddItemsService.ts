import prismaClient from "../../prisma";

interface AddItemsRequest {
    amount: number;
    order_id: string;
    product_id: string;
}

class AddItemsService {
    async execute({ amount, order_id, product_id }: AddItemsRequest){

        const items = await prismaClient.item.create({
            data: {
                amount: amount,
                order_id: order_id,
                product_id: product_id,
            }
        })

        return items;

    }
}

export { AddItemsService };