"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteItemsController = void 0;
const DeleteItemsService_1 = require("../../services/order/DeleteItemsService");
class DeleteItemsController {
    async handle(req, res) {
        const item_id = req.body;
        const deleteItemService = new DeleteItemsService_1.DeleteItemsService();
        const items = await deleteItemService.execute(item_id);
        return res.json(items);
    }
}
exports.DeleteItemsController = DeleteItemsController;
//# sourceMappingURL=DeleteItemsController.js.map