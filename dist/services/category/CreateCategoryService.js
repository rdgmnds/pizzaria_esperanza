"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateCategoryService {
    async execute({ name }) {
        // verifica se digitou o nome da categoria
        if (!name) {
            throw new Error("Digite o nome da categoria");
        }
        ////////
        // verifica se a categoria já existe
        const userAlreadyExists = await prisma_1.default.category.findFirst({
            where: {
                name: name
            }
        });
        if (userAlreadyExists) {
            throw new Error("Essa categoria já existe");
        }
        ////////
        const category = prisma_1.default.category.create({
            data: {
                name: name
            },
            select: {
                name: true
            }
        });
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
//# sourceMappingURL=CreateCategoryService.js.map