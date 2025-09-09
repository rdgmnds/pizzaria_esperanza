"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = __importDefault(require("../../prisma"));
class CreateUserService {
    async execute({ name, email, password }) {
        // valida preenchimento do e-mail
        if (!email) {
            throw new Error("Digite um e-mail válido");
        }
        const userAlreadyExists = await prisma_1.default.user.findFirst({
            where: {
                email: email
            }
        });
        if (userAlreadyExists) {
            throw new Error("Esse e-mail já existe");
        }
        ////////
        // criptografa senha
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        ////////
        const user = await prisma_1.default.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            // define os campos a retornarem na resposta
            select: {
                id: true,
                name: true,
                email: true,
            }
        });
        return user;
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=CreateUserService.js.map