import { getName } from "../../pages/api/api";

const buscar = document.getElementById("buscar");
const rel = document.querySelector("#search-results");

const elementLi = (textContent, href) => {
    const fragment = document.createDocumentFragment();
    const li = document.createElement("li");
    li.classList.add("li-rel");

    const a = document.createElement("a");

    a.classList.add("li-a");
    a.href = href; 
    a.textContent = textContent;
    li.style.paddingBottom = "10px"
    li.style.borderBottom = ".1px solid #7b7b7b8f"
    li.appendChild(a);
    fragment.appendChild(li);
    rel.appendChild(fragment);
};




buscar.addEventListener('input', async () => {
    let name = buscar.value;
    if (name) {
        rel.style.display = "flex";
        const datos = await getName(name);
        const resultado = datos.results;
        if(resultado.length > 0) {
            rel.innerHTML = "";
            resultado.forEach(({ title, id }) => {
                elementLi(`${title}`, `/resultadoPeli/${id}`)
            });
        } else {
            rel.innerHTML = "";
            rel.textContent = "No se encontro la pelicula"
        }
    } else {
        rel.innerHTML = "";
        rel.style.display = "none";
    }
});

window.addEventListener("click", event => {
    if(!rel.contains(event.target) && !buscar.contains(event.target)) {
        rel.style.display = "none"
    }
})