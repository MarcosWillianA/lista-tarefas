const escreverTarefa = document.querySelector('#escreverTarefa');
const adicionarTarefa = document.querySelector('#adicionarTarefa');
const listaTarefas = document.querySelector('#listaTarefas');

// Função para carregar as tarefas do localStorage
function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(tarefa => adicionarTarefaNaLista(tarefa));
}

adicionarTarefa.addEventListener('click', () => {
    if (escreverTarefa.value === '') {
        alert ('Você precisa escrever alguma coisa')
    }
    else {
        let tarefaEscrita = escreverTarefa.value;
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
            
        })
    };
    
});

