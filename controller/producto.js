const { getProductoEbay } = require("../helpers/getProductoEbay");

const getProducto = async (req, res) => {

try {
    const {url}= req.body;

    const producto = await getProductoEbay(url);
  
  return   res.status(200).json({
        status:true,
        data:producto
    });
    

} catch (error) {
    res.status(500).json({
        status:false,
        message: error.message
    });

}
}

module.exports={
    getProducto
}