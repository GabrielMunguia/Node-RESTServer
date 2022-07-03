//middleware para validar si una url es de ebay
const validarUrl = async (req, res, next) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({
        status: false,
        message: "El campo url es requerido",
        });
    }
    if (!url.includes("ebay")) {
        return res.status(400).json({
        status: false,
        message: "El campo url debe ser de ebay",
        });
    }
    next();
    }

    module.exports = {
        validarUrl
    }