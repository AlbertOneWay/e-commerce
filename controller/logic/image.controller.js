/** Dto */

const imageDto = require("../../model/dto/image.dto");
const productDto = require("../../model/dto/product.dto");


exports.createImage = (req, res, next) => {
    let image = {
        name: req.body.name,
        product_id: productDto.getById({_id: req.params.id_product}, (err, data) => {
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
    
        })
    };
    imageDto.create(image, (err, data) => {
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

exports.updateImage = (req, res, next) => {
    let image = {
        name: req.body.name,
        product_id: productDto.getById({_id: req.params.id_product}, (err, data) => {
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
    
        })
    };
    imageDto.update({ _id: req.body.id }, image, (err, data) => {
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
    imageDto.getAll({}, (err, data) => {
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
    imageDto.getById({id: req.params.id}, (err, data) => {
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


exports.deleteImage = (req, res, next) => {
    imageDto.delete({_id: req.body.id}, (err, data) => {
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