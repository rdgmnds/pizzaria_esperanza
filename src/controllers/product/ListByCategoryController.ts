import { ListByCategoryService } from "../../services/product/ListByCategoryService";

import { Request, Response } from "express";

class ListByCategoryController {
    async handle( req: Request, res: Response ){

        const category_id = req.query.category_id as string;
        
        const listProductService = new ListByCategoryService();
        
        const products = await listProductService.execute({
            category_id
        });

        return res.json(products);
    }
}

export { ListByCategoryController };