/** Dto */

const trademarkDto = require("../../model/dto/trademark.dto");


exports.createTrademark = (req, res, next) => {
    let trademark = {
        name: req.body.name
    };
    trademarkDto.create(trademark, (err, data) => {
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

exports.updateTrademark = (req, res, next) => {
    let trademark = {
        name: req.body.name
    };
    trademarkDto.update({ _id: req.body.id }, trademark, (err, data) => {
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
    trademarkDto.getAll({}, (err, data) => {
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
    trademarkDto.getById({id: req.params.id}, (err, data) => {
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


exports.deleteTrademark = (req, res, next) => {
    trademarkDto.delete({_id: req.body.id}, (err, data) => {
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