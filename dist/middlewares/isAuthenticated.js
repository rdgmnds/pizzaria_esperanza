"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    // verifica o recebimento do token
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    ////////
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        // recupera id do token e adiciona na variável dentro do req
        req.user_id = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
//# sourceMappingURL=isAuthenticated.js.map