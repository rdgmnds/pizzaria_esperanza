"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
// MIDDLEWARES
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)({
    limits: { fileSize: 50 * 1024 * 1024 } //50mb no maximo
}));
app.use(routes_1.router);
// 1. cria rota estática para as imagens
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
// 2. trata erros
app.use((err, req, res, next) => {
    // 2.1. se for uma instância de erro esperada pelo express
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    // 2.2. se for qualquer outro tipo de erro
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
app.listen(process.env.PORT, () => console.log("Servidor rodando..."));
//# sourceMappingURL=server.js.map