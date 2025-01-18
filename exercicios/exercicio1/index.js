const inputItem = document.getElementById("input-item");
const buttonItem = document.getElementById("button-item");
const results = document.getElementById("results");
let contador = 0;

buttonItem.addEventListener("click", (evento) => {
    evento.preventDefault();

    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    console.log(inputItem.value);
    const container = document.createElement("div");
    const itemDaLista = document.createElement("li");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    container.appendChild(inputCheckbox);
    container.appendChild(nomeItem);

    itemDaLista.appendChild(container);
    results.appendChild(itemDaLista);

})