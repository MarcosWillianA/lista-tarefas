const escreverTarefa = document.querySelector('#escreverTarefa');
const adicionarTarefa = document.querySelector('#adicionarTarefa');
const listaTarefas = document.querySelector('#listaTarefas');



adicionarTarefa.addEventListener('click', () => {
    if (escreverTarefa.value === '') {
        console.log('Tá vazio');
        alert ('Você precisa escrever alguma coisa')
    }
    else {
        let tarefaEscrita = escreverTarefa.value;
        console.log(tarefaEscrita);
        let li = document.createElement('li');
        li.innerHTML = tarefaEscrita;
        listaTarefas.appendChild(li);
    };
});

