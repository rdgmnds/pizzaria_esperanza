import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../src/config/multer';

import isAuthenticated from './middlewares/isAuthenticated';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import { AddItemsController } from './controllers/order/AddItemsController';
import { DeleteItemsController } from './controllers/order/DeleteItemsController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { ListOrdersController } from './controllers/order/ListFirstOrdersController';
import { DetailOrderController } from './controllers/order/DetailOrderController';

const router = Router();

//const upload = multer(uploadConfig.upload("./tmp"))

// USER
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);

// PRODUCT
//router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.post('/product', isAuthenticated, new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

// ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order/delete', isAuthenticated, new DeleteOrderController().handle);
router.post('/order/items', isAuthenticated, new AddItemsController().handle);
router.delete('/order/items/delete', isAuthenticated, new DeleteItemsController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle);
router.get('/orders', isAuthenticated, new ListOrdersController().handle);
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle);

export { router };