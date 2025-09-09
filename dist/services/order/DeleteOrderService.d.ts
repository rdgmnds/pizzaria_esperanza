interface OrderDeleteRequest {
    order_id: string;
}
declare class DeleteOrderService {
    execute({ order_id }: OrderDeleteRequest): Promise<{
        name: string | null;
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { DeleteOrderService };
//# sourceMappingURL=DeleteOrderService.d.ts.map