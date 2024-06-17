import { dataArray } from "./data.js";

// **Nivel Difícil:**

// 11. Filtrar los objetos por una ciudad que comienza con la letra "M".

// const citiesStartWhitM = dataArray.filter((city) => {
//     return city.direccion.toLowerCase().charAt(city.direccion.indexOf(",")+2) === "m"
// })

// console.log(citiesStartWhitM);

// 12. Obtener un nuevo array con los objetos cuya fecha de publicación es anterior al 15 de mayo de 2024.

// const publicationBeforeMay15 = dataArray.filter((dates) => {
//   return new Date(dates.fechaDePublicacion) < new Date("2024-05-15");
// });

// console.log(publicationBeforeMay15);

// 13. Obtener la cantidad total de fotos de los objetos cuyo precio de venta es mayor a 300,000.

// const priceMoreThan300Thousand = dataArray.filter((price) => {
//     return price.precioDeVenta > 300000
// })

// const sumPhotosPriceMoreThan300Thousand = priceMoreThan300Thousand.reduce((acc, photos) => {
//     return acc + photos.cantidadDeFotos
// }, 0)

// console.log(`La suma total de la cantidad de fotos de los pisos con precio de venta mayor a 300.000 es de ${sumPhotosPriceMoreThan300Thousand}`);

// 14. Obtener un nuevo array con los objetos cuya dirección contiene la palabra "avenida".

// const avenidaDirection = dataArray.filter((direction) => {
//     return direction.direccion.toLowerCase().includes("avenida")
// })
// console.log(avenidaDirection);

// 15. Ordenar los objetos por metros cuadrados de forma ascendente.

// const orderSquareMeters = dataArray.sort((a, b) => {
//   if (a.metrosCuadrados < b.metrosCuadrados) return -1;
//   if (a.metrosCuadrados > b.metrosCuadrados) return 1;
//   return 0;
// });
// console.log(orderSquareMeters);
