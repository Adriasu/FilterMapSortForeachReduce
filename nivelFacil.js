import { dataArray } from "./data.js";

// **Nivel Fácil:**

// 1. Filtrar los objetos del array por una ciudad específica. La ciudad la recibirá por parámetro.

// function filterCity (city) {
//     const cityArray = dataArray.filter((cities) => {
//         return cities.direccion.includes(city)
//     })
//     return cityArray
// }

// console.log(filterCity("Madrid"));

// 2. Obtener un nuevo array con los nombres de los objetos.

// const namesObjets = dataArray.map((name) => {
//   return name.nombre;
// });

// console.log(namesObjets);

// 3. Obtener la suma total de las cantidades de fotos de todos los objetos.

// const sumPhotos = dataArray.reduce((acc, photo) => {
//     return acc + photo.cantidadDeFotos
// }, 0)

// console.log(sumPhotos);

// 4. Obtener un nuevo array con los objetos que tienen más de 100 metros cuadrados.

// const apartmentsWithMore100m2 = dataArray.filter ((metros) => {
//     return metros.metrosCuadrados > 100
// })
// console.log(apartmentsWithMore100m2);

// 5. Ordenar los objetos por fecha de publicación de forma ascendente.

// const copyOfDataArray = [].concat(dataArray)

// const publicationDate = dataArray.sort((a, b) => {
//     if (a.fechaDePublicacion < b.fechaDePublicacion) return -1
//     if (a.fechaDePublicacion >b.fechaDePublicacion) return 1
//     return 0   
// });
// console.log(publicationDate);


