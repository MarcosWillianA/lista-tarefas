const escreverTarefa = document.querySelector('#escreverTarefa');
const adicionarTarefa = document.querySelector('#adicionarTarefa');
const listaTarefas = document.querySelector('#listaTarefas');

adicionarTarefa.addEventListener('click', () => {
    if (escreverTarefa.value === '') {
        alert ('Você precisa escrever alguma coisa');
        salvarDados();
    }
    else {
        let tarefaEscrita = escreverTarefa.value;
        console.log(tarefaEscrita);
        let li = document.createElement('li');
        let p = document.createElement('p');
        let remover = document.createElement('button');
        
        li.classList.add('itemDaLista');
        p.classList.add('tarefasNaLista');
        p.innerHTML = tarefaEscrita;
        remover.classList.add('remover');
        remover.innerHTML = 'X';
        
        listaTarefas.appendChild(li);
        li.appendChild(p);
        li.appendChild(remover);
        escreverTarefa.value = '';

        p.addEventListener('click', () => {
            console.log('clicou');
            p.classList.add('marcado');
        });

        remover.addEventListener('click', () => {
            li.remove();    
            salvarDados();        
        })
        salvarDados();
    };
    salvarDados();
});

function salvarDados() {
    localStorage.setItem('data', listaTarefas.innerHTML);
}

function mostrarTarefas() {
    listaTarefas.innerHTML = localStorage.getItem('data');
}

mostrarTarefas();
