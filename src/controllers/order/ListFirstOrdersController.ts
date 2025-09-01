import { ListOrdersService } from "../../services/order/ListOrdersService";

import { Request, Response } from "express";

class ListOrdersController {
    async handle( req: Request, res: Response ){

        const listOrdersService = new ListOrdersService();

        const orders = await listOrdersService.execute();

        return res.json(orders);

    }
}

export { ListOrdersController };