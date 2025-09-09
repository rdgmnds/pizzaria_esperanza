interface AddItemsRequest {
    amount: number;
    order_id: string;
    product_id: string;
}
declare class AddItemsService {
    execute({ amount, order_id, product_id }: AddItemsRequest): Promise<{
        id: string;
        order_id: string;
        amount: number;
        product_id: string;
    }>;
}
export { AddItemsService };
//# sourceMappingURL=AddItemsService.d.ts.map