import { Cliente } from "./classes.js";

import { apiurl,fetchClientes, addCliente } from "./utils.js";


const cliente = document.getElementById("listadeclientes");
const addButton = document.getElementById("add");
const descricaoInput = document.getElementById("click");
         async function carregar() {
 const listadeclientes = await fetchClientes();
         cliente.innerHTML = "";
         listadeclientes.forEach((clientedata) => {
const cliente = new Cliente(clientedata._id, clientedata.descricao);
 console.log(cliente);
const item = document.createElement("li");
         item.innerHTML = `
         ${cliente.descricao} 
         <button class="delete-btn" onclick="removerCliente('${cliente.id}')">X</button>
        `;
const deleteButton = item.querySelector(".delete-btn");
        deleteButton.addEventListener("click", () => {
       awaitdeleteCliente(cliente.id);
       carregarclientes();
        });
        cliente.appendChild(item);  

    });

 }
   addButton.addEventListener("click", async () => {
 const descricao = descricaoInput.value.trim();
 if (descricao) {
       await addCliente(descricao);
       inputdescricao.value = "";
       carregarclientes();
    } else {
       alert("Por favor, insira uma descriçã.");

    }
    });
    carregarclientes();