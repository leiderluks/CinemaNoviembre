let peliculas = [
    {
        nombre: "Black Adam",
        duracion: 120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/black__adam.png?alt=media&token=ec963e5d-5d63-48e9-add0-7a4230ad89ac"
    },
    {
        nombre: "Los reyes",
        duracion:90,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/los%20reyes%20del%20mundo.jpg?alt=media&token=de36ae17-e096-451a-a5e3-433467fa74fb"
    },
    {
        nombre: "wakanda",
        duracion:110,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/wakanda.jpg?alt=media&token=07f844d8-70f3-4854-8e29-14955a417bdc"
    },
    {
        nombre: "lio lio",
        duracion:100,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/lio%20lio.jpg?alt=media&token=51efff4f-e726-4548-aa36-a3dfc0393cb6"
    },
    {
        nombre: "Sonrie",
        duracion:150,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/sonrie.jpg?alt=media&token=1d766115-2b2a-4965-b976-4546e2622038"
    },
    {
        nombre: "jauria",
        duracion:80,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/jauria.png?alt=media&token=456682a4-ccfb-4c8c-a131-200772127a46"
    },
    {
        nombre: "amenaza",
        duracion:99,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/amenaza.jpg?alt=media&token=af07b4d3-55df-4598-b67c-b54d06c6c064"
    },
    {
        nombre: "apocalipsis",
        duracion:130,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/apocalipsis.png?alt=media&token=1e58d5cf-b857-4f54-b83b-5720940f41a9"
    },
    {
        nombre: "apocalipsis",
        duracion:130,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/apocalipsis.png?alt=media&token=1e58d5cf-b857-4f54-b83b-5720940f41a9"
    },
    {
        nombre: "apocalipsis",
        duracion:130,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/apocalipsis.png?alt=media&token=1e58d5cf-b857-4f54-b83b-5720940f41a9"
    },
    {
        nombre: "apocalipsis",
        duracion:130,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/apocalipsis.png?alt=media&token=1e58d5cf-b857-4f54-b83b-5720940f41a9"
    },
    {
        nombre: "apocalipsis",
        duracion:130,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/apocalipsis.png?alt=media&token=1e58d5cf-b857-4f54-b83b-5720940f41a9"
    },
    {
        nombre: "apocalipsis",
        duracion:130,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/apocalipsis.png?alt=media&token=1e58d5cf-b857-4f54-b83b-5720940f41a9"
    }

]

let fila = document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto = document.createElement("img")
    foto.src= pelicula.poster
    foto.classList.add("img-fluid", "w-100")

    fila.appendChild(foto)
})