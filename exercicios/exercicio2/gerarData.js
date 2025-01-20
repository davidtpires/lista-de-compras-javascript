function gerarData() {
    const dataAtual = new Date();
    const diaDaSemana = dataAtual.toLocaleDateString("pt-BR", { weekday: "long" });
    const dataCompleta = dataAtual.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const hora = dataAtual.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    return `${diaDaSemana}, ${dataCompleta} às ${hora}`;
}

console.log(gerarData());