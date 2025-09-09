"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateOrderService {
    async execute({ table, name }) {
        // valida preenchimento dos campos obrigatórios
        if (!table) {
            throw new Error("Número da mesa é obrigatório");
        }
        const order = await prisma_1.default.order.create({
            data: {
                table: table,
                name: name,
            }
        });
        return order;
    }
}
exports.CreateOrderService = CreateOrderService;
//# sourceMappingURL=CreateOrderService.js.map