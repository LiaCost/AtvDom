let contador = 0;
const contadorDisplay = document.getElementById('contador');
const incrementoBtn = document.getElementById('incremento');
const decrementoBtn = document.getElementById('decremento');

function atualizarContador() {
    contadorDisplay.textContent = contador;
}

function contadorIncremento() {
    contador++;
    atualizarContador();
}

function contadorDecremento() {
    if (contador <= 0) {
        alert('O contador já está em zero! Não é possível decrementar.');
        return;
    }
    contador--;
    atualizarContador();
}

incrementoBtn.addEventListener('click', contadorIncremento);
decrementoBtn.addEventListener('click', contadorDecremento);

let paragrafos = [];
const textInput = document.getElementById('textInput');
const contadorCaracteres = document.getElementById('contadorCaracteres');
const paragrafosContainer = document.getElementById('paragrafos');

function atualizarContadorCaracteres() {
    const texto = textInput.value;
    const caracteresSemEspacos = texto.replace(/\s/g, '').length;
    contadorCaracteres.textContent = `${caracteresSemEspacos} caracteres`;
}

function adicionarParagrafo() {
    const texto = textInput.value.trim();
    if (texto !== '') {
        const paragrafo = document.createElement('p');
        paragrafo.className = 'paragrafo-adicionado';
        paragrafo.textContent = texto;
        paragrafosContainer.appendChild(paragrafo);
        paragrafos.push(texto);
        textInput.value = '';
        atualizarContadorCaracteres();
    }
}

textInput.addEventListener('input', atualizarContadorCaracteres);
textInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarParagrafo();
    }
});


atualizarContadorCaracteres();

let listaAtual = null;
let tipoListaAtual = 'ul';
const textInputLista = document.getElementById('textInputLista');
const tipoLista = document.getElementById('tipoLista');
const adicionarListaBtn = document.getElementById('adicionarLista');
const listasContainer = document.getElementById('listas');

function adicionarItemLista() {
    const texto = textInputLista.value.trim();
    const tipoSelecionado = tipoLista.value;
    
    if (texto !== '') {
        if (!listaAtual || tipoListaAtual !== tipoSelecionado) {
            listaAtual = document.createElement(tipoSelecionado);
            listaAtual.style.marginTop = '20px';
            listasContainer.appendChild(listaAtual);
            tipoListaAtual = tipoSelecionado;
        }
    
        const item = document.createElement('li');
        item.textContent = texto;
        listaAtual.appendChild(item);
        textInputLista.value = '';
    }
}

adicionarListaBtn.addEventListener('click', adicionarItemLista);
textInputLista.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarItemLista();
    }
});

const resetarBtn = document.getElementById('resetar');

function reset() {
    contador = 0;
    atualizarContador();
    
    paragrafos = [];
    textInput.value = '';
    atualizarContadorCaracteres();
    paragrafosContainer.innerHTML = '';
    
    listaAtual = null;
    tipoListaAtual = 'ul';
    textInputLista.value = '';
    listasContainer.innerHTML = '';
}

resetarBtn.addEventListener('click', reset);