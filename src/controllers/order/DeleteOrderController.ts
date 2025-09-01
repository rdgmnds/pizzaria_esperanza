import { DeleteOrderService } from "../../services/order/DeleteOrderService";

import { Request, Response } from "express";

class DeleteOrderController {
    async handle(req: Request, res: Response){

        const order_id = req.body;
        
        const deleteOrderService = new DeleteOrderService();
        const order = await deleteOrderService.execute(order_id);

        return res.json(order);

    }
}

export { DeleteOrderController };