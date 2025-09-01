import prismaClient from "../../prisma";

interface DeleteItemRequest {
    item_id: string;
}

class DeleteItemsService {
    async execute({ item_id }: DeleteItemRequest){

        const items = await prismaClient.item.delete({
            where: {
                id: item_id,
            }
        })

        return items;

    }
}

export { DeleteItemsService };