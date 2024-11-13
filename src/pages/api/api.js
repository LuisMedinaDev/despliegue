

export async function getID(id) {
  const API = `https://api.themoviedb.org/3/movie/${id}?api_key=6d41fb15c48ec20d9ce7efd1e1d5a9c1&language=es-ES`;
  const res = await fetch(API);
  const data = await res.json();
  return data;
}


export async function get(category, clave) {
  try {
    const API = `https://api.themoviedb.org/3/${clave}movie/${category}?api_key=6d41fb15c48ec20d9ce7efd1e1d5a9c1&language=es-ES`;
    const INFO_API = await fetch(API);
    const DATA = await INFO_API.json();

    return {
      body: JSON.stringify(DATA.results || []),
    };
    
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    return {
      body: JSON.stringify([]), // Retorna un arreglo vacío en caso de error
    };
  }
}

export async function getName(Name) {
  const KEY = '6d41fb15c48ec20d9ce7efd1e1d5a9c1';
  const API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=es-ES&query=${encodeURIComponent(Name)}`;

  const INFO = await fetch(API)
  const DATA = await INFO.json()


  return DATA
}
