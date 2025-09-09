"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AddItemsService {
    async execute({ amount, order_id, product_id }) {
        const items = await prisma_1.default.item.create({
            data: {
                amount: amount,
                order_id: order_id,
                product_id: product_id,
            }
        });
        return items;
    }
}
exports.AddItemsService = AddItemsService;
//# sourceMappingURL=AddItemsService.js.map