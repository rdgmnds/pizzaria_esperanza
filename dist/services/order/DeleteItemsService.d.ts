interface DeleteItemRequest {
    item_id: string;
}
declare class DeleteItemsService {
    execute({ item_id }: DeleteItemRequest): Promise<{
        id: string;
        order_id: string;
        amount: number;
        product_id: string;
    }>;
}
export { DeleteItemsService };
//# sourceMappingURL=DeleteItemsService.d.ts.map