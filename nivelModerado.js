import { dataArray } from "./data.js";

// **Nivel Moderado:**

// 6. Filtrar los objetos por un rango de precios de venta. El rango de precios será recibido por parámetro.

// function priceRange(priceMin, priceMax) {
//     const priceFilter = dataArray.filter((price) => {
//         return price.precioDeVenta >= priceMin && price.precioDeVenta <= priceMax
//     })
//     return priceFilter
// }
// console.log(priceRange (70000, 300000));

// 7. Obtener un nuevo array con los objetos que tienen una cantidad de fotos par.

// const evenPhotos = dataArray.filter((photos) => {
//   return photos.cantidadDeFotos % 2 === 0;
// });

// console.log(evenPhotos);

// 8. Obtener la suma total y el promedio de los metros cuadrados de todos los objetos.

const sumSquareMeters = dataArray.reduce((acc, squareMeters) => {
    return acc + squareMeters.metrosCuadrados
}, 0)

const averageSquareMeters = (sumSquareMeters / dataArray.length).toFixed(2)

console.log(`La suma de los metros cuadrados es ${sumSquareMeters} m2 y su promedio es ${averageSquareMeters} m2`);


// 9. Obtener un nuevo array con los objetos cuya dirección contiene la palabra "calle".

// const calleDirection = dataArray.filter((direction) => {
//     return direction.direccion.toLowerCase().includes("calle")
// })
// console.log(calleDirection);

// 10. Ordenar los objetos por precio de venta de forma descendente.

// const sellingPrice = dataArray.sort((a, b) => {
//     if (a.precioDeVenta < b.precioDeVenta) return 1
//     if (a.precioDeVenta > b.precioDeVenta) return -1
//     return 0
// })
// console.log(sellingPrice);
