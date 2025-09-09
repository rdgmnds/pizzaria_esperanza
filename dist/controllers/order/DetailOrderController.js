"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailOrderController = void 0;
const DetailOrderService_1 = require("../../services/order/DetailOrderService");
class DetailOrderController {
    async handle(req, res) {
        const order_id = req.query.order_id;
        const detailOrderService = new DetailOrderService_1.DetailOrderService();
        const order = await detailOrderService.execute({
            order_id,
        });
        return res.json(order);
    }
}
exports.DetailOrderController = DetailOrderController;
//# sourceMappingURL=DetailOrderController.js.map