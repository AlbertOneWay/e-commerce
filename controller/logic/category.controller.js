/** Dto */

const categoryDto = require("../../model/dto/category.dto");


exports.createCategory = (req, res, next) => {
    let category = {
        name: req.body.name
    };
    categoryDto.create(category, (err, data) => {
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

exports.updateCategory = (req, res, next) => {
    let category = {
        name: req.body.name
    };
    categoryDto.update({ _id: req.body.id }, category, (err, data) => {
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
    categoryDto.getAll({}, (err, data) => {
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
    categoryDto.getById({id: req.params.id}, (err, data) => {
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


exports.deleteCategory = (req, res, next) => {
    categoryDto.delete({_id: req.body.id}, (err, data) => {
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