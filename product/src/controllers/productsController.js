import products from '../models/Product.js';

class productsController {
    static findAllProducts = (_req, res) => {
        products.find((_err, allProducts) => res.status(200).json(allProducts));
    };

    static findProductById = (req, res) => {
        const { id } = req.params;
        products.findById(id, (err, product) => {
            if (err) {
                res.status(404).send({ message: err.message });
            } else {
                res.status(200).json(product);
            }
        });
    };

    static createProduct = (req, res) => {
        const ObjProduct = new products(req.body);
        ObjProduct.save((err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).json(ObjProduct);
            }
        });
    };

    static updateProduct = (req, res) => {
        const { id } = req.params;
        products.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, product) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: `Product -${product.id}- successfully updated!` });
            }
        });
    };

    static deleteProduct = (req, res) => {
        const { id } = req.params;
        products.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).send({ message: 'Product successfully deleted.' });
            }
        });
    };
}

export default productsController;
