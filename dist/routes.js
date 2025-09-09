"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const isAuthenticated_1 = __importDefault(require("./middlewares/isAuthenticated"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const DeleteOrderController_1 = require("./controllers/order/DeleteOrderController");
const AddItemsController_1 = require("./controllers/order/AddItemsController");
const DeleteItemsController_1 = require("./controllers/order/DeleteItemsController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const ListFirstOrdersController_1 = require("./controllers/order/ListFirstOrdersController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const router = (0, express_1.Router)();
exports.router = router;
//const upload = multer(uploadConfig.upload("./tmp"))
// USER
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.default, new DetailUserController_1.DetailUserController().handle);
// CATEGORY
router.post('/category', isAuthenticated_1.default, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/categories', isAuthenticated_1.default, new ListCategoryController_1.ListCategoryController().handle);
// PRODUCT
//router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.post('/product', isAuthenticated_1.default, new CreateProductController_1.CreateProductController().handle);
router.get('/category/product', isAuthenticated_1.default, new ListByCategoryController_1.ListByCategoryController().handle);
// ORDER
router.post('/order', isAuthenticated_1.default, new CreateOrderController_1.CreateOrderController().handle);
router.delete('/order/delete', isAuthenticated_1.default, new DeleteOrderController_1.DeleteOrderController().handle);
router.post('/order/items', isAuthenticated_1.default, new AddItemsController_1.AddItemsController().handle);
router.delete('/order/items/delete', isAuthenticated_1.default, new DeleteItemsController_1.DeleteItemsController().handle);
router.put('/order/send', isAuthenticated_1.default, new SendOrderController_1.SendOrderController().handle);
router.put('/order/finish', isAuthenticated_1.default, new FinishOrderController_1.FinishOrderController().handle);
router.get('/orders', isAuthenticated_1.default, new ListFirstOrdersController_1.ListOrdersController().handle);
router.get('/order/detail', isAuthenticated_1.default, new DetailOrderController_1.DetailOrderController().handle);
//# sourceMappingURL=routes.js.map