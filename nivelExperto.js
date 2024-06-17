import { dataArray } from "./data.js";

// **Nivel Experto:**

// 16. Filtrar los objetos por una ciudad que contiene la letra "a" en su nombre.

// const cityContainA = dataArray.filter((city) => {
//     return city.direccion.toLowerCase().slice(city.direccion.indexOf(",")+2, city.direccion.length).includes("a")
// })
// console.log(cityContainA);

// 17. Obtener un nuevo array con los objetos cuya fecha de publicación es posterior al 20 de mayo de 2024.

// const publicationBackMay20 = dataArray.filter((dates) => {
//   return new Date(dates.fechaDePublicacion) > new Date("2024-05-20");
// });

// console.log(publicationBackMay20);

// 18. Obtener la suma total de los precios de venta de los objetos cuya cantidad de fotos es menor a 10.

// const lessThan10Photos = dataArray.filter((photos) => {
//     return photos.cantidadDeFotos < 10
// })

// const sumPriceLessThan10Photos = lessThan10Photos.reduce((acc, price) => {
//     return acc + price.precioDeVenta
// }, 0)

// console.log(`La suma de los precios, de los pisos con enos de 10 fotos es: ${sumPriceLessThan10Photos}`);

// 19. Obtener un nuevo array con el promedio de los metros cuadrados por ciudad de todos los objetos.


const cities = ["madrid", "barcelona", "valencia", "sevilla", "zaragoza", "málaga", "murcia", "palma", "canaria", "bilbao"]

function averageSquareMetersCity(city) {
  const cityArray = dataArray.filter((cities) => {
    return cities.direccion.toLowerCase().includes(city);
  });
  return cityArray;

}



// 20. Ordenar los objetos por nombre de forma descendente.

// const orderNameDescending = dataArray.sort((a, b) => {
//   if (parseInt(a.nombre.slice(a.nombre.indexOf(" ")+1, a.nombre.length)) < parseInt(b.nombre.slice(b.nombre.indexOf(" ")+1, b.nombre.length))) return 1;
//   if (parseInt(a.nombre.slice(a.nombre.indexOf(" ")+1, a.nombre.length)) > parseInt(b.nombre.slice(b.nombre.indexOf(" ")+1, b.nombre.length))) return -1;
//   return 0;
// });
// console.log(orderNameDescending);
