
const controller = require("../controller/logic/image.controller");


module.exports = (app) => {
    app.get("/image", (req, res, next) =>{
        controller.getAll(req, res, next);
    });

    app.get("/image/byid/:id", (req, res, next) =>{
        controller.getById(req, res, next);
    });
    
    app.post("/image", (req, res, next) =>{
        controller.createImage(req, res, next);
    });

    app.put("/image", (req, res, next) =>{
        controller.updateImage(req, res, next);
    });
    
    app.delete("/image", (req, res, next) =>{
        controller.deleteImage(req, res, next);
    });
}