const { Convert } = require("easy-currencies");
const getPriceUSD= async(precio)=>{
console.log('este es el precio que llega :',precio);
  try {
    const lstMonedas= ["USD","US","EUR","GBP","JPY","CAD","AUD","NZD","CHF","HKD","SGD","SEK","DKK","NOK","KRW","TRY","RUB","INR","BRL","CNY","MYR","IDR","PHP","TWD","THB","VND","ZAR"];
    let monedaProducto = "USD";
    let valor = 0;
    if(precio.includes("$")){
      
        precio =  precio.replace("$","");
    }

   
    lstMonedas.forEach(moneda=>{
        if(precio.includes(moneda)){
           if(moneda==="US"){
            monedaProducto="USD";
            valor=precio.replace("US","");
           }else{
            monedaProducto=moneda;
            valor=precio.replace(monedaProducto,"");
           }
       
            
        }
      })

    const precioEnDolares = await Convert(valor).from(monedaProducto).to("USD");
    return precioEnDolares.toFixed(2);
  } catch (error) {
    0
  }
}

module.exports={
    getPriceUSD
}