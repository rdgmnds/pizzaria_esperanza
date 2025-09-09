"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteItemsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteItemsService {
    async execute({ item_id }) {
        const items = await prisma_1.default.item.delete({
            where: {
                id: item_id,
            }
        });
        return items;
    }
}
exports.DeleteItemsService = DeleteItemsService;
//# sourceMappingURL=DeleteItemsService.js.map