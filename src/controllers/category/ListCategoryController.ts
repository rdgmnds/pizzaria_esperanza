import { ListCategoryService } from "../../services/category/ListCategoryService";

import { Request, Response } from "express";


class ListCategoryController {
    async handle(req: Request, res: Response){

        const listCategoryService = new ListCategoryService();
        
        const categories = await listCategoryService.execute();

        return res.json(categories);

    }
}

export { ListCategoryController };