"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderController = void 0;
const DeleteOrderService_1 = require("../../services/order/DeleteOrderService");
class DeleteOrderController {
    async handle(req, res) {
        const order_id = req.body;
        const deleteOrderService = new DeleteOrderService_1.DeleteOrderService();
        const order = await deleteOrderService.execute(order_id);
        return res.json(order);
    }
}
exports.DeleteOrderController = DeleteOrderController;
//# sourceMappingURL=DeleteOrderController.js.map