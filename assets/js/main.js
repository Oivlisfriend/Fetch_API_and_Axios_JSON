/*fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementoNaPagina(json))
    .catch(error => { console.log(error) });*/
axios('pessoas.json').then(resposta => carregaElementoNaPagina(resposta.data))

function carregaElementoNaPagina(json) {
    const table = document.createElement('table');
    const resultado = document.querySelector('.resultado');
    console.log(json);
    for (let pessoa of json) {
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);
        table.appendChild(tr);
    }
    resultado.appendChild(table);
}