const API_URL = "https://jsonplaceholder.typicode.com/users";
async function fetchUserNames() {
    // 1. Mandamos al mensajero (fetch) a buscar los datos a la URL. 
    // Usamos 'await' para decirle a nuestro código: "Espera aquí hasta que vuelva".
    const respuesta = await fetch(API_URL);
    // 2. El mensajero vuelve con un paquete cerrado. 
    // Usamos .json() para abrirlo y convertirlo en un formato que JavaScript entienda (un array de objetos).
    // 3. Ahora tenemos la lista completa de usuarios con todos sus datos (id, email, teléfono, etc.).
    // Tipamos la respuesta para evitar 'any'.
    const usuarios = (await respuesta.json());
    // Usamos .map() para recorrer esa lista y extraer ÚNICAMENTE la propiedad 'name' de cada uno.
    const soloNombres = usuarios.map((usuario) => usuario.name);
    // 4. Devolvemos nuestra nueva lista limpia.
    return soloNombres;
}
// Probamos la función
fetchUserNames().then(nombres => console.log("Nombres de la API:", nombres));
export {};
