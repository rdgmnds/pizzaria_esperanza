import { DeleteItemsService } from "../../services/order/DeleteItemsService";

import { Request, Response } from "express";

class DeleteItemsController {
    async handle(req: Request, res: Response){

        const item_id = req.body;

        const deleteItemService = new DeleteItemsService();

        const items = await deleteItemService.execute(item_id);

        return res.json(items);

    }
}

export { DeleteItemsController };