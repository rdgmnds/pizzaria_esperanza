import { AddItemsService } from "../../services/order/AddItemsService";

import { Request, Response } from "express";

class AddItemsController {
    async handle(req: Request, res: Response){

        const { amount, order_id, product_id } = req.body;

        const addItemsService = new AddItemsService();

        const items = await addItemsService.execute({
            amount,
            order_id,
            product_id,
        })

        return res.json(items);

    }
}

export { AddItemsController };