/** Dto */

const productDto = require("../../model/dto/product.dto");
const categoryDto = require("../../model/dto/category.dto");
const trademarkDto = require("../../model/dto/trademark.dto");



exports.createProduct = (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        existense: req.body.existence,
        qualification: req.body.qualification,
        category_id: categoryDto.getById({_id: req.params.id_category}, (err, data) => {
            if (err) {
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            }
            res.status(200).json(
                {
                    info: data
                }
            );
    
        }),
        trademark_id: trademarkDto.getById({_id: req.params.id_trademark}, (err, data) => {
            if (err) {
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            }
            res.status(200).json(
                {
                    info: data
                }
            );
    
        }),
        discount: req.body.discount
    };
    productDto.create(product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
        });
   
};

exports.updateProduct = (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        existense: req.body.existence,
        qualification: req.body.qualification,
        category_id: categoryDto.getById({_id: req.params.id_category}, (err, data) => {
            if (err) {
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            }
            res.status(200).json(
                {
                    info: data
                }
            );
    
        }),
        trademark_id: trademarkDto.getById({_id: req.params.id_trademark}, (err, data) => {
            if (err) {
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            }
            res.status(200).json(
                {
                    info: data
                }
            );
    
        }),
        discount: req.body.discount
    };
    productDto.update({ _id: req.body.id }, product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }

        res.status(201).json(
            {
                info: data
            }
        );

    });
};

exports.getAll = (req, res, next) => {
    productDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );

    });
};

exports.getById = (req, res, next) => {
    productDto.getById({_id: req.params.id}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );

    });
};


exports.deleteProduct = (req, res, next) => {
    productDto.delete({_id: req.body.id}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}