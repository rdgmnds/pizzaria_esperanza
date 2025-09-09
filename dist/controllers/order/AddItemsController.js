"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemsController = void 0;
const AddItemsService_1 = require("../../services/order/AddItemsService");
class AddItemsController {
    async handle(req, res) {
        const { amount, order_id, product_id } = req.body;
        const addItemsService = new AddItemsService_1.AddItemsService();
        const items = await addItemsService.execute({
            amount,
            order_id,
            product_id,
        });
        return res.json(items);
    }
}
exports.AddItemsController = AddItemsController;
//# sourceMappingURL=AddItemsController.js.map