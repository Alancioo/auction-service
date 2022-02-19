"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const User = require('../models/User');
const Product = require('../models/product');
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
const router = express_1.default.Router();
router.get('/', async (req, res) => {
    try {
        const product = await Product.find({});
        return res.status(200).send(product);
    }
    catch (err) {
        return res.status(500).send(err);
    }
});
router.post('/', middlewares_1.verifyToken, middlewares_1.checkRequestMethod, async (req, res) => {
    try {
        const seller = await User.findOne({
            login: req.body.login,
        });
        const addedProduct = await new Product({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            added: new Date(),
            owner: seller._id,
            image: req.body.image,
            description: req.body.description,
        }).save();
        return res.status(200).send(addedProduct);
    }
    catch (err) {
        return res.status(500).send(err);
    }
});
module.exports = router;
//# sourceMappingURL=products.js.map