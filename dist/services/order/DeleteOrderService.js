"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteOrderService {
    async execute({ order_id }) {
        // valida preenchimento do order_id
        if (!order_id) {
            throw new Error("Request failed");
        }
        /////////
        // valida se a order_id informada existe
        const orderExists = await prisma_1.default.order.findFirst({
            where: {
                id: order_id,
            }
        });
        if (!orderExists) {
            throw new Error("Order not found");
        }
        /////////
        const orderDelete = await prisma_1.default.order.delete({
            where: {
                id: order_id,
            }
        });
        return orderDelete;
    }
}
exports.DeleteOrderService = DeleteOrderService;
//# sourceMappingURL=DeleteOrderService.js.map