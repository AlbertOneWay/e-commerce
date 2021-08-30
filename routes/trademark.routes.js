
const controller = require("../controller/logic/trademark.controller");


module.exports = (app) => {
    app.get("/trademark", (req, res, next) =>{
        controller.getAll(req, res, next);
    });

    app.get("/trademark/byid/:id", (req, res, next) =>{
        controller.getById(req, res, next);
    });
    
    app.post("/trademark", (req, res, next) =>{
        controller.createTrademark(req, res, next);
    });

    app.put("/trademark", (req, res, next) =>{
        controller.updateTrademark(req, res, next);
    });
    
    app.delete("/trademark", (req, res, next) =>{
        controller.deleteTrademark(req, res, next);
    });
}