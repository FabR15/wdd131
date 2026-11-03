const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('______');

const li = document.createElement('li');
const botaoExcluir = document.createElement('button');

li.textContent = input.value;
botaoExcluir.textContent = '❌';
li.append(botaoExcluir);
li.append(li);

if (input.value.trim() !== '') { 
    button.addEventListener('click', function() {
    
    list.removeChild(li);
    input.focus();
    input.value = '';
    input.focus();
    });

    }