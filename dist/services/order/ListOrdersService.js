"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListOrdersService {
    async execute() {
        const OrdersList = await prisma_1.default.order.findMany({
            where: {
                draft: false,
                status: false,
            },
            orderBy: {
                created_at: 'asc',
            }
        });
        return OrdersList;
    }
}
exports.ListOrdersService = ListOrdersService;
//# sourceMappingURL=ListOrdersService.js.map