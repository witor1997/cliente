const apiUrl = "https://crudcrud.com/api/79ee87315d19439ba75a05318c80ac9c/clientes"; // Substitua pelo novo endpoint gerado no CrudCrud
const clientes = document.getElementById("listadeclientes");


function carregarClientes() {
    fetch(apiUrl)
        .then(response => response.json())
        .then((listaDeClientes) => {
            clientes.innerHTML = "";
            listaDeClientes.forEach(cliente => {
                const item = document.createElement("li");
                item.innerHTML = `
                    ${cliente.descricao} 
                    <button class="delete-btn" onclick="removerCliente('${cliente._id}')">X</button>
                `;
                clientes.appendChild(item);
            });
        })
        .catch(error => console.error("Erro ao carregar clientes:", error));
}


document.getElementById("add").addEventListener("click", () => {
    const descricao = document.getElementById("click").value;

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ descricao })
    })
        .then(() => {
            document.getElementById("click").value = ""; 
            carregarClientes();
        })
        .catch(error => console.error("Erro ao adicionar cliente:", error));
});


function removerCliente(id) {
    fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    })
        .then(() => carregarClientes()) 
        .catch(error => console.error("Erro ao remover cliente:", error));
}


carregarClientes();