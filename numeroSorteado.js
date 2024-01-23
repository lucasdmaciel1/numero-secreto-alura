function numeroSorteado() {
    let sorteio = parseInt(Math.random() * 10 + 1);
    let tamanhoDaLista = listaNumeros = [];



    if (listaNumeros.includes(sorteio)) {
        return numeroSorteado();
    } else {
        listaNumeros.push(sorteio);
        console.log(listaNumeros);
        return sorteio;
    }
}
