const getPriceUSD = async (precio) => {
  console.log("este es el precio que llega :", precio);
  try {
    const lstMonedas = [
      "USD",
      "US",
      "EUR",
      "GBP",
      "JPY",
      "CAD",
      "AUD",
      "NZD",
      "CHF",
      "HKD",
      "SGD",
      "SEK",
      "DKK",
      "NOK",
      "KRW",
      "TRY",
      "RUB",
      "INR",
      "BRL",
      "CNY",
      "MYR",
      "IDR",
      "PHP",
      "TWD",
      "THB",
      "VND",
      "ZAR",
    ];
    let monedaProducto = "USD";
    let valor = 0;
    if (precio.includes("$")) {
      precio = precio.replace("$", "");
    }

    lstMonedas.forEach((moneda) => {
      if (precio.includes(moneda)) {
        if (moneda === "US") {
          monedaProducto = "USD";
          valor = precio.replace("US", "");
        } else {
          monedaProducto = moneda;
          valor = precio.replace(monedaProducto, "");
        }
        valor = valor.trim();

        for (let i = 0; i < 8; i++) {
          if ((valor[i] !== "." && isNaN(valor[i])) || valor[i] == "e") {
            valor = valor.replace(valor[i], "");
          }
        }
      }
    });
    valor = valor.replace("e", "");

    const precioEnDolares = await Convert(valor).from(monedaProducto).to("USD");
    return precioEnDolares.toFixed(2);
  } catch (error) {
    0;
  }
};

module.exports = {
  getPriceUSD,
};
