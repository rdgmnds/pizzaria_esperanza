interface SendOrderRequest {
    order_id: string;
}
declare class SendOrderService {
    execute({ order_id }: SendOrderRequest): Promise<{
        name: string | null;
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        table: number;
        status: boolean;
        draft: boolean;
    }>;
}
export { SendOrderService };
//# sourceMappingURL=SendOrderService.d.ts.map