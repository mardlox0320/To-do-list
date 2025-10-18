const armazenarkey = 'tarefas';
const ovo = document.getElementById('coiso');
let tarefaInput = document.getElementById('tarefaInput');
const lista = document.getElementById('lista');

function adicionarTarefa() {
    if (tarefaInput.value == '') {
        alert('Digite uma tarefa');
    }
    else {
         let values = JSON.parse(localStorage.getItem(armazenarkey) || '[]');
        values.push({
            name: tarefaInput.value
        });
        localStorage.setItem(armazenarkey, JSON.stringify(values));
        show();
        tarefaInput.value = '';
    }
}
    const show = () => {
        let values = JSON.parse(localStorage.getItem(armazenarkey) || '[]'); 
        lista.innerHTML = ''
        let i = 0
        while(i < values.length)  {
            lista.innerHTML += `<li>${values[i]['name']} <button type="reset" onclick="remove('${values[i]['name']}')">t</button></li>`
            i++
        }  
    }
    const remove = (indice) => {
        let values = JSON.parse(localStorage.getItem(armazenarkey) || '[]');
       let index = values.findIndex(x => x.name == indice);
       values.splice(index, 1)
        localStorage.setItem(armazenarkey, JSON.stringify(values));
        show()
    }
    show()