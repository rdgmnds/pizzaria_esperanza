import { CreateProductService } from "../../services/product/CreateProductService";

import { Request, Response } from "express";


class CreateProductController {
    async handle( req: Request, res: Response ){

        const { name, price, description, category_id } = req.body;
        
        const createProductService = new CreateProductService();

        // verifica se a foto do produto foi enviada
        if (!req.file){
            throw new Error("A foto do produto é obrigatória")
        }else{
            const { originalname, filename: banner } = req.file;

            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id,
        });
        ////////

        return res.json(product);

        }

    }
}

export { CreateProductController };