const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verficarListaVazia(listaDeCompras){
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0){
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

export default verficarListaVazia;