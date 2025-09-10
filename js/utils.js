// filepath: c:\Users\Gamer\Desktop\cliente\js\utils.js
export const apiurl =  "https://crudcrud.com/api/79ee87315d19439ba75a05318c80ac9c/clientes";

export async function fetchClientes() {
    const response = await fetch(apiurl);
    const clientes = await response.json();
    
}

export async function addCliente(descricao) {
    await fetch(apiurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ descricao })
    });
}
export async function deleteCliente(id) {
    await fetch(`${apiurl}/${id}`, {
        method: "DELETE"
    });
}